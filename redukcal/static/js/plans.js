var Plans = function()
{
	this.ligth={
		"name":"light",
		"quantity":50,
		"days":14,
		"total_desayuno":11,
		"total_media_manana":14,
		"total_almuerzo":3,
		"total_te":11,
		"total_comida":11,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":5,
			"desayuno":5,
			"media_manana":5,
			"almuerzo":0,
			"te":5,
			"comida":5
		},
		"fase_2":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":0,
			"te":0,
			"comida":3
		},
		"fase_3":{
			"total":3,
			"desayuno":0,
			"media_manana":3,
			"almuerzo":0,
			"te":3,
			"comida":0
		}

	};
	this.ligth_plus={
		"name":"ligth+",
		"quantity":100,
		"days":31,
		"total_desayuno":22,
		"total_media_manana":31,
		"total_almuerzo":3,
		"total_te":22,
		"total_comida":22,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":10,
			"desayuno":10,
			"media_manana":10,
			"almuerzo":0,
			"te":10,
			"comida":10
		},
		"fase_2":{
			"total":9,
			"desayuno":9,
			"media_manana":9,
			"almuerzo":0,
			"te":0,
			"comida":9
		},
		"fase_3":{
			"total":9,
			"desayuno":0,
			"media_manana":9,
			"almuerzo":0,
			"te":9,
			"comida":0
		}
	};

	this.quick={
		"name":"quick",
		"quantity":100,
		"days":31,
		"total_desayuno":22,
		"total_media_manana":31,
		"total_almuerzo":3,
		"total_te":22,
		"total_comida":22,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":10,
			"desayuno":10,
			"media_manana":10,
			"almuerzo":0,
			"te":10,
			"comida":10
		},
		"fase_2":{
			"total":9,
			"desayuno":9,
			"media_manana":9,
			"almuerzo":0,
			"te":0,
			"comida":9
		},
		"fase_3":{
			"total":9,
			"desayuno":0,
			"media_manana":9,
			"almuerzo":0,
			"te":9,
			"comida":0
		}
	};

	this.quick_plus={
		"name":"quick+",
		"quantity":150,
		"days":47,
		"total_desayuno":34,
		"total_media_manana":47,
		"total_almuerzo":3,
		"total_te":32,
		"total_comida":34,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":16,
			"desayuno":16,
			"media_manana":16,
			"almuerzo":0,
			"te":16,
			"comida":16
		},
		"fase_2":{
			"total":15,
			"desayuno":15,
			"media_manana":15,
			"almuerzo":0,
			"te":0,
			"comida":15
		},
		"fase_3":{
			"total":13,
			"desayuno":0,
			"media_manana":13,
			"almuerzo":0,
			"te":13,
			"comida":0
		}
	};

	this.power={
		"name":"power",
		"quantity":150,
		"days":47,
		"total_desayuno":34,
		"total_media_manana":47,
		"total_almuerzo":3,
		"total_te":32,
		"total_comida":34,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":16,
			"desayuno":16,
			"media_manana":16,
			"almuerzo":0,
			"te":16,
			"comida":16
		},
		"fase_2":{
			"total":15,
			"desayuno":15,
			"media_manana":15,
			"almuerzo":0,
			"te":0,
			"comida":15
		},
		"fase_3":{
			"total":13,
			"desayuno":0,
			"media_manana":13,
			"almuerzo":0,
			"te":13,
			"comida":0
		}
	};

	this.power_plus={
		"name":"power+",
		"quantity":200,
		"days":61,
		"total_desayuno":48,
		"total_media_manana":61,
		"total_almuerzo":3,
		"total_te":40,
		"total_comida":48,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":24,
			"desayuno":24,
			"media_manana":24,
			"almuerzo":0,
			"te":24,
			"comida":24
		},
		"fase_2":{
			"total":21,
			"desayuno":21,
			"media_manana":21,
			"almuerzo":0,
			"te":0,
			"comida":21
		},
		"fase_3":{
			"total":13,
			"desayuno":0,
			"media_manana":13,
			"almuerzo":0,
			"te":13,
			"comida":0
		}
	};

	this.ultra={
		"name":"ultra",
		"quantity":200,
		"days":61,
		"total_desayuno":48,
		"total_media_manana":61,
		"total_almuerzo":3,
		"total_te":40,
		"total_comida":48,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":24,
			"desayuno":24,
			"media_manana":24,
			"almuerzo":0,
			"te":24,
			"comida":24
		},
		"fase_2":{
			"total":21,
			"desayuno":21,
			"media_manana":21,
			"almuerzo":0,
			"te":0,
			"comida":21
		},
		"fase_3":{
			"total":13,
			"desayuno":0,
			"media_manana":13,
			"almuerzo":0,
			"te":13,
			"comida":0
		}
	};

	this.ultra_plus={
		"name":"ultra+",
		"quantity":280,
		"days":91,
		"total_desayuno":62,
		"total_media_manana":91,
		"total_almuerzo":3,
		"total_te":62,
		"total_comida":62,
		"fase_0":{
			"total":3,
			"desayuno":3,
			"media_manana":3,
			"almuerzo":3,
			"te":3,
			"comida":3
		},
		"fase_1":{
			"total":30,
			"desayuno":30,
			"media_manana":30,
			"almuerzo":0,
			"te":30,
			"comida":30
		},
		"fase_2":{
			"total":29,
			"desayuno":29,
			"media_manana":29,
			"almuerzo":0,
			"te":0,
			"comida":29
		},
		"fase_3":{
			"total":29,
			"desayuno":0,
			"media_manana":29,
			"almuerzo":0,
			"te":29,
			"comida":0
		}
	};

};

var Client = function()
{
	this.name_client='';
	this.rut='';
	this.birthday='';
	this.gender='';
	this.weight=0;
	this.heightt= 0;
	this.email='';
};

var ImcModel = {
	female : false,
	male:false,
	weight:0,
	heightt: 0,
	age:0,
	years:0,
	imc:0,
	kilo:0,
	data:[]

}

var PlansView = function(controller)
{
	this.controller = controller;
}

