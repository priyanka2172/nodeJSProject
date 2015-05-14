/**
 * Created by Priyanka Acharya on 5/7/15.
 */


define(["jquery", "build/myHandleBar"], function ($, handlebars) {

   return Backbone.view.extend({
        defaults: {
                //var Employee_METHOD = {

            handlerData: function (resJSON) {


                $('#mydiv').html(handlebars(resJSON));

            },
            loadStudentData: function () {

                $.ajax({
//url:"http://localhost:63342/NewnodeJsProject/public/data/studentData.json",
                    url: "http://localhost:63342/NewnodeJsProject/public/data/studentData.json",
                    method: 'get',
                    success: this.handlerData

                })
            }
        }


    //return Employee_METHOD;
});

});