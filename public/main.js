/**
 * Created by Priyanka Acharya on 5/7/15.
 */

// set up require
require.config({
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});





require(["jquery","underscore","Backbone","employeeManager","archieve/employeeData"], function ($,_,Backbone,employeeManager,employeeData) {
   alert("main.js funtion");
    var main= employeeManager.loadStudentData();
    alert("main.js end");

    return main;
    //start history service
    Backbone.history.start();

})



