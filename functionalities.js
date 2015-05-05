<<<<<<< Updated upstream
var EmployeeManager=function(){};


    EmployeeManager.prototype.addEmployee=function(){
		$("#t01").append(
			"<tr class='employee-row'>"+
			"<td class='name'><input type='text' /></td>"+
			"<td class='phone' ><input type='text' /></td>"+
			"<td class='email'><input type='text' /></td>"+
			"<td class='commands'><img src='images/disk.png' class='btnSaver'><img src='images/delete.png' class='btnDelete'/></td>"+
			"</tr>");
	

	};

    EmployeeManager.prototype.editEmployee=function (){
		var employeeRow = $(this).closest(".employee-row");//tr
        var tdName = employeeRow.find(".name");

        var tdPhone = employeeRow.find(".phone");
		var tdEmail = employeeRow.find(".email");
        var tdButton = employeeRow.find(".commands");

		//var tdButton = employeeRow.children("td:nth-child(4)");

       var time= tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
      document.write(time);
        tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");

=======
$(function(){

	function addEmployee(){
		$("#t01").append(
			"<tr>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><img src='images/disk.png' class='btnSaver'><img src='images/delete.png' class='btnDelete'/></td>"+
			"</tr>");
	
		$(".btnSaver").bind("click", Saver);
		$(".btnDelete").bind("click",deleteFunction);
	};

	function Edit(){
		var par = $(this).parent().parent(); //tr
		var tdName = par.children("td:nth-child(1)");
		var tdPhone = par.children("td:nth-child(2)");
		var tdEmail = par.children("td:nth-child(3)");
		var tdButton = par.children("td:nth-child(4)");

        tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
>>>>>>> Stashed changes
        tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
        tdButton.html("<img src='images/disk.png' class='btnSaver'/>");

<<<<<<< Updated upstream

	};

    EmployeeManager.prototype.saveEmployee=function (){



        var employeeRow = $(this).closest(".employee-row"); //tr
        var tdName = employeeRow.find(".name");
        var tdPhone = employeeRow.find(".phone");
        var tdEmail = employeeRow.find(".email");
        var tdButton = employeeRow.find(".commands");
		//var tdButton = employeeRow.children("td:nth-child(4)");


        var $items = $('.name', '.phone','.email','.commands');
        var employees = {};
        $items.each(function() {
            employees[this.id] = $(this).val()
        })
        $.ajax({
            type: 'POST',
            data: {data:employees},
            dataType: 'json',
            contentType: "application/x-www-form-urlencoded"

        });



=======
		$(".btnSaver").bind("click", Saver);
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", deleteFunction);
	};

	function Saver(){
		var par = $(this).parent().parent(); //tr
		var tdName = par.children("td:nth-child(1)");
		var tdPhone = par.children("td:nth-child(2)");
		var tdEmail = par.children("td:nth-child(3)");
		var tdButton = par.children("td:nth-child(4)");
>>>>>>> Stashed changes

        tdName.html(tdName.children("input[type=text]").val());
        tdPhone.html(tdPhone.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
        tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");

<<<<<<< Updated upstream


	};

    EmployeeManager.prototype.deleteEmployee=function (){
		var employeeRow =$(this).closest(".employee-row"); //tr
        employeeRow.remove();


	};
var employee = new EmployeeManager();
$(document).ready(function() {
    {



//document.getElementById("body").on("click", "#btnaddEmployee",EmployeeManager.addEmployee);
        $("body").on("click", "#btnaddEmployee", employee.addEmployee);
        $("body").on("click", ".btnSaver", employee.saveEmployee);
        $("body").on("click", ".btnEdit", employee.editEmployee);
        $("body").on("click", ".btnDelete", employee.deleteEmployee);

    }
=======
		$(".btnEdit").bind("click", Edit);
		$(".btnDelete").bind("click", deleteFunction);
	};

	function deleteFunction(){
		var par = $(this).parent().parent(); //tr
		par.remove();
	};

	$(".btnEdit").bind("click", Edit);
	$(".btnDelete").bind("click", deleteFunction);
	$("#btnaddEmployee").bind("click", addEmployee);

>>>>>>> Stashed changes
});