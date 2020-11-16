let szobaar = 3500;

function frissitsdASzemelyeket(){
	let szemelyek = document.getElementById("szemelyek");
	let szemelyek_szama = document.getElementById("szam").value;
	let napok_szama = document.getElementById("days").value;
	
	szemelyek.innerHTML = szobaar * szemelyek_szama * napok_szama + " Ft";
	
}