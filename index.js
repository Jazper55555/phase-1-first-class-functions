function receivesAFunction(callback) {
    callback()
}
receivesAFunction(spy)

function returnsANamedFunction() {
    function namedFunction() {
        console.log("I need help")
    }
    return namedFunction
}
let fn = returnsANamedFunction()
fn()

function returnsAnAnonymousFunction() {
    return function () {
        console.log('')
    }
}
