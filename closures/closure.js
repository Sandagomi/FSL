
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {

        console.log("hi im from outer function " + outerValue)
        console.log("hi im from inner function " + innerValue)

    }
}

const newFunction = outerFunction('sandagomi')
newFunction("vihanga")



//closures - its when the inner function access the outer function variables

