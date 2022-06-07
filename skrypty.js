/*<label><input type = "radio" name = "kolor" id = "formularz" checked>Tego formularza</label>
				<br>
				<label><input type = "radio" name = "kolor" id = "stopka">Stopki</label>
				<br>
				<label>Na taki:&#160;<input type = "color" id = "kolor"></label>
				<br>
				<input type = "button" onclick = "zmienkolor()" value = "Zmień kolor">
				<br>

function zmienkolor(){
	if(document.getElementById("stopka").checked == true){
		document.querySelector(".stopka").style.backgroundColor = document.getElementById("kolor").value;
	}
	
	if(document.getElementById("formularz").checked == true){
		document.querySelector(".lista").style.backgroundColor = document.getElementById("kolor").value;
	}
}*/

window.addEventListener("DOMContentLoaded", function(e){
	document.querySelectorAll("img").forEach(el => {
		el.addEventListener("click", function(a){
			document.getElementById("takot").setAttribute("src", event.target.getAttribute("src"))
		});
	});
});

function sprawdzformularz(){
			if(document.getElementById("kontynent").value == "Azji" && document.getElementById("prawda").checked == true && document.getElementById("kair").checked == true && document.getElementById("saopaulo").checked == false && document.getElementById("meksyk").checked == true){
				document.getElementById("wynik").innerHTML = '<span style = "color: green;">Wszystkie odpowiedzi poprawne!</span>'
			}else{
				document.getElementById("wynik").innerHTML = '<span style = "color: red;">Niestety, nie wszystko jest dobrze.</span>'
			}
		}