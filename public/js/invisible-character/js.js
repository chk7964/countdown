$("#repeatButton1").click(function(){
  var Text = " ";
  
  var repeats = document.getElementById("number").value;

  for (i = 1; i <= repeats; i++) {

    document.getElementById("text1").value += Text + "\n";

  };


  document.getElementById("repeatButton1").disabled = true;

  document.getElementById("repeatButton2").disabled = true;

  document.getElementById("repeatButton1").innerHTML = "Repeated";


})


// function repeatTextInNewLine() {



//     var Text = " ";
  
//     var repeats = document.getElementById("number").value;
  
//     var repeatedText = document.getElementById("repeatedText");
  
//     for (i = 1; i <= repeats; i++) {
  
//       document.getElementById("text1").value += Text + "\n";
  
//     };
  
  
//     document.getElementById("repeatButton1").disabled = true;
  
//     document.getElementById("repeatButton2").disabled = true;
  
//     document.getElementById("repeatButton1").innerHTML = "Repeated"
  
  
//   };
$("#repeatButton2").click(function(){

  var Text = " ";
  
    var repeats = document.getElementById("number").value;
  
  
  
  
    for (i = 2; i <= repeats; i++) {
  
      document.getElementById("text1").value += Text + " ";
  
    };
  
    document.getElementById("repeatButton2").disabled = true;
  
    document.getElementById("repeatButton1").disabled = true;
  
    document.getElementById("repeatButton2").innerHTML = "Repeated";
  
  })
  
  // function repeatTextInSameLine() {
  
  
  
  //   var Text = document.getElementById("text").value;
  
  //   var repeats = document.getElementById("number").value;
  
  //   var repeatedText = document.getElementById("repeatedText");
  
  
  
  //   for (i = 2; i <= repeats; i++) {
  
  //     document.getElementById("text1").value += Text + " ";
  
  //   };
  
  //   document.getElementById("repeatButton2").disabled = true;
  
  //   document.getElementById("repeatButton1").disabled = true;
  
  //   document.getElementById("repeatButton2").innerHTML = "Repeated"
  
  
  
  // };
  
  
  $("#reset").click(function(){

    document.getElementById("repeatButton1").disabled = false;
  
    document.getElementById("repeatButton2").disabled = false;
  
    document.getElementById("repeatButton1").innerHTML = "Repeat (New Line)";
  
    document.getElementById("repeatButton2").innerHTML = "Repeat (Same Line)";
  
    $("#text").val('');
    $("#text1").val('');
    $("#number").val('');

  })
  
  // function resetFn() {
  
  //   document.getElementById("repeatButton1").disabled = false;
  
  //   document.getElementById("repeatButton2").disabled = false;
  
  //   document.getElementById("repeatButton1").innerHTML = "Repeat (New Line)";
  
  //   document.getElementById("repeatButton2").innerHTML = "Repeat (Same Line)";
  
  //   $("#text").val('');
  //   $("#text1").val('');
  //   $("#number").val('');
  // };
  
  
  $(document).ready(function () {
    $("#text").on("input", function (e) {
      $("#characters").text(this.value.replace(/ /g, '').length);
      $("#words").text(this.value.trim().split(" ").filter((item) => item).length);
    });
  });
  
  
  
  
  