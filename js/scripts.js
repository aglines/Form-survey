// Back end logic

var colorchange = function(color) {
  document.body.style.backgroundColor = color;
};



// Front-end logic



$(document).ready(function(){

  $("form#compute").submit(function(event){
    event.preventDefault();

    // call a fn to reset form now
    $("ul").empty();

    var whichButton = $("input:radio[name=which]:checked").val();
    var genre = $("#genre").val();
    var name = $("#namehere").val();
    var date = $("#born").val();
    var color = $("#color").val();

    $("jumbotron").css('background-color', 'green');

    $("ul").append("<li>" + name + "</li>");
    $("ul").append("<li>" + whichButton + "</li>");
    $("ul").append("<li>" + genre + "</li>");
    $("ul").append("<li>" + date + "</li>");
    $("ul").append("<li>" + color + "</li>");
    colorchange(color);


    // $("ul" style="color: green").append("<li>test text color</li>");

  });
});
