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
		var par = $(this).closest("tr");//tr
        var tdName = par.find(".name");
        var tdPhone = par.find(".phone");
		var tdEmail = par.find(".email");
        //var tdButton = par.find(".commands");

		var tdButton = par.children("td:nth-child(4)");

        tdName.html("<input type='text' id='txtName' value='"+tdName.html()+"'/>");
        tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
        tdButton.html("<img src='images/disk.png' class='btnSaver'/>");


	}

	function Saver(){
		var par = $(this).closest("tr"); //tr
        var tdName = par.find(".name");
        var tdPhone = par.find(".phone");
        var tdEmail = par.find(".email");
        //var tdButton = par.find(".commands");
		var tdButton = par.children("td:nth-child(4)");

        tdName.html(tdName.children("input[type=text]").val());
        tdPhone.html(tdPhone.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
        tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");



	}

	function deleteFunction(){
		var par = $(this).parent().parent(); //tr
		par.remove();
	}




    $("body").on("click", "#btnaddEmployee",addEmployee);
    $("body").on("click", ".btnSaver", Saver);
    $("body").on("click", ".btnEdit", Edit);
    $("body").on("click",".btnDelete", deleteFunction);

});