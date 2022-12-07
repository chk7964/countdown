
// $("#repeatButton1").click(function(){
//   var Text = $("#text").val();
//   var repeats = $("#number").val();
//   for (i = 1; i <= repeats; i++) {
//     document.getElementById("text1").value += Text + "\n";
//   };

//   $("#repeatButton1").attr("disabled", true);
//   $("#repeatButton2").attr("disabled", true);
//   $("#repeatButton1").html = "Repeated";
// });
// $("#repeatButton2").click(function(){
//   var Text = $("#text").val();
//   var repeats = $("#number").val();
//   for (i = 2; i <= repeats; i++) {
//     document.getElementById("text1").value += Text + " ";
//   };

//   document.getElementById("repeatButton2").disabled = true;

//   document.getElementById("repeatButton1").disabled = true;

//   document.getElementById("repeatButton2").innerHTML = "Repeated";



// });

// // function repeatTextInNewLine() {



// //     var Text = document.getElementById("text").value;
  
// //     var repeats = document.getElementById("number").value;
  
// //     var repeatedText = document.getElementById("repeatedText");
  
// //     for (i = 1; i <= repeats; i++) {
  
// //       document.getElementById("text1").value += Text + "\n";
  
// //     };
  
  
// //     document.getElementById("repeatButton1").disabled = true;
  
// //     document.getElementById("repeatButton2").disabled = true;
  
// //     document.getElementById("repeatButton1").innerHTML = "Repeated";
  
  
// //   };
  
  
//   // function repeatTextInSameLine() {
  
  
  
//   //   var Text = document.getElementById("text").value;
  
//   //   var repeats = document.getElementById("number").value;
  
//   //   var repeatedText = document.getElementById("repeatedText");
  
  
  
//   //   for (i = 2; i <= repeats; i++) {
  
//   //     document.getElementById("text1").value += Text + " ";
  
//   //   };
  
//   //   document.getElementById("repeatButton2").disabled = true;
  
//   //   document.getElementById("repeatButton1").disabled = true;
  
//   //   document.getElementById("repeatButton2").innerHTML = "Repeated"
  
  
  
//   // };
  
//   $("#reset").click(function(){
//     $("#repeatButton1").removeAttr("disabled");
  
//     $("#repeatButton2").removeAttr("disabled");
  
//     $("#repeatButton1").html = "<i class='fa fa-angle-double-down'></i> Repeat (New Line)";
  
//     $("#repeatButton2").html = "<i class='fa fa-angle-double-right'></i> Repeat (Same Line)";
  
//     $("#text").val('');
//     $("#text1").val('');
//     $("#number").val('');

//   });
  
  
//   // function resetFn() {
  
//   //   document.getElementById("repeatButton1").disabled = false;
  
//   //   document.getElementById("repeatButton2").disabled = false;
  
//   //   document.getElementById("repeatButton1").innerHTML = "<i class='fa fa-angle-double-down'></i> Repeat (New Line)";
  
//   //   document.getElementById("repeatButton2").innerHTML = "<i class='fa fa-angle-double-right'></i> Repeat (Same Line)";
  
//   //   $("#text").val('');
//   //   $("#text1").val('');
//   //   $("#number").val('');
//   // };
  
  
//   $(document).ready(function () {
//     $("#text").on("input", function (e) {
//       $("#characters").text(this.value.replace(/ /g, '').length);
//       $("#words").text(this.value.trim().split(" ").filter((item) => item).length);
//     });
//   });
  

  // toastr.options = {
  //   "closeButton": true,
  //   "debug": false,
  //   "newestOnTop": false,
  //   "progressBar": true,
  //   "positionClass": "toast-top-right",
  //   "preventDuplicates": false,
  //   "onclick": null,
  //   "showDuration": "300",
  //   "hideDuration": "1000",
  //   "timeOut": "5000",
  //   "extendedTimeOut": "1000",
  //   "showEasing": "swing",
  //   "hideEasing": "linear",
  //   "showMethod": "fadeIn",
  //   "hideMethod": "fadeOut"
  // }
  
  
  
      let cbt = document.querySelector(".bt");
  let clipboard = new ClipboardJS(cbt);
  clipboard.on('success', function (e) {
    console.table('Action:', e.action);
    console.table('Text:', e.text);
    console.table('Trigger:', e.trigger);
  
           
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    e.clearSelection();
  });
  
  clipboard.on('error', function (e) {
    // toastr["warning"]("<b style='font-size:25px;text-align:center;'> Output Is Empty</b>")
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
  
  
  
  