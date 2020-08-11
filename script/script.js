let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__pic-edit');
let popupCloseButton = popup.querySelector('.popup__close');
let popupSaveButton = document.querySelector('.popup__submit');
let page = document.querySelector('.page');
let form = popup.querySelector('.popup__form');
let nameInput = form.querySelector('.popup__name');
let jobInput = form.querySelector('.popup__workplace');
let name = document.querySelector('.profile__name');
let profession = document.querySelector('.profile__profession');
//Функция меняющая класс по нажатию
let popupToggle = function(event){
  event.preventDefault();
  popup.classList.toggle('popup__opened');
}
//События на кнопки закрытия и открытие Pop-Up
popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
//Функция по закрытию Pop-up нажатием в любую область
let closePopup = function(){
  if(event.target !== event.currentTarget){
    return;
  }
  popupToggle(event);
}
//Событие
popup.addEventListener('click', closePopup);
//Функция считывает значение value
function ReadValue(evt){
  evt.preventDefault();
  nameInput.value = document.getElementsByName('name')['0'].textContent;
  jobInput.value = document.getElementsByName('job')['0'].textContent;
}
//Функция записывает значение value
function formSubmitHandler (evt) {
    evt.preventDefault();
    name.textContent = nameInput.value;
    profession.textContent = jobInput.value;
}
//События формы и кнопки submit
popupSaveButton.addEventListener('click', formSubmitHandler);
popupSaveButton.addEventListener('click', closePopup);

