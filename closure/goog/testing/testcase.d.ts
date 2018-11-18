declare module goog {
    function require(name: 'goog.testing.TestCase'): typeof goog.testing.TestCase;
    function require(name: 'goog.testing.TestCase.Order'): typeof goog.testing.TestCase.Order;
    function require(name: 'goog.testing.TestCase.Test'): typeof goog.testing.TestCase.Test;
    function require(name: 'goog.testing.TestCase.Result'): typeof goog.testing.TestCase.Result;
    function require(name: 'goog.testing.TestCase.Error'): typeof goog.testing.TestCase.Error;
}

declare module goog.testing {

    /**
     * A class representing a JsUnit test case. A TestCase is made up of a number
     * of test functions which can be run. Individual test cases can override the
     * following functions to set up their test environment:
     *   - runTests - completely override the test's runner
     *   - setUpPage - called before any of the test functions are run
     *   - tearDownPage - called after all tests are finished
     *   - setUp - called before each of the test functions
     *   - tearDown - called after each of the test functions
     *   - shouldRunTests - called before a test run, all tests are skipped if it
     *                      returns false. Can be used to disable tests on browsers
     *                      where they aren't expected to pass.
     * <p>
     * TestCase objects are usually constructed by inspecting the global environment
     * to discover functions that begin with the prefix <code>test</code>.
     * (See {@link #autoDiscoverLifecycle} and {@link #autoDiscoverTests}.)
     * </p>
     *
     * <h2>Testing asychronous code with promises</h2>
     *
     * <p>
     * In the simplest cases, the behavior that the developer wants to test
     * is synchronous, and the test functions exercising the behavior execute
     * synchronously. But TestCase can also be used to exercise asynchronous code
     * through the use of <a
     * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
     * promises</a>. If a test function returns an object that has a
     * <code>then</code> method defined on it, the test framework switches to an
     * asynchronous execution strategy: the next test function will not begin
     * execution until the returned promise is resolved or rejected. Instead of
     * writing test assertions at the top level inside a test function, the test
     * author chains them on the end of the returned promise. For example:
     * </p>
     * <pre>
     *   function testPromiseBasedAPI() {
     *     return promiseBasedAPI().then(function(value) {
     *       // Will run when the promise resolves, and before the next
     *       // test function begins execution.
     *       assertEquals('foo', value.bar);
     *     });
     *   }
     * </pre>
     * <p>
     * Synchronous and asynchronous tests can be mixed in the same TestCase.
     * Test functions that return an object with a <code>then</code> method are
     * executed asynchronously, and all other test functions are executed
     * synchronously. While this is convenient for test authors (since it doesn't
     * require any explicit configuration for asynchronous tests), it can lead to
     * confusion if the test author forgets to return the promise from the test
     * function. For example:
     * </p>
     * <pre>
     *   function testPromiseBasedAPI() {
     *     // This test should never succeed.
     *     promiseBasedAPI().then(fail, fail);
     *     // Oops! The promise isn't returned to the framework,
     *     // so this test actually does succeed.
     *   }
     * </pre>
     * <p>
     * Since the test framework knows nothing about the promise created
     * in the test function, it will run the function synchronously, record
     * a success, and proceed immediately to the next test function.
     * </p>
     * <p>
     * Promises returned from test functions can time out. If a returned promise
     * is not resolved or rejected within {@link promiseTimeout} milliseconds,
     * the test framework rejects the promise without a timeout error message.
     * Test cases can configure the value of `promiseTimeout` by setting
     * <pre>
     *   goog.testing.TestCase.getActiveTestCase().promiseTimeout = ...
     * </pre>
     * in their `setUpPage` methods.
     * </p>
     *
     * @param {string=} opt_name The name of the test case, defaults to
     *     'Untitled Test Case'.
     * @constructor
     */
    class TestCase {
        constructor(opt_name?: string);
        
        /**
         * The maximum amount of time in milliseconds that the test case can take
         * before it is forced to yield and reschedule. This prevents the test runner
         * from blocking the browser and potentially hurting the test harness.
         * @type {number}
         */
        static maxRunTime: number;
        
        /**
         * Name of the current test that is running, or null if none is running.
         * @type {?string}
         */
        static currentTestName: string;
        
        /**
         * Avoid a dependency on goog.userAgent and keep our own reference of whether
         * the browser is IE.
         * @type {boolean}
         */
        static IS_IE: boolean;
        
