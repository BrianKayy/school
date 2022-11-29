let fleet = getFleetOnTable();

function getFleetOnTable(){
    return [
        { "mf": "Nissan", "model": "Navara", "engine": 1.2, "colour": "Grey", "type": "Hatchback" },
        { "mf": "Nissan", "model": "Qashai", "engine": 1.3, "colour": "Black", "type": "pickup" },
        { "mf": "Nissan", "model": "Juke", "engine": 1.4, "colour": "Red", "type": "Hatchback" },
        { "mf": "Opel", "model": "Corsa", "engine": 1.4, "colour": "Red", "type": "Hatchback" },
        { "mf": "Opel", "model": "Astra", "engine": 1.4, "colour": "Red", "type": "Hatchback" },
        { "mf": "Opel", "model": "Mokka", "engine": 1.4, "colour": "Red", "type": "Hatchback" },
        {
            mf: 'Ford',
            model: 'Fiesta',
            engine: '1.2',
            colour: 'Pink',
            type: 'Sedan'
        },
        {
            mf: 'Volkswagen',
            model: 'Golf',
            engine: '1.6',
            colour: 'Red',
            type: 'Hatchback'
        },
        {
            mf: 'Ford',
            model: 'Kuga',
            engine: '1.3',
            colour: 'Blue',
            type: 'Hatchback'
        },
        {
            mf: 'Ford',
            model: 'Mustang Mach-E',
            engine: 'Electric',
            colour: 'Steely Blue',
            type: 'Sedan'
        },
    ]
}
/*
made init() a function that is triggered onload of the html page to display an array fleet in a table
so i used  2 functions: Onload init() function to call the id where to display the innerHTML and then 
renderHtml() to loop thru the array and use the table html element to display the data in the Fleet Array.

*/
function init(){
    let fragmentOfHtml =renderHtml(fleet);

    let renderFleet = document.querySelector('#tableContainer');

    renderFleet.innerHTML = fragmentOfHtml;
}






const renderHtml = fleet => {
    
   
let htmlRender = [];
             
             htmlRender.push('<table>')
        
        htmlRender.push(`<tr> <th>Manufacture</th> <th >Model</th> <th>Engine</th> <th>Colour</th> <th>Type</th> </tr>`);
        
    for(let i=0; i<fleet.length; i++){
        htmlRender.push(`<tr>`);
        htmlRender.push(`<td>${fleet[i].mf}</td>`);
        htmlRender.push(`<td>${fleet[i].model}</td>`);
        htmlRender.push(`<td>${fleet[i].engine}</td>`);
        htmlRender.push(`<td>${fleet[i].colour}</td>`);
        htmlRender.push(`<td>${fleet[i].type}</td>`);
        htmlRender.push(`</tr>`);
    }
    
    htmlRender.push('</table>')
    return htmlRender.join('');

    
};

