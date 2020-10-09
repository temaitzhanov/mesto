let blockPopup = document.querySelector('.popup');
let openBlockPopup = document.querySelector('.profile__pic-edit');
let closeBlockPopup = blockPopup.querySelector('.popup__close');
let saveBlockPopup = blockPopup.querySelector('.popup__submit');
let nameFromPage = document.querySelector('.profile__name');
let jobFromPage = document.querySelector('.profile__profession');
let nameFromForm = document.querySelector('.popup__input_name');
let jobFromForm = document.querySelector('.popup__input_work-place');
function togglePopup(event){
  blockPopup.classList.toggle('popup_opened');
}
function closePopup(event){
  nameFromForm.value = nameFromPage.textContent;
  jobFromForm.value = jobFromPage.textContent;
  togglePopup();
}
function savePopup (event){
  event.preventDefault();
  nameFromPage.textContent = nameFromForm.value;
  jobFromPage.textContent = jobFromForm.value;
  togglePopup();
}
openBlockPopup.addEventListener('click', togglePopup);
closeBlockPopup.addEventListener('click', closePopup);
saveBlockPopup.addEventListener('click', savePopup);
