
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log("hi im from outer function " + outerValue)
        console.log("hi im from inner function " + innerValue)
    }
}
const newFunction = outerFunction('sandagomi')
newFunction("vihanga")



//closures - its when the inner function access the outer function variables

const newOne = (sampleOne) => {
    const newTwo = (sampleTwo) => {
        console.log("hi im from newOne " + sampleOne)
        console.log("hi im from newTwo " + sampleTwo)
    }
    return newTwo
}
const newThree = newOne("sandagomi")
newThree("vihanga")


//closures - it is when the inner function access the outer function variables

const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
            console.log(count)
        },
        decrement() {
            count--
            console.log(count)
        }
    };
}
const newCounter = createCounter()

newCounter.increment()
newCounter.increment()
newCounter.decrement()
