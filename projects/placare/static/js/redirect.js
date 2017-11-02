$(document).ready(function()
{
	var url = "http://www.placare.com/listado_productos?tag=";
	var hyper = window.location.href;
	var path = "";

	if(hyper.indexOf("mujeres") > -1)
	{
		path = "Categoria2_Calzado_Mujer,-Categoria2_Calzado_Hombre";
	}

	if(hyper.indexOf("hombres") > -1)
	{
		path = "Categoria2_Calzado_Hombre,-Categoria2_Calzado_Mujer";
	}

	setTimeout(function()
	{
		window.location.replace(url + path);
	},1000);
});