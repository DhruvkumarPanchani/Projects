var button = document.getElementById('changeBackground');
var button2 = document.getElementById('changeBackground2');
var button3 = document.getElementById('changeBackground3');
var button4 = document.getElementById('changeBackground4');
var navigationLink = document.getElementById('navigation');
var header = document.getElementById('pageHeader');

button.addEventListener('click' , function(){
    document.body.style.backgroundColor = 'red';
    header.textContent = 'I have change the page header';

});

button2.addEventListener('dblclick' , function(){
    document.body.style.backgroundColor = 'blue';

});

button3.addEventListener('mouseenter' , function(){
    document.body.style.backgroundColor = 'orange';

});

button4.addEventListener('mouseout' , function(){
    document.body.style.backgroundColor = 'yellow';

});

navigationLink.addEventListener('click' , function(){
    navigationLink.textContent = 'Page';
    navigationLink.href = 'https://www.google.com/intl/en-GB/gmail/about/#';
    

});