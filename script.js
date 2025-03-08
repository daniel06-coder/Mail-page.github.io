'use strict';

const modalButton = document.querySelector('.modal-button');
const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.close-modal');
const formElement = document.getElementById('newsletter');
const emailInputElement = document.getElementById('email');
const changeBackground = document.querySelector('.background-change');
const body = document.getElementById('body');
const headerText = document.getElementById("header-text");
const myFontFamily = document.querySelector('.text');

let change = true;

const closeMyModal = function (){
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden");
};
modalButton.addEventListener('click', function () {

    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
});

closeModal.addEventListener('click', closeMyModal);
overlay.addEventListener('click', closeMyModal);

formElement.addEventListener('submit', function () {
    const formData = new FormData(this);

    const email = formData.get('email');

    console.log(email);
});


changeBackground.addEventListener('click', function () {
      body.style.background = "white";


      headerText.textContent = "Hope You Like";
      headerText.style.color = "rgb(255, 81, 0)";
      
    this.style.background = "rgb(255, 81, 0)";
    modalButton.style.backgroundColor = "rgb(255, 81, 0)";
    modalButton.style.color = 'white';
    
    myFontFamily.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
    myFontFamily.style.color = "white";

    closeModal.style.color = 'white';
    


    modalWindow.style.background =
      "linear-gradient(to right,rgb(255, 145, 0), rgb(255, 102, 0) , rgb(255, 81, 0))";

});

// if color is not = black then change to white 
// else if color is = orange then change to black 
// else color = orange

// let color = true; 
// 
// let color = true; 
