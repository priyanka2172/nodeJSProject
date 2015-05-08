/**
 * Created by Priyanka Acharya on 5/7/15.
 */


define(["jquery","handlebars"],function ($,handlebars) {


        var Employee_METHOD ={

            handlerData:function(resJSON){

                var templateSource   = $("#employee-template").html(),

                    template = handlebars.compile(templateSource),

                    studentHTML = template(resJSON);

                $('#mydiv').html(studentHTML);
                console.log($("#employee-template"))
            },
            loadStudentData : function(){

                $.ajax({
//url:"http://localhost:63342/NewnodeJsProject/public/data/studentData.json",
                    url:"http://localhost:63342/NewnodeJsProject/public/data/studentData.json",
                    method:'get',
                    success:this.handlerData

                })
            }
        };


    return Employee_METHOD;


});