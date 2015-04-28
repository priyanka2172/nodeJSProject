$(function(){

	function addEmployee(){
		$("#t01").append(
			"<tr class='employee-row'>"+
			"<td class='name'><input type='text' /></td>"+
			"<td class='phone' ><input type='text' /></td>"+
			"<td class='email'><input type='text' /></td>"+
			"<td class='commands'><img src='images/disk.png' class='btnSaver'><img src='images/delete.png' class='btnDelete'/></td>"+
			"</tr>");
	

	}

	function editEmployee(){
		var employeeRow = $(this).closest("tr");//tr
        var tdName = employeeRow.find(".name");
        var tdPhone = employeeRow.find(".phone");
		var tdEmail = employeeRow.find(".email");
        var tdButton = employeeRow.find(".commands");

		//var tdButton = employeeRow.children("td:nth-child(4)");

        tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
        tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
        tdButton.html("<img src='images/disk.png' class='btnSaver'/>");


	}

	function saveEmployee(){
		var employeeRow = $(this).closest("tr"); //tr
        var tdName = employeeRow.find(".name");
        var tdPhone = employeeRow.find(".phone");
        var tdEmail = employeeRow.find(".email");
        var tdButton = employeeRow.find(".commands");
		//var tdButton = employeeRow.children("td:nth-child(4)");

        tdName.html(tdName.children("input[type=text]").val());
        tdPhone.html(tdPhone.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
        tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");



	}

	function deleteEmployee(){
		var employeeRow =$(this).closest(".employee-row"); //tr
        employeeRow.remove();
	}




    $("body").on("click", "#btnaddEmployee",addEmployee);
    $("body").on("click", ".btnSaver", saveEmployee);
    $("body").on("click", ".btnEdit", editEmployee);
    $("body").on("click",".btnDelete", deleteEmployee);

});