        /**
         * Exception object that was detected before a test runs.
         * @type {*}
         * @protected
         */
        exceptionBeforeTest: any;
        
        /**
         * Whether the test case has ever tried to execute.
         * @type {boolean}
         */
        started: boolean;
        
        /**
         * Whether the test case is running.
         * @type {boolean}
         */
        running: boolean;
        
        /**
         * @return {string} The name of the test.
         */
        getName(): string;
        
        /**
         * Returns the current test or null.
         * @return {?goog.testing.TestCase.Test}
         * @protected
         */
        getCurrentTest(): goog.testing.TestCase.Test;
        
        /**
         * Adds a new test to the test case.
         * @param {!goog.testing.TestCase.Test} test The test to add.
         */
        add(test: goog.testing.TestCase.Test): void;
        
        /**
         * Creates and adds a new test.
         *
         * Convenience function to make syntax less awkward when not using automatic
         * test discovery.
         *
         * @param {string} name The test name.
         * @param {function()} ref Reference to the test function.
         * @param {!Object=} scope Optional scope that the test function should be
         *     called in.
         * @param {!Array<!Object>=} objChain An array of Objects that may have
         *     additional set up/tear down logic for a particular test.
         */
        addNewTest(name: string, ref: () => any, scope?: Object, objChain?: Array<Object>): void;
        
        /**
         * Sets the tests.
         * @param {!Array<goog.testing.TestCase.Test>} tests A new test array.
         * @protected
         */
        setTests(tests: Array<goog.testing.TestCase.Test>): void;
        
        /**
         * Gets the tests.
         * @return {!Array<goog.testing.TestCase.Test>} The test array.
         */
        getTests(): Array<goog.testing.TestCase.Test>;
        
        /**
         * Returns the number of tests contained in the test case.
         * @return {number} The number of tests.
         */
        getCount(): number;
        
        /**
         * Returns the number of tests actually run in the test case, i.e. subtracting
         * any which are skipped.
         * @return {number} The number of un-ignored tests.
         */
        getActuallyRunCount(): number;
        
        /**
         * Returns the current test and increments the pointer.
         * @return {goog.testing.TestCase.Test} The current test case.
         */
        next(): goog.testing.TestCase.Test;
        
        /**
         * Resets the test case pointer, so that next returns the first test.
         */
        reset(): void;
        
        /**
         * Adds a callback function that should be executed when the tests have
         * completed.
         * @param {function()} fn The callback function.
         */
        addCompletedCallback(fn: () => any): void;
        
        /**
         * @param {goog.testing.TestCase.Order} order The sort order for running tests.
         */
        setOrder(order: goog.testing.TestCase.Order): void;
        
        /**
         * @param {Object<string, boolean>} testsToRun Set of tests to run. Entries in
         *     the set may be test names, like "testFoo", or numeric indices. Only
         *     tests identified by name or by index will be executed.
         */
        setTestsToRun(testsToRun: {[index: string]: boolean}): void;
        
        /**
         * Can be overridden in test classes to indicate whether the tests in a case
         * should be run in that particular situation.  For example, this could be used
         * to stop tests running in a particular browser, where browser support for
         * the class under test was absent.
         * @return {boolean} Whether any of the tests in the case should be run.
         */
        shouldRunTests(): boolean;
        
        /**
         * Executes the tests, yielding asynchronously if execution time exceeds
         * {@link maxRunTime}. There is no guarantee that the test case has finished
         * once this method has returned. To be notified when the test case
         * has finished, use {@link #addCompletedCallback} or
         * {@link #runTestsReturningPromise}.
         */
        execute(): void;
        
        /**
         * Finalizes the test case, called when the tests have finished executing.
         */
        finalize(): void;
        
        /**
         * Saves a message to the result set.
         * @param {string} message The message to save.
         */
        saveMessage(message: string): void;
        
        /**
         * @return {boolean} Whether the test case is running inside the multi test
         *     runner.
         */
        isInsideMultiTestRunner(): boolean;
        
        /**
         * @return {boolean} Whether the test-progress should be logged to the console.
         */
        shouldLogTestProgress(): boolean;
        
        /**
         * Logs an object to the console, if available.
         * @param {*} val The value to log. Will be ToString'd.
         */
        log(val: any): void;
        
        /**
         * Groups the upcoming logs in the same log group
         */
        groupLogsStart(): void;
        
        /**
         * Closes the group of the upcoming logs
         */
        groupLogsEnd(): void;
        
