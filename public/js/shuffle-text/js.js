$("#b").click(function(){
    let s = document.querySelector("#k").value;
output = shuffle(s);
document.getElementById("result").value = output; 
});


function getRandomInt(n) {
return Math.floor(Math.random() * n);
}
function shuffle(s) {
var arr = s.split('');           // Convert String to array
var n = arr.length;              // Length of the array

for(var i=0 ; i<n-1 ; ++i) {
var j = getRandomInt(n);       // Get random of [0, n-1]

var temp = arr[i];             // Swap arr[i] and arr[j]
arr[i] = arr[j];
arr[j] = temp;
}

s = arr.join('');                // Convert Array to string
return s;                        // Return shuffled string
}



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
  
           
    toastr["success"]("Text Is Copied " + "<br><b style='font-size:25px;text-align:center;'>" + e.text + "</b>")
    e.clearSelection();
  });
  
  clipboard.on('error', function (e) {
    toastr["warning"]("<b style='font-size:25px;text-align:center;'> Output Is Empty</b>")
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });