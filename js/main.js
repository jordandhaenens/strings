function reversal(testString) {
	var print = document.getElementById('output-Area');
	var strArray = testString.split('');
	var revArray = strArray.reverse();
	var newStr = revArray.join('');
	print.innerHTML += newStr + ". ";
	return newStr;
}

// This only works if the letter case is consistent. When I have time I want to revisit this and make it case-sensitive
function alphabits(testString) {
	var print = document.getElementById('output-Area');
	testString = testString.toLowerCase();
	console.log("toLowerCase", testString);
	var strArray = testString.split('');
	console.log("split", strArray);
	strArray.sort();
	console.log("sorted", strArray);
	var newStr = strArray.join('');
	print.innerHTML += newStr + ". ";
	return newStr;
}

function palindrome(testString) {
	var print = document.getElementById('output-Area');
	testString = testString.toLowerCase();
	var reversedLCase = reversal(testString).toLowerCase();
	if (testString === reversedLCase){
		print.innerHTML += " Your word is a palindrome. Special.";
	}
}

/************************
Event Listeners
************************/
var submit = document.getElementById("submit");
submit.addEventListener("click", function(){
	var str = document.getElementById("input").value;
	reversal(str);
	alphabits(str);
	palindrome(str);
});

var input = document.getElementById("input");
input.addEventListener("keyup", function(event){
	if (event.keyCode === 13){
		var str = document.getElementById("input").value;
		reversal(str);
		alphabits(str);
		palindrome(str);
	}
});


// //Trying to understand why the following works
// // the array to be sorted
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // temporary array holds objects with position and sort-value
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// })
// console.log("mapped", mapped);

// // sorting the mapped array containing the reduced values
// mapped.sort(function(a, b) {
//   console.log("a", a, "b", b);
//   return +(a.value > b.value) || +(a.value === b.value) - 1;

// });
// console.log("mapped sorted", mapped);


// // container for the resulting order
// var result = mapped.map(function(el){
//   return list[el.index];
// });
// console.log("result", result);








