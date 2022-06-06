function zmienkolor(){
	if(document.getElementById("stopka").checked == true){
		document.querySelector(".stopka").style.backgroundColor = document.getElementById("kolor").value;
	}
	
	if(document.getElementById("formularz").checked == true){
		document.querySelector(".lista").style.backgroundColor = document.getElementById("kolor").value;
	}
}