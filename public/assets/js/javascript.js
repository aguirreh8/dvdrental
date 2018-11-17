$("#submitInfo").click(function(e) {
	e.preventDefault();
	const myDate = new Date();

	const newActor = {
		firstName: $("#firstName").val(),
		lastName: $("#lastName").val(),
		date: myDate
	}

	console.log(newActor);
	// $.post("/api/new", )
	// .then(function(res) {})
})