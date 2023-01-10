let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

function add(){
    counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
    writeCounter(counter)
}

function minus(){
    counter = --counter >= counterMinLimit ? counter : counterMinLimit;
    writeCounter(counter)
}


function reset(){
    writeCounter(00)
}


function writeCounter(num){
    document.getElementById('text').innerHTML = num;

}