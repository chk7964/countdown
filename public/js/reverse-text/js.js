$("#b").click(function(){
    let str = document.getElementById("k").value;
        //   var string = str.toUpperCase();

          var string = str.split("").reverse().join("");
          $("#result").html(string);   
  });