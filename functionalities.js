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
        tdPhone.html("<input type='text' id='txtPhone' value='"+tdPhone.html()+"'/>");
		tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
        tdButton.html("<img src='images/disk.png' class='btnSaver'/>");

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

        tdName.html(tdName.children("input[type=text]").val());
        tdPhone.html(tdPhone.children("input[type=text]").val());
		tdEmail.html(tdEmail.children("input[type=text]").val());
        tdButton.html("<img src='images/delete.png' class='btnDelete'/><img src='images/pencil.png' class='btnEdit'/>");

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

});