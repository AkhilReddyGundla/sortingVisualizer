

function divUpdate(cont,height,color){
    window.setTimeout(function(){
        cont.style="%; height:" + height + "%; background-color:" + color + ";";
    },1000);
}