PlansView.prototype.init = function() 
{
	var self = this;
	$(document).on("click", ".gender", function() 
	{
		if ($(this).hasClass("female")){
			self.controller.genderFemale(true);
			self.controller.genderMale(false);
			$(this).addClass("gender-select");
			$(".male").removeClass("gender-select");
			// $(this).css("font-weight","bold");
			// $(".male").css("font-weight","normal");
		}
		else{
			self.controller.genderMale(true);
			self.controller.genderFemale(false);
			// $(this).css("font-weight","bold");
			// $(".female").css("font-weight","normal");
			$(this).addClass("gender-select");
			$(".female").removeClass("gender-select");
		}
	});

	$(document).on("keyup", "#weight", function() 
	{
		self.controller.weight($(this).val());
		// weight=$(this).val();
	});

	$(document).on("keyup", "#height", function() 
	{
		self.controller.heightt($(this).val());
		// height=$(this).val();
	});

	// $(document).on("change", "#age", function() 
	// {
	// 	self.controller.age($(this).val());
	// 	// age=$(this).val();
	// });

$(document).on("change", ".age", function() 
{
	var age=0;
	var from = $("#datepicker").val().split("/");
	var birthday = new Date(from[2], from[1] - 1, from[0]);
	var today= new Date();
	var years = today.getFullYear() - birthday.getFullYear();

	if (years < 40)
		age=1;
	else
		age=2;
	self.controller.age(age,$("#datepicker").val(), years);
		// age=$(this).val();
	});


$(document).on("submit", "#calculate", function() 
{
	var imc=self.controller.model
	var gender;
	if (imc.female==false && imc.male==false){
		alert("falta ingresar género");
		return false;
	}else if (imc.weight == 0 ){
		alert("falta ingresar peso");
		return false;
	}else if (imc.heightt == 0 || imc.heightt>3){
		alert("falta ingresar altura");		
		return false;
	}else if (imc.age == 0){
		alert("falta ingresar fecha de nacimiento");
		return false;
	}else if (imc.years <18 ){
		alert("Tratamiento no recomendado para menores de edad");
		return false;
	}else{
		if (imc.female)
			gender="female";
		else
			gender='male';

		localStorage.setItem('gender',gender);
		self.controller.imc();
		location.replace(site_base + '/plans?imc='+imc.imc+'&age='+imc.age+'&gender='+gender+'&kilo='+imc.kilo);
		return false; 
	}

});

};

var PlansController = function()
{
	this.model = ImcModel;
	this.view = new PlansView(this);

	this.view.init();
}

PlansController.prototype.getQueryVariable = function(sParam, default_value) 
{
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) 
	{
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) 
		{
			return sParameterName[1];
		}
	}

	if (default_value != undefined)
		return default_value;

	return false;
};

PlansController.prototype.genderFemale = function(data) 
{
	this.model.female = data;
	localStorage.setItem('female',data);
};

PlansController.prototype.genderMale = function(data) 
{
	this.model.male = data;
	localStorage.setItem('male',data);
};

PlansController.prototype.weight = function(data) 
{
	this.model.weight = data;
	localStorage.setItem('weight',data);
};

PlansController.prototype.heightt = function(data) 
{
	this.model.heightt = data;
	localStorage.setItem('height',data);
};

PlansController.prototype.age = function(data, birthday, years) 
{
	this.model.age = data;
	this.model.years = years;
	localStorage.setItem('birthday',birthday);
};

PlansController.prototype.imc = function() 
{
	var imc = 0;
	var gender;
	imc= this.model.weight/(this.model.heightt*this.model.heightt);
	// console.log(imc);
	this.model.imc = imc.toFixed(1);
	if (this.model.female)
		gender="female";
	else
		gender='male';
	
	this.calculatePlans(imc,this.model.age,gender); 
};

PlansController.prototype.calculatePlans = function(imc,age,gender) 
{
	var kilo=0;
	var heightt=parseFloat(this.model.heightt);
	var weight=parseFloat(this.model.weight);

	if (age==1){

		if (gender=='female'){

			if (parseFloat(imc)<=20 ){
				kilo=((heightt*heightt)*20)-weight;
				this.model.kilo=kilo.toFixed(1);
			}else if (parseFloat(imc)>20 && parseFloat(imc)<22 ){
				this.model.kilo=0;
			}else if (parseFloat(imc)>=22 ){
				kilo=weight-((heightt*heightt)*22);
				this.model.kilo=kilo.toFixed(1);
			}

		}else if (gender=='male'){

			if (parseFloat(imc)<=22 ){
				kilo=((heightt*heightt)*22)-weight;
				this.model.kilo=kilo.toFixed(1);
			}else if (parseFloat(imc)>22 && parseFloat(imc)<24 ){
				this.model.kilo=0;
			}else if (parseFloat(imc)>=24 ){
				kilo=weight-((heightt*heightt)*24);
				this.model.kilo=kilo.toFixed(1);
			}

		}

	}else if (age==2){

		if (gender=='female'){

			if (parseFloat(imc)<=21 ){
				kilo=((heightt*heightt)*21)-weight;
				this.model.kilo=kilo.toFixed(1);
			}else if (parseFloat(imc)>21 && parseFloat(imc)<23 ){
				this.model.kilo=0;
			}else if (parseFloat(imc)>=23 ){
				kilo=weight-((heightt*heightt)*23);
				this.model.kilo=kilo.toFixed(1);
			}

		}else if (gender=='male'){

			if (parseFloat(imc)<=23 ){
				kilo=((heightt*heightt)*23)-weight;
				this.model.kilo=kilo.toFixed(1);
			}else if (parseFloat(imc)>23 && parseFloat(imc)<25 ){
				this.model.kilo=0;
			}else if (parseFloat(imc)>=25 ){
				kilo=weight-((heightt*heightt)*25);
				this.model.kilo=kilo.toFixed(1);
			}

		}
	}
};

