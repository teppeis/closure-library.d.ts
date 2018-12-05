#!/bin/bash

cd "$(dirname "$0")" || exit 1

find \
    ./node_modules/google-closure-library/closure/goog \
    ./node_modules/google-closure-library/third_party/closure/goog \
    -type f -name '*.js' |
        grep -v test_ |
        grep -v test.pb.js |
        grep -v tester.js |
        grep -v testhelper |
        grep -v _perf.js |
        grep -v /goog/transpile.js |
        grep -v /goog/promise/testsuiteadapter.js |
        grep -v /goog/net/fetchxmlhttpfactory.js | # worker
        grep -v /goog/messaging/ | # worker (portchannel.js)
            grep -v /goog/net/xpc/crosspagechannel.js |
            grep -v /goog/testing/messaging/ |
        xargs ./node_modules/.bin/clutz -o all.d.ts --closure_env BROWSER
