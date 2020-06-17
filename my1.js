var myObj = {

    init : () => {
        let imgsrc = '';
        document.getElementById('item-file').addEventListener('change', event => {
            imgsrc = URL.createObjectURL(event.target.files[0]);                                 
        })
    },
    successTimeOut : (time) => {
        setTimeout(() => {
            document.getElementsByTagName('h1')[0].remove();
        },time)
    },
    
    displayDropDown : (event,callback, successcallback) => {
        if(document.getElementById('item-dropdown')){
            var createSelect = document.getElementById('item-dropdown');
        }else{                
            var createSelect = document.createElement('select');
            createSelect.id = 'item-dropdown';
            let createOption = document.createElement('option')
            createOption.setAttribute('value','');
            let createTextNode = document.createTextNode('Select Item');
            createOption.appendChild(createTextNode);
            createSelect.appendChild(createOption);
            callback(createSelect);                
        }
    }

}