PlansController.prototype.renderHtml = function(kilo, age) 
{


	plans = new Plans();
	var type_plans;

	if (age == 1){
		if (kilo>=0 && kilo<=3 ){
			type_plans=plans.ligth;
		}else if (kilo>3 && kilo<=6 ){
			type_plans=plans.quick;
		}else if (kilo>6 && kilo<=9 ){
			type_plans=plans.power;
		}else if(kilo>9 && kilo<=13 ){
			type_plans=plans.ultra;
		}
	}else if(age==2){
		if (kilo>=0 && kilo<=3 ){
			type_plans=plans.ligth_plus;
		}else if (kilo>3 && kilo<=6 ){
			type_plans=plans.quick_plus;
		}else if (kilo>6 && kilo<=9 ){
			type_plans=plans.power_plus;
		}else if(kilo>9 && kilo<=13 ){
			type_plans=plans.ultra_plus;
		}
	}

	var btn_comprar='';
	var html='';
	
	html+='<div class="text-cont fondo-1">';
		html+='<h3> <strong>'+type_plans.name.toUpperCase()+'</strong></h3>';
		// html+='<div class="row">';
		// html+='<div class="col-md-5">';
		// html+='<div class="line">';
		// html+='<h4>Etapas del plan</h4>';
		// html+='<table class="table-font">';
		// html+='<tbody>';
		// html+='<tr>';
		// html+='<td></td>';
		// html+='<td></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Fase 0: Inicio</td>';
		// html+='<td>'+type_plans.fase_0.media_manana+' días</td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Fase 1: Adelgazamiento</td>';
		// html+='<td>'+type_plans.fase_1.media_manana+' días</td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Fase 2: Transición</td>';
		// html+='<td>'+type_plans.fase_2.media_manana+' días</td>';
		// html+='<tr>';
		// html+='<td>Fase 3: Estabilización</td>';
		// html+='<td>'+type_plans.fase_3.media_manana+' días</td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td></td>';
		// html+='<td></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td></td>';
		// html+='<td></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td></td>';
		// html+='<td></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td></td>';
		// html+='<td></td>';
		// html+='</tr>';
		// html+='</tbody>';
		// html+='</table>';
		// html+='</div>';
		// html+='</div>';
		// html+='<div class="col-md-7">';
		// html+='<h4>Redukcales por comida</h4>';
		// html+='<table class="table-font">';
		// html+='<thead>';
		// html+='<tr>';
		// html+='<th></th>';
		// html+='<th>Fase 0</th>';
		// html+='<th>Fase 1</th>';
		// html+='<th>Fase 2</th>';
		// html+='<th>Fase 3</th>';
		// html+='</tr>';
		// html+='</thead>';
		// html+='<tbody>';
		// html+='<tr>';
		// html+='<td>Desayuno</td>';
		// html+='<td>'+type_plans.fase_0.desayuno+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_1.desayuno+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_2.desayuno+' <span>Sobres</span></td>';
		// if (type_plans.fase_3.desayuno==0)
		// 	html+='<td></td>';
		// else
		// 	html+='<td>'+type_plans.fase_3.desayuno+' <span>Sobres</span></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Media mañana</td>';
		// html+='<td>'+type_plans.fase_0.media_manana+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_1.media_manana+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_2.media_manana+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_3.media_manana+' <span>Sobres</span></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Almuerzo</td>';
		// if (type_plans.fase_0.almuerzo==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_0.almuerzo+' <span>Sobres</span></td>';
		// }
		// if (type_plans.fase_1.almuerzo==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_1.almuerzo+' <span>Sobres</span></td>';
		// }
		// if (type_plans.fase_2.almuerzo==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_2.almuerzo+' <span>Sobres</span></td>';
		// }
		// if (type_plans.fase_3.almuerzo==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_3.almuerzo+' <span>Sobres</span></td>';
		// }
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Media tarde</td>';
		// html+='<td>'+type_plans.fase_0.te+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_1.te+' <span>Sobres</span></td>';
		// if (type_plans.fase_2.te==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_2.te+' <span>Sobres</span></td>';
		// }
		// html+='<td>'+type_plans.fase_3.te+' <span>Sobres</span></td>';
		// html+='</tr>';
		// html+='<tr>';
		// html+='<td>Comida</td>';
		// html+='<td>'+type_plans.fase_0.comida+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_1.comida+' <span>Sobres</span></td>';
		// html+='<td>'+type_plans.fase_2.comida+' <span>Sobres</span></td>';
		// if (type_plans.fase_3.comida==0){
		// 	html+='<td></td>';
		// }
		// else{
		// 	html+='<td>'+type_plans.fase_3.comida+' <span>Sobres</span></td>';
		// }
		// html+='</tr>';							
		// html+='</tbody>';
		// html+='</table>';
		// html+='</div>';
		// html+='</div>';


		//cambios html detalle plan

		html+='<div class="row" style="height: 370px;">';
		////////////primera columna
		html+='<div class="col-md-6 first-col">';
			html+='<h3 class="fweight100 titulo-grande">Detalles del plan</h3><br>';
			// html+='<p>Duración del plan será de <span>'+type_plans.days+'</span> días. </p>';

			html+='<table class="table-font">';
			html+='<thead>';
			html+='<tr>';
			html+='<th class="pad10" colspan="2">N° de días por cada una de las Fases</th>';
			html+='</tr>';
			html+='</thead>';
			html+='<tbody>';
			html+='<tr class="oscuro">';
			html+='<td>Fase 0</td>';
			html+='<td class="text-center" > <span>'+type_plans.fase_0.total+' días</span></td>';
			html+='</tr>';
			html+='<tr class="claro">';
			html+='<td>Fase 1</td>';
			html+='<td class="text-center" ><span>'+type_plans.fase_1.total+' días</span></td>';
			html+='</tr>';
			html+='<tr class="oscuro">';
			html+='<td>Fase 2</td>';
			html+='<td class="text-center" ><span>'+type_plans.fase_2.total+' días</span></td>';
			html+='</tr>';
			html+='<tr class="claro">';
			html+='<td>Fase 3</td>';
			html+='<td class="text-center"><span>'+type_plans.fase_3.total+' días</span></td>';
			html+='</tr>';
			html+='<tr class="oscuro">';
			html+='<td>TOTAL</td>';
			html+='<td class="text-center"><span>'+type_plans.days+' días</span></td>';
			html+='</tr>';							
			html+='</tbody>';
			html+='</table>';

			html+='<div class="space20"></div>';

			html+='<p>Valor referencial del plan es de  <span>$'+ (type_plans.quantity * 1600).formatMoney(0,"",".")+'</span> </p>';
			if (kilo>3 || age ==2 ){
				html+='<p>*Con este plan podrás asistir a una consulta nutricional presencial gratuita.</p>';
			}

			html+='<br>';

		// html+='</div>';
		

		html+='</div>';
		/////////// fin primera columna

		////////////segunda columna
		html+='<div class="col-md-6" style="padding-left: 0px; padding-right: 30px;">';

			html+='<div class="space80 "></div>';
			// html+='<br><span class="fsize18" style="text-decoration:underline;">Sobres por comida</span>';
			html+='<table class="table-font">';
			html+='<thead>';
			html+='<tr>';
			html+='<th class="pad10" colspan="2">N° de sobres  totales necesarios para cada tipo de Comida durante el plan '+type_plans.name.toUpperCase()+'</th>';
			html+='</tr>';
			html+='</thead>';
			html+='<tbody>';
			html+='<tr class="oscuro">';
			html+='<td>Desayuno</td>';
			html+='<td class="text-right"><span>'+type_plans.total_desayuno+'</span></td>';
			html+='</tr>';
			html+='<tr class="claro">';
			html+='<td>Media mañana</td>';
			html+='<td class="text-right"><span>'+type_plans.total_media_manana+'</span></td>';
			html+='</tr>';
			html+='<tr class="oscuro">';
			html+='<td>Almuerzo</td>';
			html+='<td class="text-right"><span>'+type_plans.total_almuerzo+'</span></td>';
			html+='</tr>';
			html+='<tr class="claro">';
			html+='<td>Media tarde</td>';
			html+='<td class="text-right"><span>'+type_plans.total_te+'</span></td>';
			html+='</tr>';
			html+='<tr class="oscuro">';
			html+='<td>Comida</td>';
			html+='<td class="text-right"><span>'+type_plans.total_comida+'</span></td>';
			html+='</tr>';
			html+='<tr class="claro">';
			html+='<td>TOTAL SOBRES DEL PLAN</td>';
			html+='<td class="text-right"><span>'+type_plans.quantity+'</span></td>';
			html+='</tr>';							
			html+='</tbody>';
			html+='</table>';

		html+='</div>';
		/////////// fin segunda columna

			html+='<div class="row space40">';
				html+='<div class="col-md-9">';
						// html+='<div class="txt">';
						html+='<p>Necesitas un total de <span>'+type_plans.quantity+'</span> sobres de ReduKcal para tu plan';
						// html+='</div>';
					// html+='</div>';
					// html+='<div class="space50">';
						html+='<button type="button" class="comprar-btn" data-toggle="button" aria-pressed="false" autocomplete="off" quantity="'+type_plans.quantity+'" plan="'+type_plans.name+'">';
						html+='Comprar</button> </p>';
					// html+='</div>';
				html+='</div>';
				html+='<div class="col-md-3">';
					if (kilo>3 || age ==2 ){

						// html+='<div class="orange-btn basic fsize28">';
						// html+='¿Deseas probar el plan básico?';
						// html+='</div>';

						html+='<a class="basic fsize14 text-center">';
						html+='<p>¿Prefieres comenzar con el plan Light?</p>';
						html+='</a>';

						// html+='<div class="space10"></div>';
					}

				html+='</div>';
			html+='</div>';

			// html+='<div class="space10"></div>';
			//boton a plan basico


		html+='</div>';
		///////fin row columna
		if (kilo>=0 && kilo<=3 && age==1){
			html+='<p class="checkbox fsize8 space-basic">';
		}else{
			html+='<p class="checkbox fsize8">';
		}
		html+='<label><input class="term_cond" type="checkbox" name="terminos" style="display:block;">Acepto cumplir con las condiciones para realizar el Método RDK ®. <button class="ver"> Ver </button></label>';
		html+='</p>';


		//criterios de exclusion
		html+='<div class="show_term">';
			html+='<div>';
				html+='<p>Esta dieta ha sido concebida para ser aplicada única y exclusivamente en personas:</p>';
				html+='<ul>';
				html+='<li>Que sean sanas y que no tomen medicamentos habitualmente.</li>';
				html+='<li>Que pretendan una pérdida de peso de 2 a 13 kg. No superior a 13 kg.</li>';
				html+='</ul>';
				html+='<p>Entenderemos que una persona es candidata a realizar una dieta proteinada simple, cuando tenga sensación subjetiva de buena salud y además no presente ninguno de los siguientes criterios de exclusión:</p>';
				html+='<ul>';
				html+='<li> Menores de 18 años </li>';
				html+='<li> Mayores de 70 años </li>';
				html+='<li> Enfermedades hepáticas </li>';
				html+='<li> Enfermedades renales </li>';
				html+='<li> Enfermedades cardiovasculares </li>';
				html+='<li> Accidentes cerebrovasculares recientes </li>';
				html+='<li> Embarazo </li>';
				html+='<li> Lactancia </li>';
				html+='<li> Diabetes tipo 1 y tipo 2 </li>';
				html+='<li> Cáncer </li>';
				html+='<li> Hiperuricemia y gota </li>';
				html+='<li> Hipertiroidismo </li>';
				html+='<li> Trastornos psiquiátricos y del comportamiento alimentario (anorexia y bulimia) </li>';
				html+='<li> Personas en su peso mínimo. Peso mínimo permisible= 20 x altura2(m)</li>';
				html+='</ul>';
			html+='</div>';
		html+='</div>';	
		/////////////fin criterios de exclusion

		
		// html+='<div class="row">';
		// ////////////primera columna
		// html+='<div class="col-md-5">';
		

		// html+='</div>';
		// /////////// fin primera columna

		// ////////////segunda columna
		// html+='<div class="col-md-5">';
		
		// html+='</div>';
		// /////////// fin segunda columna

		// html+='</div>';
		// ///////fin row columna

		// html+='<div class="space50"></div>';
		// html+='<div class="txt">';
		
			// html+='<p>Duración del plan será de <span>'+type_plans.days+'</span> días. </p>';
			// html+='<p>Valor referencial del plan es de  <span>$'+ (type_plans.quantity * 1600).formatMoney(0,"",".")+'</span> </p>';
			
			// html+='<br><p>Sobres por comida</p>';
			// html+='<br><table class="table-font">';
			// html+='<tbody>';
			// html+='<tr>';
			// html+='<td>Desayuno</td>';
			// html+='<td>'+type_plans.total_desayuno+' <span>Sobres</span></td>';
			// html+='</tr>';
			// html+='<tr>';
			// html+='<td>Media mañana</td>';
			// html+='<td>'+type_plans.total_media_manana+' <span>Sobres</span></td>';
			// html+='</tr>';
			// html+='<tr>';
			// html+='<td>Almuerzo</td>';
			// html+='<td>'+type_plans.total_almuerzo+' <span>Sobres</span></td>';
			// html+='</tr>';
			// html+='<tr>';
			// html+='<td>Media tarde</td>';
			// html+='<td>'+type_plans.total_te+' <span>Sobres</span></td>';
			// html+='</tr>';
			// html+='<tr>';
			// html+='<td>Comida</td>';
			// html+='<td>'+type_plans.total_comida+' <span>Sobres</span></td>';
			// html+='</tr>';							
			// html+='</tbody>';
			// html+='</table>';
			// html+='<br>';

			// html+='<p class="checkbox">';
			// html+='<label><input class="term_cond" type="checkbox" name="terminos" style="display:block;">Acepto cumplir con las condiciones para realizar el Método RDk ®. <button class="ver"> Ver </button></label>';
			// html+='</p>';

		html+='</div>';
		//criterios de exclusion
		// html+='<div class="show_term">';
		// 	html+='<div>';
		// 		html+='<p>Esta dieta ha sido concebida para ser aplicada única y exclusivamente en personas:</p>';
		// 		html+='<ul>';
		// 		html+='<li>Que sean sanas y que no tomen medicamentos habitualmente.</li>';
		// 		html+='<li>Que pretendan una pérdida de peso de 2 a 13 kg. No superior a 13 kg.</li>';
		// 		html+='</ul>';
		// 		html+='<p>Entenderemos que una persona es candidata a realizar una dieta proteinada simple, cuando tenga sensación subjetiva de buena salud y además no presente ninguno de los siguientes criterios de exclusión:</p>';
		// 		html+='<ul>';
		// 		html+='<li> Menores de 18 años </li>';
		// 		html+='<li> Mayores de 70 años </li>';
		// 		html+='<li> Enfermedades hepáticas </li>';
		// 		html+='<li> Enfermedades renales </li>';
		// 		html+='<li> Enfermedades cardiovasculares </li>';
		// 		html+='<li> Accidentes cerebrovasculares recientes </li>';
		// 		html+='<li> Embarazo </li>';
		// 		html+='<li> Lactancia </li>';
		// 		html+='<li> Diabetes tipo 1 y tipo 2 </li>';
		// 		html+='<li> Cáncer </li>';
		// 		html+='<li> Hiperuricemia y gota </li>';
		// 		html+='<li> Hipertiroidismo </li>';
		// 		html+='<li> Trastornos psiquiátricos y del comportamiento alimentario (anorexia y bulimia) </li>';
		// 		html+='<li> Personas en su peso mínimo. Peso mínimo permisible= 20 x altura2(m)</li>';
		// 		html+='</ul>';
		// 	html+='</div>';
		// html+='</div>';	

		// fin cambios html detalle plan

	html+='</div>';	


	// html+='<div class="space50"></div>';

	// //boton a plan basico
	// if (kilo>3 || age ==2 ){

	// 	html+='<div class="orange-btn basic fsize28">';
	// 	html+='¿Deseas probar el plan básico?';
	// 	html+='</div>';

	// 	html+='<div class="space30"></div>';
	// }




	// btn_comprar+='<div class="row">';
	// 	btn_comprar+='<div class="col-md-9">';
	// 		btn_comprar+='<div class="txt">';
	// 		btn_comprar+='<p>Necesitas un total de  <span>'+type_plans.quantity+'</span> sobres de Redukcal para tu plan</p>';
	// 		btn_comprar+='</div>';
	// 	btn_comprar+='</div>';
	// 	btn_comprar+='<div class="col-md-3">';
	// 		btn_comprar+='<button type="button" class="comprar-btn" data-toggle="button" aria-pressed="false" autocomplete="off" quantity="'+type_plans.quantity+'">';
	// 		btn_comprar+='Comprar</button>';
	// 	btn_comprar+='</div>';
	// btn_comprar+='</div>';


	// $(".quantity").html(btn_comprar);

	return html;

};

