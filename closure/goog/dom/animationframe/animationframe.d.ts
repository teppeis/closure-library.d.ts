declare module goog.dom.animationFrame {

    /**
     * @typedef {{
     *   id: number,
     *   fn: !Function,
     *   context: (!Object|undefined)
     * }}
     * @private
     */
    export interface Task_ {
        id: number;
        fn: Function;
        context: Object;
    }

    /**
     * @typedef {{
     *   measureTask: goog.dom.animationFrame.Task_,
     *   mutateTask: goog.dom.animationFrame.Task_,
     *   state: (!Object|undefined),
     *   args: (!Array|undefined),
     *   isScheduled: boolean
     * }}
     * @private
     */
    export interface TaskSet_ {
        measureTask: goog.dom.animationFrame.Task_;
        mutateTask: goog.dom.animationFrame.Task_;
        state: Object;
        args: Array<any>;
        isScheduled: boolean;
    }

    /**
     * @typedef {{
     *   measure: (!Function|undefined),
     *   mutate: (!Function|undefined)
     * }}
     */
    export interface Spec {
        measure: Function;
        mutate: Function;
    }

    /**
     * A type to represent state. Users may add properties as desired.
     * @constructor
     * @final
     */
    export class State {
        constructor();
    }

    /**
     * Returns a function that schedules the two passed-in functions to be run upon
     * the next animation frame. Calling the function again during the same
     * animation frame does nothing.
     *
     * The function under the "measure" key will run first and together with all
     * other functions scheduled under this key and the function under "mutate" will
     * run after that.
     *
     * @param {!{
     *   measure: (function(this:THIS, !goog.dom.animationFrame.State)|undefined),
     *   mutate: (function(this:THIS, !goog.dom.animationFrame.State)|undefined)
     * }} spec
     * @param {THIS=} opt_context Context in which to run the function.
     * @return {function(...[?])}
     * @template THIS
     */
    export function createTask<THIS>(spec: {measure: (arg0: goog.dom.animationFrame.State) => any; mutate: (arg0: goog.dom.animationFrame.State) => any}, opt_context?: THIS): (...arg0: any[]) => any;
}
