function getElement(Id) {
    let element = document.getElementById(Id);
    return element;
}

getElement('pinGenerateBtn').addEventListener('click', function () {

    let number = Math.random() * 1000000;
    let pin = Math.round(number);
    let strPin = pin + '';
    if (strPin.length == 6) {
        let pinDisplayBox = getElement('showGeneratedPin');
        pinDisplayBox.value = pin;
    }
});

getElement('keyPad').addEventListener('click', function (event) {
    let key = event.target.innerText;
    if(isNaN(key)){
        if(key== 'C'){
            getElement('calDisplayBox').value=''; 
        }
    }else{
        getElement('calDisplayBox').value = getElement('calDisplayBox').value + key;
    }
    
});
getElement('pinMatch').style.display='none';
getElement('pinNotMatch').style.display='none';

getElement('submitBtn').addEventListener('click',function(){
    let generatedPin = getElement('showGeneratedPin');
    let calPin= getElement('calDisplayBox');
    if(generatedPin.value == calPin.value && generatedPin.value>0 && calPin.value>0){
        getElement('pinMatch').style.display='block';
        getElement('pinNotMatch').style.display='none';

    }else{
        getElement('pinNotMatch').style.display='block';
        getElement('pinMatch').style.display='none';
    }
})