        /**
         * @return {boolean} Whether the test was a success.
         */
        isSuccess(): boolean;
        
        /**
         * Returns a string detailing the results from the test.
         * @param {boolean=} opt_verbose If true results will include data about all
         *     tests, not just what failed.
         * @return {string} The results from the test.
         */
        getReport(opt_verbose?: boolean): string;
        
        /**
         * Returns the test results.
         * @return {!goog.testing.TestCase.Result}
         * @package
         */
        getResult(): goog.testing.TestCase.Result;
        
        /**
         * Returns the amount of time it took for the test to run.
         * @return {number} The run time, in milliseconds.
         */
        getRunTime(): number;
        
        /**
         * Returns the number of script files that were loaded in order to run the test.
         * @return {number} The number of script files.
         */
        getNumFilesLoaded(): number;
        
        /**
         * Returns the test results object: a map from test names to a list of test
         * failures (if any exist).
         * @return {!Object<string, !Array<goog.testing.TestCase.IResult>>} Test
         *     results object.
         */
        getTestResults(): {[index: string]: Array<goog.testing.TestCase.IResult>};
        
        /**
         * Executes each of the tests, yielding asynchronously if execution time
         * exceeds {@link #maxRunTime}. There is no guarantee that the test case
         * has finished execution once this method has returned.
         * To be notified when the test case has finished execution, use
         * {@link #addCompletedCallback} or {@link #runTestsReturningPromise}.
         *
         * Overridable by the individual test case.  This allows test cases to defer
         * when the test is actually started.  If overridden, finalize must be
         * called by the test to indicate it has finished.
         */
        runTests(): void;
        
        /**
         * Executes each of the tests, returning a promise that resolves with the
         * test results once they are done running.
         * @return {!IThenable<!goog.testing.TestCase.Result>}
         * @final
         * @package
         */
        runTestsReturningPromise(): IThenable<goog.testing.TestCase.Result>;
        
        /**
         * Gets list of objects that potentially contain test cases. For IE 8 and
         * below, this is the global "this" (for properties set directly on the global
         * this or window) and the RuntimeObject (for global variables and functions).
         * For all other browsers, the array simply contains the global this.
         *
         * @param {string=} opt_prefix An optional prefix. If specified, only get things
         *     under this prefix. Note that the prefix is only honored in IE, since it
         *     supports the RuntimeObject:
         *     http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx
         *     TODO: Remove this option.
         * @return {!Array<!Object>} A list of objects that should be inspected.
         */
        getGlobals(opt_prefix?: string): Array<Object>;
        
        /**
         * Gets list of objects that potentially contain test cases. For IE 8 and
         * below, this is the global "this" (for properties set directly on the global
         * this or window) and the RuntimeObject (for global variables and functions).
         * For all other browsers, the array simply contains the global this.
         *
         * @param {string=} opt_prefix An optional prefix. If specified, only get things
         *     under this prefix. Note that the prefix is only honored in IE, since it
         *     supports the RuntimeObject:
         *     http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx
         *     TODO: Remove this option.
         * @return {!Array<!Object>} A list of objects that should be inspected.
         */
        static getGlobals(opt_prefix?: string): Array<Object>;
        
        /**
         * @return {?goog.testing.TestCase} currently active test case or null if not
         *     test is currently running. Tries the G_testRunner first then the stored
         *     value (when run outside of G_testRunner.
         */
        static getActiveTestCase(): goog.testing.TestCase;
        
        /**
         * Calls {@link goog.testing.TestCase.prototype.invalidateAssertionException}
         * on the active test case if it is installed, and logs an error otherwise.
         * @param {!goog.testing.JsUnitException} e The exception object to invalidate.
         * @package
         */
        static invalidateAssertionException(e: goog.testing.JsUnitException): void;
        
        /**
         * Gets called before any tests are executed.  Can be overridden to set up the
         * environment for the whole test case.
         * @return {!Thenable|undefined}
         */
        setUpPage(): _Thenable|void;
        
        /**
         * Gets called after all tests have been executed.  Can be overridden to tear
         * down the entire test case.
         */
        tearDownPage(): void;
        
        /**
         * Gets called before every goog.testing.TestCase.Test is been executed. Can
         * be overridden to add set up functionality to each test.
         * @return {!Thenable|undefined}
         */
        setUp(): _Thenable|void;
        
        /**
         * Gets called after every goog.testing.TestCase.Test has been executed. Can
         * be overridden to add tear down functionality to each test.
         * @return {!Thenable|undefined}
         */
        tearDown(): _Thenable|void;
        
