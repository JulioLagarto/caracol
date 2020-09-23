function hacerclic()
	{
		document.querySelector(".logoCaracol").onclick=mostraralerta;
	}	

function mostraralerta()
	{
		alert('hizo clic!');
	}

window.onload=hacerclic;