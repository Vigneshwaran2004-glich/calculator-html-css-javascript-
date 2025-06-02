
let display = document.getElementById("display");

function toprint(value) {
    display.value+=value;
}
function result(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "enter correctly";
    }
}
function remove(){
    display.value=""
}