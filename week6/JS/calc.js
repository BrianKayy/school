function init(){
    console.log('site loading.........');
}


function clearField(e){
    console.log('clearField')
    e.value ="";
}


function validate(e){
    console.log('validate(e)');
    if(isNaN(e.value)){
        e.value = 0;
        document.getElementById('MessagePanel1').innerHTML = "there's no Number!!"
    }
}


function add(){
    console.log('add')
    var num1 = document.getElementById('tbNum1').value;
    var num2 = document.getElementById('tbNum2').value;
    var num3 = document.getElementById('tbNum3').value;


    var total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    document.getElementById('MessagePanel1').innerHTML = total;
}