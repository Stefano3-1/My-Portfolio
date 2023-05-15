let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
const form = document.querySelector('#contact-form');
            const nameInput = document.querySelector('#name-input');
            const emailInput = document.querySelector('#email-input');
            const messageInput = document.querySelector('#message-input');
            const submitButton = document.querySelector('#submit-button');
          
            submitButton.addEventListener('click', (event) => {
              event.preventDefault();
              
              const formData = new FormData(form);
          
              fetch(form.action, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData)
              })
              .then(() => {
                alert('Your message was sent successfully!');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
              })
              .catch((error) => {
                alert('There was an error sending your message. Please try again later.');
                console.error(error);
              });
            });