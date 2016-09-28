(function (root) {
    var i, len;

    root.Foreach = foreachProcess;

    function foreachProcess(obj, callback, quant) {

        if (quant != undefined) {
            resetWhile(quant);
        } else {

            resetWhile(obj);
        }


        while (i < len) {
            callback.call(obj, obj[i]);
            increase();
        };
    };

    function resetWhile(obj) {
        if (isArray(obj)) {
            len = obj.length;
        } else {
            len = obj;
        }
        i = 0;
    };

    function increase() {
        i++;
    }

    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };


})(this)