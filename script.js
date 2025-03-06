'use strict';

const modalButton = document.querySelector('.modal-button');
const overlay = document.querySelector('.overlay');
const modalWindow = document.querySelector('.modal-window');
const closeModal = document.querySelector('.close-modal');
const formElement = document.getElementById('newsletter')
const emailInputElement = document.getElementById('email')

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
})