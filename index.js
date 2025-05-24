// === Dark Mode ===========================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');
const themeButton = document.getElementById('theme-button');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  console.log('Button Clicked!');
}

themeButton.addEventListener('click', toggleDarkMode);


// === RSVP Elements & Initial Count =======================
const form          = document.getElementById('rsvp-form');
console.log('Form element is', form);
const rsvpCountEl   = document.getElementById('rsvp-count');
console.log('rsvp-count element is', rsvpCountEl);
const participants  = document.getElementById('rsvp-participants');
let   count         = parseInt(rsvpCountEl.textContent.match(/\d+/)?.[0], 10) || 0;


// === Form Validation (hoisted declaration) ==============
function validateForm(event) {
  event.preventDefault();
  console.log('validateForm fired');

  let containsErrors = false;
  const inputs = form.elements;

  // Gather data into one object
  const person = {
    name:    inputs['name'].value.trim(),
    concert: inputs['concert'].value.trim(),
    email:   inputs['email'].value.trim()
  };

  // Validate each input
  for (let i = 0; i < inputs.length; i++) {
    const inp = inputs[i];
    if (inp.tagName === 'INPUT' && inp.value.trim().length < 2) {
      containsErrors = true;
      inp.classList.add('error');
    } else {
      inp.classList.remove('error');
    }
  }

  // If valid, add the participant
  if (!containsErrors) {
     addParticipant(person); 
     toggleModal(person);
  
  };
 
}


// === Add Participant ====================================
function addParticipant(person) {
  console.log('Adding', person);

  // Create and append the new entry
  const entry = document.createElement('p');
  entry.textContent = `🎟️ ${person.name} is attending ${person.concert} `;
  participants.appendChild(entry);

  // Update and render the count
  count += 1;
  rsvpCountEl.textContent = `⭐ ${count} people have RSVPd to this event!`;
}


// === Listener Registrations =============================
form.addEventListener('submit', validateForm);
});

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal')
  const modalContent = document.getElementById('thanks-content-modal');
  

  modal.style.display = 'flex';

  
  modalContent.textContent =
    `Thanks for RSVPing, ${person.name}! We can’t wait to see you at the event!`;


    const intervalId= setInterval(animateImage,500);


  setTimeout(() => {
    modal.style.display = 'none';
    clearInterval(intervalId);
  }, 5000);
}

rotateFactor=0;
const modalImage=document.getElementById("confirmation-pic");
const animateImage=()=>{
  rotateFactor=(rotateFactor== 0 ? -10 : 0);
  modalImage.style.transform=`rotate(${rotateFactor}deg)`;


  }


