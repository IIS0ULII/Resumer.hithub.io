let btn = document.querySelector(`#btn`);
let sidebar = document.querySelector(`.sidebar`)

btn.onclick = function () {
    sidebar.classList.toggle(`active`);
};

//store the data into an array
let modalInfo =[];

// call the actual ID from the HTML element
const modalEmail = document.getElementById(`modalEmail`);
const modalText = document.getElementById(`modalText`);
const modalFullName = document.getElementById(`modalFullName`);
const modalSubject = document.getElementById(`modalSubject`);

function captureModal(){

  // stored Object in array form includes object titles and object values
  let contactInfo = {
    RequestID: Math.floor(Math.random() * 1000000),
    ClientFullName: modalFullName.value,
    ClientEmail :  modalEmail.value,
    ClientLocation :  modalSubject.value,
    ClientMessage :  modalText.value,
  };

  // created variable for calling out the RequestForm inside the local storage 
  let storedContacts = localStorage.getItem('RequestForm');

  /* created variable for ternary condition parsing a JSON object to text format to Javascript object from the LocalStorage
  pushing another object using the variable of contactinfo*/
  let contactForms = storedContacts ? JSON.parse(storedContacts) : []; 
  contactForms.push(contactInfo);

    // Store data for setting the item into a RequestForm  category
    localStorage.setItem(`MessageForm`, JSON.stringify(contactForms));
}

window.onload = function (){
  let contactForm = document.getElementById(`contactForm`);
  contactForm.onsubmit = captureModal;
};

//End of Line for Storing data