PlansController.prototype.detailPlan = function(kilo, age) 
{
	plans = new Plans();
	var type_plans;

	if (age == 1){
		if (kilo>=0 && kilo<=3 ){
			type_plans=plans.ligth;
		}else if (kilo>3 && kilo<=6 ){
			type_plans=plans.quick;
		}else if (kilo>6 && kilo<=9 ){
			type_plans=plans.power;
		}else if(kilo>9 && kilo<=13 ){
			type_plans=plans.ultra;
		}
	}else if(age==2){
		if (kilo>=0 && kilo<=3 ){
			type_plans=plans.ligth_plus;
		}else if (kilo>3 && kilo<=6 ){
			type_plans=plans.quick_plus;
		}else if (kilo>6 && kilo<=9 ){
			type_plans=plans.power_plus;
		}else if(kilo>9 && kilo<=13 ){
			type_plans=plans.ultra_plus;
		}
	}

	// btn_comprar='';
	// btn_comprar+='<div class="row">';
	// 	btn_comprar+='<div class="col-md-8">';
	// 		btn_comprar+='<div class="txt-2">';
	// 		btn_comprar+='<p>Necesitas un total de  <span>'+type_plans.quantity+'</span> sobres de Redukcal para tu plan</p>';
	// 		btn_comprar+='</div>';
	// 	btn_comprar+='</div>';
	// 	btn_comprar+='<div class="col-md-4">';
	// 		btn_comprar+='<button type="button" class="comprar-btn" data-toggle="button" aria-pressed="false" autocomplete="off" quantity="'+type_plans.quantity+'">';
	// 		btn_comprar+='Comprar</button>';
	// 	btn_comprar+='</div>';
	// btn_comprar+='</div>';

	var html=this.renderHtml(kilo, age);
	// html += '<div class="details-wht2 space10 detail quantity">';
	// html += btn_comprar;
	// html += '</div>';

	$.fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		hideOnContentClick: true,
		width:850,
		height:600,
		autoDimensions: true,
		autoSize: false,
		content : html,
		helpers: {
			overlay: {
				locked: false

			}
		},
	});
};

