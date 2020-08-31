$(document).ready(function() {

	var button = document.getElementById("submitBtn");
	var textBox = document.getElementById("message");
	var h4Class = document.getElementsByClassName("message-content");

	/*the button function*/
	button.onclick = function() {alertMessage()};

	function alertMessage() {
		var message = textBox.value;


		if (message == "") {
			alert("Inbox is Empty")
		} else {
			// alert(message);
			// h4Class[0].innerHTML = "";
			h4Class[0].innerHTML = message;
			textBox.value = "";

		}
		
	};

	// JQuery

	// $('#submitBtn').click(function(){
	// 	var message = $('#message').val();

	// 	if (message == "") {
	// 		alert("Inbox is Empty")
	// 	} else {
	// 		$('.message-content').text(message);
	// 		$('#message').val("");

	// 	}
	// });


});

