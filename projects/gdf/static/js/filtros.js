// $(document).ready(function()
// {
// 	var fil = $(".texto-filtros").html();

// 	$(document).on("click", ".num-tal-2", function()
// 	{
// 		fil = $(".texto-filtros").html();

// 		var talla = $(this).attr('tag');
// 		$(".texto-filtros").html('<div class="'+ talla +'">'+ talla +'(<i class="fa fa-times fa-'+talla+'" aria-hidden="true"></i>)</div>'+fil);

// 		var classTalla = "."+talla;

// 		$(document).on("click", ".fa-"+talla, function()
// 		{
// 			$( classTalla ).remove();
// 		});
// 	});

// 	$(document).on("change", ".categ-color", function(ev)
// 	{
// 		var Color = $(this).attr("tag");
// 		fil = $(".texto-filtros").html();

// 		if(Color == "animal print")
// 		{
// 			var color2 = "animal";
// 			$(".texto-filtros").html('<div class="'+ Color +'">'+ Color +'(<i class="fa fa-times fa-'+color2+'" aria-hidden="true"></i>)</div>'+fil);
// 			var classColor = "."+color2;

// 			$(document).on("click", ".fa-"+color2, function()
// 			{
// 				$( classColor ).remove();
// 				$(".c-"+color2).prop('checked', false);
// 			});
// 		}
// 		else
// 		{
// 			$(".texto-filtros").html('<div class="'+ Color +'">'+ Color +'(<i class="fa fa-times fa-'+Color+'" aria-hidden="true"></i>)</div>'+fil);
// 			var classColor = "."+Color;

// 			$(document).on("click", ".fa-"+Color, function()
// 			{
// 				$( classColor ).remove();
// 				$(".c-"+Color).prop('checked', false);
// 			});
// 		}

// 	});

// 	$(document).on("change", ".categ-tipo", function(ev)
// 	{
// 		var tipo = $(this).attr("tag");
// 		fil = $(".texto-filtros").html();

// 		$(".texto-filtros").html('<div class="'+ tipo +'">'+ tipo +'(<i class="fa fa-times fa-'+tipo+'" aria-hidden="true"></i>)</div>'+fil);

// 		var classtipo = "."+tipo;

// 		$(document).on("click", ".fa-"+tipo, function()
// 		{
// 			$( classtipo ).remove();
// 			$(".c-"+tipo).prop('checked', false);
// 		});
// 	});
// });