function banners(tag)
{
	switch(tag)
	{
		case "cat1_hombres":
			$(".listado_productos_hombre").removeClass("hidden");
		break;

		case "cat1_mujer":
			$(".listado_productos_mujer").removeClass("hidden");
		break;

		case "cat1_traje_bano":
			$(".listado_productos_traje").removeClass("hidden");
		break;

		case "cat1_accesorios":
			$(".listado_productos_accesorios").removeClass("hidden");
		break;

		case "cat1_marcas":
			$(".listado_productos_marcas").removeClass("hidden");
		break;

		case "cat1_ninos":
			$(".listado_productos_ninos").removeClass("hidden");
		break;

		case "rosario_scarini":
			$(".listado_productos_marca1").removeClass("hidden");
		break;

		case "ana_bolena":
			$(".listado_productos_marca2").removeClass("hidden");
		break;

		case "cork_design":
			$(".listado_productos_marca3").removeClass("hidden");
		break;

		case "la_pijamera":
			$(".listado_productos_marca4").removeClass("hidden");
		break;

		case "antonima":
			$(".listado_productos_marca5").removeClass("hidden");
		break;

		case "pili_saenz_joyas":
			$(".listado_productos_marca6").removeClass("hidden");
		break;
	}
}