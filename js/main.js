let carMove = '';
let userInput = '';
const upArrow = '38';
const downArrow = '40';
const leftArrow = '37';
const rightArrow = '39';

$(document).keyup(function (event){

    userInput += event.keyCode;
    console.log(userInput);

}).keydown(function () {
    $('body').css('background-color', 'black');
})