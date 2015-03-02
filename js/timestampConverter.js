define([
    // The dojo/dom module is required by this module, so it goes
    // in this list of dependencies.

], function() {
    // Once all modules in the dependency list have loaded, this
    // function is called to define the demo/myModule module.
    //
    // The dojo/dom module is passed as the first argument to this
    // function; additional modules in the dependency list would be
    // passed in as subsequent arguments.


    // This returned object becomes the defined value of this module
    return {

        convertTimestamp: function(timestamp) {
            // create a new javascript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds
            var a = new Date(timestamp);
            // hours part from the timestamp
            // minutes part from the timestamp
            // seconds part from the timestamp
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var year = a.getFullYear();
            var month = months[a.getMonth()];
            var date = a.getDate();
            var hour = a.getHours();
            var min = a.getMinutes();
            var sec = a.getSeconds();

            // will display time in DD/mm/YYYY 10:30:23 format
            var formattedTime = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
            return formattedTime;
        }

    };
});
