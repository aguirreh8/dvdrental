$("#insert").click(function(e) {
	e.preventDefault();
	const myDate = new Date();

	const newActor = {
		firstName: $("#firstName").val(),
		lastName: $("#lastName").val(),
		date: myDate
	};

	$.post("/api/new", newActor)
	.then(function(res) {
		location.reload();
	})
})

$("#delete").click(e => {
	e.preventDefault();
	const idToDelete = $("#idCounter").val();
	
	$.ajax(`/api/delete/${idToDelete}`, {
		type: "DELETE",
	})
	.then((res) => console.log(res));
	
})