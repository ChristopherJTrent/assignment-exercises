function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length;  i++) {
        sum += arguments[i];
    }
    return sum;
}

function restSum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length;  i++) {
        sum += args[i];
    }
    return sum;
}

Function.prototype.myBind = function(ctx) {
    let that = this;
    const boundArgs = arguments;
    return () => {
        that.call(ctx, boundArgs.concat(arguments))
    }
}

Function.prototype.myRestBind = function(ctx, ...rest) {
    let that = this;
    return (...callTime) => {
        that.call(ctx, rest.concat(callTime));
    }
}

module.exports = {
    sum: sum,
    restSum: restSum
}

