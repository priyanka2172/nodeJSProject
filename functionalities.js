$(function(){

	function addEmployee(){
		$("#t01").append(
			"<tr>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><input type='text'/></td>"+
			"<td><img src='images/disk.png' class='btnSaver'><img src='images/delete.png' class='btnDelete'/></td>"+
			"</tr>");
	

	}

	function Edit(){
		var employeeRow = $(this).closest("tr");//tr
        var tdName = employeeRow.find(".name");
        var tdPhone = employeeRow.find(".phone");
		var tdEmail = employeeRow.find(".email");
        //var tdButton = employeeRow.find(".commands");

		var tdButton = employeeRow.children("td:nth-child(4)");

        tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
        tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
        tdButton.html("<img src='images/disk.png' class='btnSaver'/>");


	}

	function SaveEmployee(){
		var employeeRow = $(this).closest("tr"); //tr
        var tdName = employeeRow.find(".name");
        var tdPhone = employeeRow.find(".phone");
        var tdEmail = employeeRow.find(".email");
        //var tdButton = employeeRow.find(".commands");
		var tdButton = employeeRow.children("td:nth-child(4)");

        tdName.html(tdName.children("input[type=text]").val());
        tdPhone.html(tdPhone.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
        tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");



	}

	function deleteEmployee(){
		var employeeRow =$(this).closest("tr"); //tr
        employeeRow.remove();
	}




    $("body").on("click", "#btnaddEmployee",addEmployee);
    $("body").on("click", ".btnSaver", SaveEmployee);
    $("body").on("click", ".btnEdit", Edit);
    $("body").on("click",".btnDelete", deleteEmployee);

});