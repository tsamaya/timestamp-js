define([
    'dojo/dom',
    'dojo/on',
    'app/timestampConverter'
], function(dom, on, TimestampConverter) {
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.

    var oldText = {};

    var txf;
    var resultat;



    // This returned object becomes the defined value of this module
    return {
        setText: function(id, text) {
            var node = dom.byId(id);
            oldText[id] = node.innerHTML;
            node.innerHTML = text;
        },

        restoreText: function(id) {
            var node = dom.byId(id);
            node.innerHTML = oldText[id];
            delete oldText[id];
        },

        connect: function(idBtn, idTxf, idresultat) {
            var node = dom.byId(idBtn);
            txf = dom.byId(idTxf);
            on(node, "click", convert);

            function convert(evt) {
                var timestamp = txf.value;
                var str = TimestampConverter.convertTimestamp(parseInt(timestamp));
                //setText(idresultat, str);
                var node = dom.byId(idresultat);
                node.innerHTML = str;
            };
        }

    };
});