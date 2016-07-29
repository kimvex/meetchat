import $ from 'jquery';

$(document).ready(function(){
  var cuerpo = document.getElementById('cuerpo');
  var estado = false;
  function desplegar(e){
    if(!estado){
      $('#menu').removeClass('menu');
      $('#menu').addClass('menuD');      
      $('#cuerpo').removeClass('cuerpo');
      $('#cuerpo').addClass('cuerpoD');      
      $('#boton-menu').removeClass('boton-menu');
      $('#boton-menu').addClass('boton-menuD');
      estado = true;     
    }else{
      $('#menu').removeClass('menuD');
      $('#menu').addClass('menu');      
      $('#cuerpo').removeClass('cuerpoD');
      $('#cuerpo').addClass('cuerpo');      
      $('#boton-menu').removeClass('boton-menuD');
      $('#boton-menu').addClass('boton-menu');
      estado = false;
    }
    e.preventDefault();
  }


  document.getElementById('boton-menu').addEventListener('click',desplegar);
  $('.item').click(function(){
    var id = "#"+$(this).attr('id')+"-d";
    $('.visual').addClass("no");
    $(id).removeClass('no');
  });
});
