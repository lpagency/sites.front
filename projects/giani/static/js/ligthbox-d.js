//ligthbox fondo desenfocado
$(document).ready(function() {

//lightbox con fondo desengocado
  $(".btn-agregar-cont-principal").click(function() {
    $("#menu_movil").fadeIn(500);
    // para agregar y quitar blur del fondo
    $("#cuerpo").addClass("descripcion_blur");
    $(".boton_busqueda_movil").addClass("b_blur");
  });
  
  $("button#tellmeboton2").click(function() {
    $("#menu_movil").fadeOut(100);
    // para agregar y quitar blur del fondo
    $("#cuerpo").removeClass("descripcion_blur");
    $(".boton_busqueda_movil").removeClass("b_blur");
  });
// para ir a borradores
  $("#g-borradores").click(function(){
    $("#g-contenido-a").fadeOut(100, function() {
      $("#g-borradores-a").fadeIn(500);
    });
   });
//volver de borradores
  $(".producto-volver-b").click(function(){
    $("#g-borradores-a").fadeOut(100, function() {
      $("#g-contenido-a").fadeIn(500);
    });
   });
// para generar producto
  $("#g-contenido").click(function(){
    $(".b_logo").fadeOut(100, function() {
      $("#g-contenido-a").fadeIn(500);
    });
   });
// para abrir articulo
  $("#g-articulo").click(function(){
    $(".b_logo").fadeOut(100, function() {
      $("#g-articulo-a").fadeIn(500);
    });
   });
// para abrir banner
  $("#g-banner").click(function(){
    $(".b_logo").fadeOut(100, function() {
      $("#g-banner-a").fadeIn(500);
    });
   });
  // para abrir evento
  $("#g-evento").click(function(){
    $(".b_logo").fadeOut(100, function() {
      $("#g-evento-a").fadeIn(500);
    });
   });
  // para abrir Galeria
  $("#g-galeria").click(function(){

    $(".b_logo").fadeOut(100, function() {
      $("#g-galeria-a").fadeIn(500);
    });
   });
   // para abrir perfil
  $("#g-perfil").click(function(){
    $(".b_logo").fadeOut(100, function() {
      $("#g-perfil-a").fadeIn(500);
    });
   });
  // para pasar a segundo paso en perfil
  $("#proximo-paso-perfil").click(function(){
    $("#paso-uno-perfil").fadeOut(100, function() {
      $("#paso-dos-perfil").fadeIn(500);
    });
   });
  // para volver de sgundo paso a primer paso
  $("#producto-volver-7").click(function(){
    $("#paso-dos-perfil").fadeOut(100, function() {
      $("#paso-uno-perfil").fadeIn(500);
    });
   });
  // para volver a generar contenidos desde producto
  $("#producto-volver").click(function(){
    $("#g-contenido-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
  // para volver a generar contenidos desde articulo
  $("#articulo-volver").click(function(){
    $("#g-articulo-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
  // para volver a generar contenidos desde banner
  $("#producto-volver-3").click(function(){
    $("#g-banner-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
  // para volver a generar contenidos desde evento
  $("#producto-volver-4").click(function(){
    $("#g-evento-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
   // para volver a generar contenidos desde galeria
  $("#producto-volver-5").click(function(){
    $("#g-galeria-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
   // para volver a generar contenidos desde galeria
  $("#producto-volver-6").click(function(){
    $("#g-perfil-a").fadeOut(100, function() {
      $(".b_logo").fadeIn(500);
    });
   });
  
});