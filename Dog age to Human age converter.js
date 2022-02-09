//dog age to human age converter


	//step 1: create a variable as a prompt to collect user data

	var dogAge = prompt("What is your dog age?");

	//step 2: create another var humanAge to convert dog age to its human equivalent

	var humanAge = ((dogAge - 2) * 4 + 21);

	//step 3: create an alert to display the human equivalent of the dog's age
	alert("Your Dog's age is " + humanAge + "years" + " in human equivalent years");