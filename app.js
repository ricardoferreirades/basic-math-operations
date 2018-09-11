'use strict';

function Operations() {}

function argsToArray(arg) {
    return Object.keys(arg).map(function(key){
        return arg[key]
    });
}

Operations.prototype.sum = function() {
    var arg, args, result;

    result = 0;

    args = argsToArray(arguments);

    args.forEach(function(elm) {
        result += (elm);
    })
    
    return result;
}

Operations.prototype.sub = function() {
    var args, result, i;

    args = argsToArray(arguments);
    
    if (args.length === 1) return args[0];

    result = args[0];

    for(i = args.length-1; i > 0; i-- ) {
        result -= (args[i]);
    }

    return result;
}

Operations.prototype.multiply = function() {
    var args, result;

    args = argsToArray(arguments);

    if (args.length === 1) return args[0];

    result = args[0];

    for(i = args.length-1; i > 0; i-- ) {
        result *= (args[i]);
    }

    return result;
}

Operations.prototype.divide = function() {
    var args, result;
    
    args = argsToArray(arguments);

    if (args.length === 1) return args[0];

    result = args[0];

    for(i = args.length-1; i > 0; i-- ) {
        result /= (args[i]);
    }

    return result;
}

module.exports = Operations;