PlansController.prototype.terminosCondiciones = function() 
{
	html='';
		//criterios de exclusion
		html+='<div class="pad50">';
			html+='<div>';
				html+='<p>Esta dieta ha sido concebida para ser aplicada única y exclusivamente en personas:</p>';
				html+='<ul>';
				html+='<li>Que sean sanas y que no tomen medicamentos habitualmente.</li>';
				html+='<li>Que pretendan una pérdida de peso de 2 a 13 kg. No superior a 13 kg.</li>';
				html+='</ul>';
				html+='<p>Entenderemos que una persona es candidata a realizar una dieta proteinada simple, cuando tenga sensación subjetiva de buena salud y además no presente ninguno de los siguientes criterios de exclusión:</p>';
				html+='<ul>';
				html+='<li> Menores de 18 años </li>';
				html+='<li> Mayores de 70 años </li>';
				html+='<li> Enfermedades hepáticas </li>';
				html+='<li> Enfermedades renales </li>';
				html+='<li> Enfermedades cardiovasculares </li>';
				html+='<li> Accidentes cerebrovasculares recientes </li>';
				html+='<li> Embarazo </li>';
				html+='<li> Lactancia </li>';
				html+='<li> Diabetes tipo 1 y tipo 2 </li>';
				html+='<li> Cáncer </li>';
				html+='<li> Hiperuricemia y gota </li>';
				html+='<li> Hipertiroidismo </li>';
				html+='<li> Trastornos psiquiátricos y del comportamiento alimentario (anorexia y bulimia) </li>';
				html+='<li> Personas en su peso mínimo. Peso mínimo permisible= 20 x altura2(m)</li>';
				html+='</ul>';
			html+='</div>';
		html+='</div>';	
		/////////////fin criterios de exclusion

	$.fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		width:800,
		height:500,
		autoDimensions: true,
		autoSize: false,
		content : html,
		helpers: {
			overlay: {
				locked: false
			}
		},
	});
};

PlansController.prototype.customerData = function()
{
	
	plans = new Plans();

	var selected_female="";
	var selected_male="";
	if (localStorage.getItem('female')=='true'){
		selected_female="selected";
		selected_male="";
	}else if (localStorage.getItem('male')=='true'){
		selected_female="";
		selected_male="selected";
	}

	if (localStorage.getItem('birthday')==null){
		localStorage.setItem('birthday','');
	}

	var html='';

	html+='<div class="text-cont">';
	html+='<h3> Datos de persona asociada al plan</h3>';
	html+='<form  id="form-data-client" method="get" >';

	html+='<div class="form-group">';
	html+='<input type="text" name="name_client" class="form-control name" placeholder="Nombre persona asociada a plan">';
	html+='</div>';

	html+='<div class="form-group">';
	html+='<input type="text" name="rut" class="form-control rut" placeholder="Rut persona asociada a plan">';
	html+='</div>';

	html+='<div class="form-group">';
	html+='<select class="form-control" name="gender" id="gender">';
	html+='<option value="0">Seleccione género</option>';
	html+='<option value="female" '+selected_female+'>Mujer</option>';
	html+='<option value="male" '+selected_male+'>Hombre</option>';
	html+='</select>';
	html+='</div>';

	html+='<div class="form-group">';
	html+='<input type="number" name="weight" class="form-control weight"  placeholder="Ingresa peso (kg, por ejemplo 55.4)" step="0.01" value="'+localStorage.getItem('weight')+'">';
	html+='</div>';

	html+='<div class="form-group">  ';           
	html+='<input type="number" name="height" class="form-control height" placeholder="Ingresa altura (mts, por ejemplo 1.70)" min="1" max="3" step="0.01" value="'+localStorage.getItem('height')+'">';
	html+='</div>';
	           
	html+='<div class="form-group">';
	html+='<input type="text" name="age" class="form-control age" placeholder="Fecha de nacimiento dd/mm/aaaa" value="'+localStorage.getItem('birthday')+'">';
	html+='</div>';

	html+='<div class="form-group">';
	html+='<input type="email" name="email_client" class="form-control email" placeholder="Ingresa email">';
	html+='</div>';

	html+='<div class="form-group">';
	html+='<input type="number" name="phone_client" class="form-control phone" placeholder="Ingresa tu número si deseas ser contactado por Whatsapp para recibir COACHING NUTRICIONAL" >';
	html+='</div>';

	html+='<button type="submit" class="btn btn-default btn-data pull-right space20">Guardar</button>';
	html+='</form> ';
	html+='</div>';


	$.fancybox({
		openEffect: 'fade',
		closeEffect: 'fade',
		width:800,
		height:500,
		autoDimensions: true,
		autoSize: false,
		content : html,
		helpers: {
			overlay: {
				locked: false
			}
		},
	});
};

PlansController.prototype.validate = function(name_client,rut,gender,weight, height, email, birthday,phone) 
{
	var client;
	if (this.model.data.length>0){
		client=this.model.data;
		client.name_client=name_client;
		client.rut=rut;
		client.birthday=birthday;
		client.gender=gender;
		client.weight=weight;
		client.heightt= height;
		client.email=email;
		client.phone=phone;
		return client;
	}else{
		client = new Client();
		client.name_client=name_client;
		client.rut=rut;
		client.birthday=birthday;
		client.gender=gender;
		client.weight=weight;
		client.heightt= height;
		client.email=email;
		client.phone=phone;
	    this.model.data.push(client);
	    return client;
	}


};

Number.prototype.formatMoney = function(c, d, t){
	var n = this, 
	c = isNaN(c = Math.abs(c)) ? 2 : c, 
	d = d == undefined ? "." : d, 
	t = t == undefined ? "," : t, 
	s = n < 0 ? "-" : "", 
	i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
	j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

$(document).ready(function(){

	var plans = new PlansController();

	var detail='';
	var imc=plans.getQueryVariable("imc", -1);
	var age=plans.getQueryVariable("age", -1);
	var gender=plans.getQueryVariable("gender", -1);
	var kilo=plans.getQueryVariable("kilo", -1);
	var rdk=plans.getQueryVariable("quantity", 0);
	var checked=false;
	
	if (rdk > 0){
		localStorage.setItem('quantity', rdk);
	}

	if (parseInt(localStorage.getItem('quantity')) > 0 ){
		$(".rdk").html(localStorage.getItem('quantity'));
	}
		

	if (imc!=-1){
		// plans.calculatePlans(imc,age,gender);
		//menores de 40
		if (age==1){
			//mujeres
			if (gender=='female'){
				if (parseFloat(imc)>=29 || parseFloat(kilo) > 13 ){
					$(".detail").css("display","none");
					$(".details-wht").css("display","none");
					$(".kilo").html("<h1>Estás con "+kilo+" Kg de sobrepeso.</h1><h1>Los planes en línea son hasta 13 Kg, te invitamos a contactarnos para una asesoría nutricional personalizada. Escríbenos <a class='contact' href='"+ site_base +"/contact'>AQUÍ</a>.</h1>");
				}else if (parseFloat(imc)<=20 ){
					$(".detail").css("display","none");
					$(".kilo").html("<h1>Estás bajo tu peso ideal, debes recuperar "+kilo+" Kg</h1>");
				}else if (parseFloat(imc)>20 && parseFloat(imc)<22 ){
					$(".kilo").html("<h1>Estás en tu peso ideal, no necesitas bajar de peso.</h1>");//<h1>Pero si quieres adelgazar este es el plan que te sugerimos.</h1>
					// $(".detail-plan").html(plans.renderHtml(2, age));
					$(".details-wht").css("display","none");
					$(".details-wht2").css("display","none");
					$(".mar-org").css("margin-top", "-70px");
				}else if (parseFloat(imc)>=22 && parseFloat(imc)<29 ){
					$(".kilo").html("<h1>¿Qué tal te sentirías con "+kilo+" Kg menos?</h1>");
					$(".detail-plan").html(plans.renderHtml(kilo, age));
				}
			//hombres
		} else if (gender=='male'){
			if (parseFloat(imc)>=29.9 || parseFloat(kilo) > 13 ){
				$(".detail").css("display","none");
				$(".details-wht").css("display","none");
				$(".kilo").html("<h1>Estás con "+kilo+" Kg de sobrepeso.</h1><h1>Los planes en línea son hasta 13 Kg, te invitamos a contactarnos para una asesoría nutricional personalizada. Escríbenos <a class='contact' href='"+ site_base +"/contact'>AQUÍ</a>.</h1>");
			}else if (parseFloat(imc)<=22 ){
				$(".kilo").html("<h1>Estás bajo tu peso ideal, debes recuperar "+kilo+" Kg</h1>");
			}else if (parseFloat(imc)>22 && parseFloat(imc)<24 ){
				$(".kilo").html("<h1>Estás en tu peso ideal, no necesitas bajar de peso.</h1>"); //<h1>Pero si quieres adelgazar este es el plan que te sugerimos.</h1>
				// $(".detail-plan").html(plans.renderHtml(2, age));
				$(".details-wht").css("display","none");
				$(".details-wht2").css("display","none");
				$(".mar-org").css("margin-top", "-70px");
			}else if (parseFloat(imc)>=24 && parseFloat(imc)<29.9 ){
				$(".kilo").html("<h1>¿Qué tal te sentirías con "+kilo+" Kg menos?</h1>");
				$(".detail-plan").html(plans.renderHtml(kilo, age));
			}
		}
		//mayores de 40 
	}else if (age==2){
			//mujeres
			if (gender=='female'){
				if (parseFloat(imc)>=29 || parseFloat(kilo) > 13 ){
					$(".detail").css("display","none");
					$(".details-wht").css("display","none");
					$(".kilo").html("<h1>Estás con "+kilo+" Kg de sobrepeso.</h1><h1>Los planes en línea son hasta 13 Kg, te invitamos a contactarnos para una asesoría nutricional personalizada. Escríbenos <a class='contact' href='"+ site_base +"/contact'>AQUÍ</a>.</h1>");
				}else if (parseFloat(imc)<=21 ){
					$(".kilo").html("<h1>Estás bajo tu peso ideal, debes recuperar "+kilo+" Kg</h1>");
				}else if (parseFloat(imc)>21 && parseFloat(imc)<23 ){
					$(".kilo").html("<h1>Estás en tu peso ideal, no necesitas bajar de peso.</h1>");//<h1>Pero si quieres adelgazar este es el plan que te sugerimos.</h1>
					// $(".detail-plan").html(plans.renderHtml(2, age));
					$(".details-wht").css("display","none");
					$(".details-wht2").css("display","none");
					$(".mar-org").css("margin-top", "-70px");
				}else if (parseFloat(imc)>=23 && parseFloat(imc)<29){
					$(".kilo").html("<h1>¿Qué tal te sentirías con "+kilo+" Kg menos?</h1>");
					$(".detail-plan").html(plans.renderHtml(kilo, age));
				}
			//hombres
		} else if (gender=='male'){
			if (parseFloat(imc)>=29.9 || parseFloat(kilo) > 13 ){					
				$(".detail").css("display","none");
				$(".details-wht").css("display","none");
				$(".kilo").html("<h1>Estás con "+kilo+" Kg de sobrepeso.</h1><h1>Los planes en línea son hasta 13 Kg, te invitamos a contactarnos para una asesoría nutricional personalizada. Escríbenos <a class='contact' href='"+ site_base +"/contact'>AQUÍ</a>.</h1>");
			}else if (parseFloat(imc)<=23 ){
				$(".kilo").html("<h1>Estás bajo tu peso ideal, debes recuperar "+kilo+" Kg</h1>");
			}else if (parseFloat(imc)>23 && parseFloat(imc)<25 ){
				$(".kilo").html("<h1>Estás en tu peso ideal, no necesitas bajar de peso.</h1>");//<h1>Pero si quieres adelgazar este es el plan que te sugerimos.</h1>
				// $(".detail-plan").html(plans.renderHtml(2, age));
				$(".details-wht").css("display","none");
				$(".details-wht2").css("display","none");
				$(".mar-org").css("margin-top", "-70px");
			}else if (parseFloat(imc)>=25 && parseFloat(imc)<29.9){
				$(".kilo").html("<h1>¿Qué tal te sentirías con "+kilo+" Kg menos?</h1>");
				$(".detail-plan").html(plans.renderHtml(kilo, age));
			}
		}
	}
	$(".pdf-bg").css("display","block");
}

//ligthbox plan
$(document).on("click", ".plan", function() 
{
	checked=false;
	plans.detailPlan($(this).attr("kilo"), $(this).attr("age"));
});

//plan basico
$(document).on("click", ".basic", function() 
{
	checked=false;
	plans.detailPlan(2,1);
});

//btn comprar
$(document).on("click", ".comprar-btn", function() 
{
	if (checked){
		localStorage.setItem('quantity', $(this).attr("quantity"));
		localStorage.setItem('plan', $(this).attr("plan"));
		location.replace(site_base + '/products?quantity='+$(this).attr("quantity"));
	}else{
		alert("Debe aceptar los términos antes de ir a comprar");
	}
});

//ver terminos y condiciones
$(document).on("click", ".ver", function() 
{
	if ($(".show_term").is(":visible")){
		$(".show_term").hide("fade");
	}else{
		$(".show_term").show("fade");
	}
});

//aceptar terminos y condiciones
$(document).on("click", ".term_cond", function() 
{
	if ($(this).is(':checked')){
		checked=true;
	}else if($(this).not(':checked')){
		checked=false;

	}
});

$(document).on("click", ".ver-l", function() 
{
	plans.terminosCondiciones();
	// plans.detailPlan(2,1);
});


$(document).on("click", ".btn-client", function() 
{
	plans.customerData();
	// plans.detailPlan(2,1);
});

// $(document).on("click", ".btn-data", function() 
// {
// alert($(".height").val())
// 	plans.validate();
// 	// plans.detailPlan(2,1);
// });


$(document).on("submit", "#form-data-client", function() 
{
	var name=$('input[name="name_client"]').val();
	var rut=$('input[name="rut"]').val();
	var gender=$('select[name="gender"]').val();
	var weight=$('input[name="weight"]').val();
	var height=$('input[name="height"]').val();	
	var email=$('input[name="email_client"]').val();
	var birthday=$('input[name="age"]').val();
	var phone=$('input[name="phone_client"]').val();

	if (name==""||rut==""||gender==""||weight==""||height==""||email==""||birthday==""){
		alert("Falta ingresar datos");
		return false;
	}else{

		plans.validate(name,rut, gender,weight, height, email, birthday,phone);

		$.fancybox.close();
		return false; 
	}
});

// $(document).on("click", ".Prod-btn", function() 
// {
// 	// $(this).delay(3000).fadeIn(1500).text("Agregado");
// 	// $(this).poshytip("hide");
// 	$(this).css("background","black");
// 	// setTimeout(function() {
//  //        $(this).fadeIn(1500);
//  //    },3000);
// });

$(document).on("touchstart", 'div.box-4', function() 
{

	var product_id=$(this).attr("product-id");

	setTimeout(function() {

		$('#add-cart-'+product_id).attr("disabled", false);
		$('#detail-'+product_id).attr("disabled", false);
    },1000);

 });

$(document).on("touchstart", 'div.row.products', function(e) 
{
	
	// console.log($(e.target).hasClass('mask'));

	// $("div.mask", this).css({position:relative, z-index:1000});
	if ($(e.target).hasClass('products')){
		// console.log("entra");
		$('.add-cart-prod').attr("disabled", true);
		$('.btn2').attr("disabled", true);
	}
 });

$(document).on("mouseover", 'div.box-4', function() 
{

	// console.log("entra");
	var product_id=$(this).attr("product-id");
	// console.log($(this).attr("product-id"));
	$('#add-cart-'+product_id).attr("disabled", false);
	$('#detail-'+product_id).attr("disabled", false);

 });

$(document).on("click", "#btn-check", function() 
{

	if ($(".term_cond").is(':checked')){
		checked=true;
	}else if($(".term_cond").not(':checked')){
		checked=false;
	}

	var quantity_rdk=parseInt($(".quantity-rdk span").text());
	var total_rdk=parseInt($(".total-rdk").text());
	// if (plans.model.data.length==0){
	// 	alert("Ingrese datos del cliente que usará el plan.");
	// 	return false;
	// }else 

// console.log(quantity_rdk+"--------------"+total_rdk);
	if (quantity_rdk < total_rdk){
		alert("Le faltan más reduKcales para completar su plan.");
		return false;
	}

	if (checked==false){
		alert("Antes de pagar debe aceptar las condicionesdel método.");
		return false;
	}


	$(document).ecommerce('set_data', 
    {
        'género' :localStorage.getItem('gender') ,
        'peso': localStorage.getItem('weight'), 
        'altura':localStorage.getItem('height'), 
        'fecha nacimiento':localStorage.getItem('birthday'),
        'plan': localStorage.getItem('plan')
    });
});

var woman="";
var man="";
var less_40="";
var more_40="";

$(document).on("click", ".woman", function() 
{
	if (woman==""){
		woman="woman";
		man="";
	}else{
		woman="";
		man="";
	}
	$(".man").removeClass("click");
	if (woman=="woman"){
		if (less_40=="less-40"){
			$(".woman-plan.less-40-plan").show("fade");
			$(".man-plan.less-40-plan").hide("fade");
		}else if (more_40=="more-40"){
			$(".woman-plan.more-40-plan").show("fade");
			$(".man-plan.more-40-plan").hide("fade");
		}else{
			$(".man-plan").hide("fade");
			$(".woman-plan").show("fade");
		}
		$(".woman").addClass("click");
	}else{
		if (less_40=="less-40"){
			$(".woman-plan.less-40-plan").show("fade");
			$(".man-plan.less-40-plan").show("fade");
			$(".woman-plan.more-40-plan").hide("fade");
			$(".man-plan.more-40-plan").hide("fade");
		}else if (more_40=="more-40"){
			$(".woman-plan.more-40-plan").show("fade");
			$(".man-plan.more-40-plan").show("fade");
			$(".woman-plan.less-40-plan").hide("fade");
			$(".man-plan.less-40-plan").hide("fade");
		}else{
			$(".man-plan").show("fade");
			$(".woman-plan").show("fade");
		}

		$(".woman").removeClass("click");
	}

	// console.log('w: '+ woman+' m: '+ man+' less:'+ less_40+' more:'+more_40);
});

$(document).on("click", ".man", function() 
{
	if (man==""){
		man="man";
		woman="";
	}else{
		man="";
		woman="";
	}

	$(".woman").removeClass("click");
	if (man=="man"){
		if (less_40=="less-40"){
			$(".man-plan.less-40-plan").show("fade");
			$(".woman-plan.less-40-plan").hide("fade");
		}else if (more_40=="more-40"){
			$(".man-plan.more-40-plan").show("fade");
			$(".woman-plan.more-40-plan").hide("fade");
		}else{

			$(".woman-plan").hide("fade");
			$(".man-plan").show("fade");
		}
		$(".man").addClass("click");
	}else{
		if (less_40=="less-40"){
			$(".man-plan.less-40-plan").show("fade");
			$(".woman-plan.less-40-plan").show("fade");
			$(".man-plan.more-40-plan").hide("fade");
			$(".woman-plan.more-40-plan").hide("fade");
		}else if (more_40=="more-40"){
			$(".man-plan.less-40-plan").hide("fade");
			$(".woman-plan.less-40-plan").hide("fade");
			$(".man-plan.more-40-plan").show("fade");
			$(".woman-plan.more-40-plan").show("fade");
		}else{

			$(".woman-plan").show("fade");
			$(".man-plan").show("fade");
		}
		
		$(".man").removeClass("click");
	}
	// console.log('w: '+ woman+' m: '+ man+' less:'+ less_40+' more:'+more_40);
});

$(document).on("click", ".less-40", function() 
{

	if (less_40==""){
		less_40="less-40";
		more_40="";
	}else{
		less_40="";
		more_40="";
	}

	$(".more-40").removeClass("click");
	if (less_40=="less-40"){
		if (woman=="woman"){
			$(".woman-plan.less-40-plan").show("fade");
			$(".woman-plan.more-40-plan").hide("fade");
		}else if (man=="man"){
			$(".man-plan.less-40-plan").show("fade");
			$(".man-plan.more-40-plan").hide("fade");
		}else{
			$(".more-40-plan").hide("fade");
			$(".less-40-plan").show("fade");
		}
		$(".less-40").addClass("click");
	}else{
		if (woman=="woman"){
			$(".woman-plan.less-40-plan").show("fade");
			$(".woman-plan.more-40-plan").show("fade");
			$(".man-plan.less-40-plan").hide("fade");
			$(".man-plan.more-40-plan").hide("fade");
		}else if (man=="man"){
			$(".man-plan.less-40-plan").show("fade");
			$(".man-plan.more-40-plan").show("fade");
			$(".woman-plan.less-40-plan").hide("fade");
			$(".woman-plan.more-40-plan").hide("fade");
		}else{
			$(".more-40-plan").show("fade");
			$(".less-40-plan").show("fade");
		}

		$(".less-40").removeClass("click");
	}
	// console.log('w: '+ woman+' m: '+ man+' less:'+ less_40+' more:'+more_40);
});

$(document).on("click", ".more-40", function() 
{
	if (more_40==""){
		more_40="more-40";
		less_40="";
	}else{
		more_40="";
		less_40="";
	}
	$(".less-40").removeClass("click");
	if ( more_40=="more-40"){
		if (woman=="woman"){
			$(".woman-plan.more-40-plan").show("fade");
			$(".woman-plan.less-40-plan").hide("fade");
		}else if (man=="man"){
			$(".man-plan.more-40-plan").show("fade");
			$(".man-plan.less-40-plan").hide("fade");
		}else{
			$(".less-40-plan").hide("fade");
			$(".more-40-plan").show("fade");
		}
		$(".more-40").addClass("click");
	}else{
		if (woman=="woman"){
			$(".woman-plan.less-40-plan").show("fade");
			$(".woman-plan.more-40-plan").show("fade");
			$(".man-plan.less-40-plan").hide("fade");
			$(".man-plan.more-40-plan").hide("fade");
		}else if (man=="man"){
			$(".man-plan.less-40-plan").show("fade");
			$(".man-plan.more-40-plan").show("fade");
			$(".woman-plan.less-40-plan").hide("fade");
			$(".woman-plan.more-40-plan").hide("fade");
		}else{
			$(".more-40-plan").show("fade");
			$(".less-40-plan").show("fade");
		}
		$(".more-40").removeClass("click");
	}
	// console.log('w: '+ woman+' m: '+ man+' less:'+ less_40+' more:'+more_40);
});

//abrir menú lateral movil 
    var expandedmenu = false;

    //para abrir el menú 
    $("#open-rdk-menu-movil").click(function(event) {
        event.stopPropagation();
        // Slide 
        if (!expandedmenu) {
            $(".rdk-menu-movil").animate({
                "right": 0
            }, "fast");
            $("#open-rdk-menu-movil").animate({
                "right": 200
            }, "fast");

            expandedmenu = true;
        }
        // Slide up menu if shown
        else {
            $(".rdk-menu-movil").animate({
                "right": -200
            }, "slow");
            $("#open-rdk-menu-movil").animate({
                "right": 0
            }, "slow");
            expandedmenu = false;
        }
    });

    $("#open-cart").click(function() {
        if (expandedmenu) {
            $(".rdk-menu-movil").animate({
                "right": -200
            }, "fast");
            $("#open-rdk-menu-movil").animate({
                "right": 0
            }, "fast");
            expandedmenu = false;
        }
    });
    // $(".mlb-menu-movil").click(function(event) {
    //     event.stopPropagation();
    // });
    // para cerrar el menu movil
    $(document).click(function() {
        if (expandedmenu) {
            $(".rdk-menu-movil").animate({
                "right": -200
            }, "fast");
            $("#open-rdk-menu-movil").animate({
                "right": 0
            }, "fast");
            expandedmenu = false;
        }
    });



});

$(function() {
	if ($( "#datepicker" ).length){
	$( "#datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true
	});
	$( "#datepicker" ).datepicker( "option", "dateFormat", "dd/mm/yy" );
	}
});
