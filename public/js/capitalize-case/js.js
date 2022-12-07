$("#b").click(function(){
var txt1 = $("#k").val();
const str = $("#k").val();
const arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);
$("#result").html(str2);
  });

  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
  
  
      let cbt = document.querySelector(".bt");
  let clipboard = new ClipboardJS(cbt);
  clipboard.on('success', function (e) {
    console.table('Action:', e.action);
    console.table('Text:', e.text);
    console.table('Trigger:', e.trigger);
  
           
    toastr["success"]("Text Is Copied")
    e.clearSelection();
  });
  
  clipboard.on('error', function (e) {
    toastr["warning"]("<b> Output Is Empty</b>")
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });