const { spy } = require("chai")

function receivesAFunction(spy) {
    return spy("chai")
}
spy("chai")

function returnsANamedFunction() {
    return receivesAFunction
}


function returnsAnAnonymousFunction(fn) {
    return function() {
        return fn
    }
};