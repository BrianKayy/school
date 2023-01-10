
const APP_SETTINGS = {
    "FAVOURITE_FLAVOUR_KEY": "favFlavour",
    "FAVOURITE_FLAVOUR_ID": "FavouriteFlavour",
    "FAVOURITE_FLAVOUR_TB_ID": "tbFlavour",
    "FAVOURITE_FLAVOUR_LOADED": "favouriteFlavourLoaded",

    "LSMF": 'liCarMf',
    "LSMODEL": 'liCarModel',
    "LSCOLOUR": 'liCarColour',
    "LS_MF": 'tbMf',
    "LS_MODEL": 'tbModel',
    "LS_COLOUR": 'tbColour'
}









function init(){
    console.log('init()');
}

function btnSave() {
    console.log('btnSave()');

    let favouriteFlavour = document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_TB_ID).value

    console.log('favouriteFlavour')

    localStorage.setItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY, favouriteFlavour)
}


function btnRetrieveFlavour() {
   console.log('btnRetrieveFlavour()')

   const favouriteFlavour = localStorage.getItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY)
   console.log('favouriteFlavour')

   document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = favouriteFlavour;

}


function btnDeleteFlavour() {
    console.log('btnDeleteFlavour()')

    localStorage.removeItem(APP_SETTINGS.FAVOURITE_FLAVOUR_KEY);

    document.getElementById(APP_SETTINGS.FAVOURITE_FLAVOUR_LOADED).innerHTML = '';
}





















function BtnSave() {
    console.log('btnSave()');

    let MyMf = document.getElementById(APP_SETTINGS.LS_MF).value
    let MyModel = document.getElementById(APP_SETTINGS.LS_MODEL).value
    let MyColour = document.getElementById(APP_SETTINGS.LS_COLOUR).value

    console.log('tbMf')

    localStorage.setItem(MyMf, MyModel, MyColour);
     

    document.getElementById(APP_SETTINGS.LSMF).innerHTML = MyMf;
    document.getElementById(APP_SETTINGS.LSMODEL).innerHTML = MyModel;
    document.getElementById(APP_SETTINGS.LSCOLOUR).innerHTML = MyColour;


}









