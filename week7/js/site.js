/*$(function () {
    console.log('ready..........')
    setup();
})*/

function init(){
    console.log('readyy...........');
    setup();
}

function setup() {
    setupNumericalInputs();
    writeWelcomeMessage();
    SetupPizzaOptions();
    writeSongCalculation();
  }


  function writeSongCalculation(){
       $('#btnAdd').click(function () { 
        const number1 = isNaN(parseInt($('#tbNum1').val()))? 0 :parseInt($('#tbNum1').val());
        const number2 = isNaN(parseInt($('#tbNum2').val()))? 0 :parseInt($('#tbNum2').val());
        const Total = number1 + number2;
        writeTomessagePanel(`the total is ${Total}`);
       });
  }

function SetupPizzaOptions(){
    $('#selectMeatOptions').on('click', function(){
        $('input:checkbox.meatOption').not(this).prop('checked', this.checked);

        const numberOfCheckedItems = $('input:checkbox:checked').not(this).length;
        writeTomessagePanel(`Total options selected: ${numberOfCheckedItems}`)
    })
}



  function setupNumericalInputs(){
    $('#tbNum1', '#tbNum2').on('focus', function(){
        $(this).val('');
    })

    $('.tb').on('blur', function(){
        isNaN($(this).val())? $(this).val(0) : $(this).val();
    })
  }



  function writeWelcomeMessage(){
    $('#demo').click(function () { 
    writeTomessagePanel('Hello World')
    });
    }

function writeTomessagePanel(msg){
    $('#messagePanel').html(msg);
}
