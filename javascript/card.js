
$(document).ready(function(){

  var marker = 1 ;
 var i = 0;
 var j = 0;
$(".micro").on("click",function(){
$( "#div-compteur" ).removeClass("hide");
  if (marker == 1) {
        $('.script').load('javascript/compteur.js');
        marker = 2;
        }

$.getJSON("data/milim.json",function(data){

if (i > 31) {

  i = 0 ;
}
$(".card-input").html("<div id='compteur2'><p >ציון</p>"+j+"</div>"+"<p class='mot-json'>"+data["Mot" + i]+"</p class='mot-json'>");
i = i + 1 ;
j = j + 1 ;
$(".compteur").text(j);



});
});
});
