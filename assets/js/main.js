// Variables
let authors = "D.Paz & M.Majowski";
let teacher = "Peter Lübke";
// Constants
const current_edu = "GFN-FIAE"
const year = 2023;

// Show by console
console.log(authors);
console.log(teacher);
console.log(current_edu);
console.log(year);


//Script for map + loader = 3000ms
document.addEventListener("DOMContentLoaded",(event) =>{
    setTimeout(() => {
    document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d374.8027100445434!2d8.630962223213627!3d49.87416942915357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7082280c43c9%3A0x57f87ba933adbb81!2sGFN%20GmbH!5e1!3m2!1ses-419!2sde!4v1695273996555!5m2!1ses-419!2sde"></iframe>`;
    }, 3000);
});

//Contact form return clean
function validar(){
    console.log('E-mail sent');
    return false;
}

// QR Code generator
//const containerQR = document.getElementById('containerQR');

//new QRCode(containerQR,'https://www.ecuador-it.com');