$(function (){
    loadBikes();
})


function loadBikes(){
    console.log('loadBikes')
    const apiKey = 'c98912a9423463b39772b242a2e24d223bbbcaaa';
    const url    =  `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;

    $.getJSON(url, function(jsondata){
        RenderStationData(jsondata)
    });
}


function RenderStationData(statioAsJson){

}

function GetStationData(stationNumber){

}

function RenderStationDetail(stationAsJson){

}