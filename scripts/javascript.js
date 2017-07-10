function hideText3() {
	document.getElementById("text_example_3").style.display = "none";
}

function showText3() {
	document.getElementById("text_example_3").style.display = "block";
}

function alertButton(alertString) {
	window.alert(alertString);
}

function logButton(logString) {
	console.log(logString);
}

function innerHTMLButton(innerString) {
	document.getElementById("text_example_4").innerHTML = innerString;
}

/*This is an object, the name of it is person.*/
var person = {
	firstName: "John",
	lastName: "Carter",
	age: 50,
	eyeColor: "Red",
	fullName: function() {
		return this.firstName + " " + this.lastName;
	}
};
Q;
console.log("Here I am outputting the content of the object person.");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.eyeColor);
console.log(person.fullName());
