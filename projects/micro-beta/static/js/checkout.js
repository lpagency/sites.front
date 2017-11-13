var Validate = function(){
   var units = parseInt($(".units-total span").text());
       if (units>0){
   
               return true;
           
       }else{
           alert("Debe tener productos en el carrito para finalizar la compra.");
           return false;
       }
 
}
