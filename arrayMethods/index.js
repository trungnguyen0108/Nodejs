let numbers = [-1, 2, 3, 4, 1]

// forEach

Array.prototype.forEach2 = function (callback) {
    for (const i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
}

numbers.forEach2((number, index, numbers) => {
    console.log(number, index, numbers)
})

// filter


Array.prototype.filter2 = function (callback) {
    let output = [];

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }
        }
    }

    return output
}


let list = numbers.filter2((number) => {
    return number > 0
})

console.log(list)

// some

Array.prototype.some2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }
        }
    }
    return false
}

let resultSome = numbers.some2((number) => {
    return number < 0
})

console.log(resultSome)

// every

Array.prototype.every2 = function (callback) {
    let output = true;

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this)
            if (!result) {
                output = false;
            }
        }
    }

    return output;
}

let resultEvery = numbers.every2((number) => {
    return number > 0;
})

console.log(resultEvery)

// map

Array.prototype.map2 = function (callback) {
    let output = [];

    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this);
            if (result) {
                output.push(result)
            }
        }
    }

    return output;
}

let resultMap = numbers.map2((number) => {
    return number + 2
})

console.log(resultMap)

// reduce

Array.prototype.reduce2 = function (callback, result) {
    let index = 0;
    if (arguments.length < 2) {
        index = 1;
        result = this[0];
    }
    for (; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            result = callback(result, this[index], index, this)
        }
    }


    return result;
}

let resultReduce = numbers.reduce2((total, number) => {
    return total + number
},0)

console.log(resultReduce)