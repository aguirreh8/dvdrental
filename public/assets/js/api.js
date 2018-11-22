$(document).ready(() => {
	$.get("/api/allId")
	.then(function(res) {
		for (let i = 0; i < res.length; i++) {
			console.log(res[i].actor_id);
			const idOption = $(`<option value='${res[i].actor_id}'>`);
			idOption.text(res[i].actor_id);
			$("#idCounter").append(idOption);
		}		
	})
})

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
		console.log(res);
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