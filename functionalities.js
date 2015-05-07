var EmployeeManager = function () {};


EmployeeManager.prototype.addEmployee = function () {
    $("#t01").append(
        "<tr class='employee-row'>" +
        "<td class='name'><input type='text' /></td>" +
        "<td class='phone' ><input type='text' /></td>" +
        "<td class='email'><input type='text' /></td>" +
        "<td class='commands'><img src='images/disk.png' class='btnSaver'><img src='images/delete.png' class='btnDelete'/></td>" +
        "</tr>");


};

EmployeeManager.prototype.editEmployee = function () {
    var employeeRow = $(this).closest(".employee-row");//tr
    var tdName = employeeRow.find(".name");

    var tdPhone = employeeRow.find(".phone");
    var tdEmail = employeeRow.find(".email");
    var tdButton = employeeRow.find(".commands");

    //var tdButton = employeeRow.children("td:nth-child(4)");

    var time = tdName.html("<input type='text' id='txtName' value='" + tdName.html() + "'/>");
    document.write(time);
    tdName.html("<input type='text' id='txtName' value='" + tdName.html() + "'/>");

    tdPhone.html("<input type='text' id='txtPhone' value='" + tdPhone.html() + "'/>");
    tdEmail.html("<input type='text' id='txtEmail' value='" + tdEmail.html() + "'/>");
    tdButton.html("<img src='images/disk.png' class='btnSaver'/>");


};

EmployeeManager.prototype.saveEmployee = function () {


    var employeeRow = $(this).closest(".employee-row"); //tr
    var tdName = employeeRow.find(".name");

    var tdPhone = employeeRow.find(".phone");
    var tdEmail = employeeRow.find(".email");
    var tdButton = employeeRow.find(".commands");
    //var tdButton = employeeRow.children("td:nth-child(4)");


    var $items = $('.name', '.phone', '.email', '.commands');
    var employees = {};
    $items.each(function () {
        employees[this.id] = $(this).val();



    })


    var nameVal=tdName.children("input[type=text]").val();
    var phoneVal=tdPhone.children("input[type=text]").val();
    var emailVal=tdEmail.children("input[type=text]").val();
    alert(nameVal);
    alert(phoneVal);
    alert(emailVal);
    $.ajax({
        url: "/employeesAdd",
        type: 'POST',
        data: { name:nameVal, phone:phoneVal, email:emailVal },
        success: function(data){

            console.log(data);

            console.log(data);

        },
        error: function(errorMsg) {
            alert("error");
        }


    });







    tdName.html(tdName.children("input[type=text]").val());
    tdPhone.html(tdPhone.children("input[type=text]").val());
    tdEmail.html(tdEmail.children("input[type=text]").val());
    tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");


};

EmployeeManager.prototype.deleteEmployee = function () {
    var employeeRow = $(this).closest(".employee-row"); //tr
    employeeRow.remove();


};
var employee = new EmployeeManager();






$(document).ready(function () {




//document.getElementById("body").on("click", "#btnaddEmployee",EmployeeManager.addEmployee);
    $("body").on("click", "#btnaddEmployee", employee.addEmployee);
    $("body").on("click", ".btnSaver", employee.saveEmployee);
    $("body").on("click", ".btnEdit", employee.editEmployee);
    $("body").on("click", ".btnDelete", employee.deleteEmployee);





});