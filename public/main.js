/**
 * Created by nisum-user on 5/7/15.
 */


define(["jquery","employeeManager","archieve/employeeData"], function ($,employeeManager,employeeData) {
   alert("main.js funtion");
    var main= employeeManager.loadStudentData();
    alert("main.js end");

    return main;

})



