let blockPopup = document.querySelector('.popup');
let openBlockPopup = document.querySelector('.profile__pic-edit');
let closeBlockPopup = blockPopup.querySelector('.popup__close');
let nameFromPage = document.querySelector('.profile__name');
let jobFromPage = document.querySelector('.profile__profession');
let nameFromForm = document.querySelector('.popup__input_name');
let jobFromForm = document.querySelector('.popup__input_work');
function togglePopup(){
  blockPopup.classList.toggle('popup_opened');
  nameFromForm.value = nameFromPage.textContent;
  jobFromForm.value = jobFromPage.textContent;
}
function closePopup(){
  blockPopup.classList.remove('popup_opened');
}
function savePopup (event){
  event.preventDefault();
  nameFromPage.textContent = nameFromForm.value;
  jobFromPage.textContent = jobFromForm.value;
  closePopup();
}
openBlockPopup.addEventListener('click', togglePopup);
closeBlockPopup.addEventListener('click', togglePopup);
blockPopup.addEventListener('submit', savePopup);
