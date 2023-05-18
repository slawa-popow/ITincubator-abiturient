var modFuncs = (function () {
    function addSquare(a, b) {
        return Math.pow((a + b), 2);
    }
    var addStrings = function (str1, str2) {
        return str1 + str2;
    };
    var publicApi = { addSquare: addSquare, addStrings: addStrings };
    return publicApi;
})();
console.log(modFuncs.addSquare(5, 2));
