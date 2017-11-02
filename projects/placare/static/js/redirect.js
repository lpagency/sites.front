$(document).ready(function()
{
	var url = "http://www.placare.com/";
	var hyper = window.location.href;
	var path = "";

	if(hyper.indexOf("mujeres") > -1)
	{
		path = "listado_productos?tag=Categoria2_Calzado_Mujer,-Categoria2_Calzado_Hombre";
	}

	if(hyper.indexOf("hombres") > -1)
	{
		path = "listado_productos_hombre?tag=Categoria2_Calzado_Hombre,-Categoria2_Calzado_Mujer";
	}

	setTimeout(function()
	{
		window.location.replace(url + path);
	},1000);
});