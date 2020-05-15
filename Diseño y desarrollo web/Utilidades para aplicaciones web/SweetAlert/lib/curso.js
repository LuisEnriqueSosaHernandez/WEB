/*swal({
    title: "Error!",
    text: "Here is my error messaje",
    type: "error",
    confirmButtonText: "Cool"
});*/
/*swal({
title : "Auto close alert!",
text: "I will close in 2 seconds",
timer: 2000,
showConfirmButton: false
});*/
swal({
title: "An input!",
text: "Write something",
type: "input",
showCancelButton: true,
closeOnConfirm: false,
animation:"slide-from-top",
inputPlaceholder: "Write something",
},
function (inputValue) {
    if(inputValue===false) return false;
    if(inputValue==="") {
        swal.showInputError("You need to write shomething!");
        return false;
    }
    swal("Nice!","You wrote "+inputValue,"success");
});