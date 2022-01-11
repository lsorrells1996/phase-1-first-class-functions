function receivesAFunction(callback) {
    return callback();
}



function returnsANamedFunction() {
    const name = function() {
        return "My name is Lorenzo!";
    }
    return name;
}

function returnsAnAnonymousFunction() {
    return () => console.log('I\'m anon'); 
}