        /**
         * @return {string} The function name prefix used to auto-discover tests.
         */
        getAutoDiscoveryPrefix(): string;
        
        /**
         * @return {number} Time since the last batch of tests was started.
         * @protected
         */
        getBatchTime(): number;
        
        /**
         * @param {number} batchTime Time since the last batch of tests was started.
         * @protected
         */
        setBatchTime(batchTime: number): void;
        
        /**
         * Creates a `goog.testing.TestCase.Test` from an auto-discovered
         *     function.
         * @param {string} name The name of the function.
         * @param {function()} ref The auto-discovered function.
         * @param {!Object=} scope The scope to attach to the test.
         * @param {!Array<!Object>=} objChain
         * @return {!goog.testing.TestCase.Test} The newly created test.
         * @protected
         */
        createTest(name: string, ref: () => any, scope?: Object, objChain?: Array<Object>): goog.testing.TestCase.Test;
        
        /**
         * Adds any functions defined on the global object
         * that correspond to lifecycle events for the test case. Overrides
         * setUp, tearDown, setUpPage, tearDownPage, runTests, and shouldRunTests
         * if they are defined on global object.
         */
        autoDiscoverLifecycle(): void;
        
        /**
         * Extracts any functions defined on 'obj' that correspond to page lifecycle
         * events (setUpPage, tearDownPage, runTests, shouldRunTests) and add them to
         * on this test case.
         * @param {!Object} obj
         */
        setLifecycleObj(obj: Object): void;
        
        /**
         * @param {!Object} obj  An object from which to extract test and lifecycle
         * methods.
         */
        setTestObj(obj: Object): void;
        
        /**
         * Adds any functions defined in the global scope that are prefixed with
         * "test" to the test case.
         */
        autoDiscoverTests(): void;
        
        /**
         * Checks to see if the test should be marked as failed before it is run.
         *
         * If there was an error in setUpPage, we treat that as a failure for all
         * tests and mark them all as having failed.
         *
         * @param {goog.testing.TestCase.Test} testCase The current test case.
         * @return {boolean} Whether the test was marked as failed.
         * @protected
         */
        maybeFailTestEarly(testCase: goog.testing.TestCase.Test): boolean;
        
        /**
         * Cycles through the tests, yielding asynchronously if the execution time
         * exceeds {@link #maxRunTime}. In particular, there is no guarantee that
         * the test case has finished execution once this method has returned.
         * To be notified when the test case has finished execution, use
         * {@link #addCompletedCallback} or {@link #runTestsReturningPromise}.
         */
        cycleTests(): void;
        
        /**
         * Calls a function after a delay, using the protected timeout.
         * @param {Function} fn The function to call.
         * @param {number} time Delay in milliseconds.
         * @return {number} The timeout id.
         * @protected
         */
        timeout(fn: Function, time: number): number;
        
        /**
         * Clears a timeout created by `this.timeout()`.
         * @param {number} id A timeout id.
         * @protected
         */
        clearTimeout(id: number): void;
        
        /**
         * @return {number} The current time in milliseconds.
         * @protected
         */
        now(): number;
        
        /**
         * @return {number} The current time in milliseconds.
         * @protected
         */
        static now(): number;
        
        /**
         * Handles a test that passed.
         * @param {goog.testing.TestCase.Test} test The test that passed.
         * @protected
         */
        doSuccess(test: goog.testing.TestCase.Test): void;
        
        /**
         * Handles a test that was skipped.
         * @param {!goog.testing.TestCase.Test} test The test that was skipped.
         * @protected
         */
        doSkipped(test: goog.testing.TestCase.Test): void;
        
        /**
         * Records and logs an error from or related to a test.
         * @param {string} testName The name of the test that failed.
         * @param {*} error The exception object associated with the
         *     failure or a string.
         * @protected
         */
        recordError(testName: string, error: any): void;
        
        /**
         * Handles a test that failed.
         * @param {goog.testing.TestCase.Test} test The test that failed.
         * @protected
         */
        doError(test: goog.testing.TestCase.Test): void;
        
        /**
         * Makes note of an exception arising from an assertion, and then throws it.
         * If the test otherwise passes (i.e., because something else caught the
         * exception on its way to the test framework), it will be forced to fail.
         * @param {!goog.testing.JsUnitException} e The exception object being thrown.
         * @throws {goog.testing.JsUnitException}
         * @package
         */
        raiseAssertionException(e: goog.testing.JsUnitException): void;
        
