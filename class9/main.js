$(document ).ready(function() {
	$('#submit').on('click', function(){
		var name = $("#name");
		var email = $("#email");
		var phone = $("#phone");

		var required = [name, email, phone];

	for (i = 0; i < required.length; i++) {
		if (required[i].val() === ""){
			$(message).text("Please Fill Out").addClass('warning');
			required[i].prev().addClass('warning');
		}
		else {
			required[i].prev().removeClass('warning');
		}
	}

	if (!$("#form label").hasClass('warning')) {
		$('#form')[0].remove();
		$('#pre-form h2').text("Thank You")
		console.log(required[i]);
	}
	});
});	
