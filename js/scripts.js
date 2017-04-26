// Back end logic


// var music = function(input1 + input2){
//   return ;
// }



// Front-end logic



$(document).ready(function(){

  $("form#compute").submit(function(event){
    event.preventDefault();

    var whichButton = $("input:radio[name=which]:checked").val();
    var genre = $("#genre").val();
    var name = $("#namehere").val();
    var date = $("#born").val();
    var color = $("#color").val();

    $("ul").append("<li>" + name + "</li>");
    $("ul").append("<li>" + whichButton + "</li>");
    $("ul").append("<li>" + genre + "</li>");
    $("ul").append("<li>" + date + "</li>");
    $("ul").append("<li>" + color + "</li>");


  });
});