        /**
         * Removes the specified exception from being tracked. This only needs to be
         * called for internal functions that intentionally catch an exception, such
         * as
         * `#assertThrowsJsUnitException`.
         * @param {!goog.testing.JsUnitException} e The exception object to invalidate.
         * @package
         */
        invalidateAssertionException(e: goog.testing.JsUnitException): void;
        
        /**
         * @param {string} name Failed test name.
         * @param {*} error The exception object associated with the
         *     failure or a string.
         * @return {!goog.testing.TestCase.Error} Error object.
         * @suppress {missingProperties} message and stack properties
         */
        logError(name: string, error: any): goog.testing.TestCase.Error;
        
        /**
         * @param {function(goog.testing.TestCase.Test, !Array<string>)} testDone
         */
        setTestDoneCallback(testDone: (arg0: goog.testing.TestCase.Test, arg1: Array<string>) => any): void;
        
        /**
         * Initializes the TestCase.
         * @param {goog.testing.TestCase} testCase The test case to install.
         * @param {function(goog.testing.TestCase.Test, Array<string>)=} opt_testDone
         *     Called when each test completes.
         */
        static initializeTestCase(testCase: goog.testing.TestCase, opt_testDone?: (arg0: goog.testing.TestCase.Test, arg1: Array<string>) => any): void;
        
        /**
         * Initializes the given test case with the global test runner 'G_testRunner'.
         * @param {goog.testing.TestCase} testCase The test case to install.
         * @param {function(goog.testing.TestCase.Test, Array<string>)=} opt_testDone
         *     Called when each test completes.
         */
        static initializeTestRunner(testCase: goog.testing.TestCase, opt_testDone?: (arg0: goog.testing.TestCase.Test, arg1: Array<string>) => any): void;
    }

    /**
     * @constructor
     * @param {function(): (?goog.testing.Continuation_|undefined)} fn
     * @private
     */
    interface Continuation_ {
    }
}

declare module goog.testing.TestCase {

    /**
     * The order to run the auto-discovered tests.
     * @enum {string}
     */
    type Order = string;
    var Order: {
        NATURAL: Order;
        RANDOM: Order;
        SORTED: Order;
    };

    /**
     * Represents a test result.
     * @typedef {{
     *     'source': string,
     *     'message': string,
     *     'stacktrace': string
     * }}
     */
    type IResult = {source: string; message: string; stacktrace: string};

    /**
     * A class representing a single test function.
     * @param {string} name The test name.
     * @param {?function()} ref Reference to the test function or test object.
     * @param {?Object=} scope Optional scope that the test function should be
     *     called in.
     * @param {!Array<?>=} objChain A chain of objects used to populate setUps
     *     and tearDowns.
     * @constructor
     */
    class Test {
        constructor(name: string, ref: () => any, scope?: Object, objChain?: Array<any>);
        
        /**
         * Executes the test function.
         * @package
         */
        execute(): void;
        
        /**
         * Sets the start time
         */
        started(): void;
        
        /**
         * Sets the stop time
         */
        stopped(): void;
        
        /**
         * Returns the runtime for this test function
         * @return {number} milliseconds takenn by the test.
         */
        getElapsedTime(): number;
    }

    /**
     * A class for representing test results.  A bag of public properties.
     * @param {goog.testing.TestCase} testCase The test case that owns this result.
     * @constructor
     * @final
     */
    class Result {
        constructor(testCase: goog.testing.TestCase);
        
        /**
         * @return {boolean} Whether the test was successful.
         */
        isSuccess(): boolean;
        
        /**
         * @return {string} A summary of the tests, including total number of tests that
         *     passed, failed, and the time taken.
         */
        getSummary(): string;
    }

    /**
     * A class representing an error thrown by the test
     * @param {string} source The name of the test which threw the error.
     * @param {string} message The error message.
     * @param {string=} opt_stack A string showing the execution stack.
     * @constructor
     * @final
     */
    class Error {
        constructor(source: string, message: string, opt_stack?: string);
        
        /**
         * Returns a string representing the error object.
         * @return {string} A string representation of the error.
         * @override
         */
        toString(): string;
    }
}

declare module goog.testing.Continuation_ {

    /** @param {?goog.testing.Continuation_|undefined} continuation */
    function run(continuation: goog.testing.Continuation_|void): void;
}
