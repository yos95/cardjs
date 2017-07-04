
$(document).ready(function(){

  var marker = 1 ;
 var i = 0;
$(".micro").on("click",function(){

  if (marker == 1) {
        $('.script').load('javascript/compteur.js');
        marker = 2;
        }

$.getJSON("data/milim.json",function(data){


$(".card-input").text(data["mot" + i]);
i = i + 1 ;
$(".compteur").text(i +" mot");



});
});
});
