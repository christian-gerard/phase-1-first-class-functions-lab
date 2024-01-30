// Code your solution in this file!
const returnFirstTwoDrivers = (x) => {


        return x.slice(0,2)
    
}

const returnLastTwoDrivers = (x) => {
    return x.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier (x) {
    
    return function () {
        return x ** 2
    }
}

function fareDoubler(x) {
    return x * 2
}

function fareTripler(x) {
    return x * 3
}

function selectDifferentDrivers(x,y) {
    return y(x);
}

