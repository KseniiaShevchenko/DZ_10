
document.getElementById("btn1").onclick=MM;


function MM () {
	var a=document.getElementById('num1').value;
	var b=document.getElementById('num2').value;

	if (a==b) {
		alert("Они равны");
	}
	else {
		alert("Большее число - "+Math.max(a,b));
	}
}

