const button = document.querySelector('.main-inner-button-button')
const img = document.querySelector('.main-inner-cookie img')

button.addEventListener('click', changeImg)

function changeImg() {
    var cookieImage = document.getElementById("cookie_img");
    var buttonText = document.querySelector('.main-inner-button-button');

    if (cookieImage.src.endsWith("Cookie-img.png")) //Metod som kollar efter specifik ändelse true/false
    {
        cookieImage.src = "Bilder/cracked-cookie.png";
        buttonText.textContent = "TRY AGAIN";
        
    } else {
        cookieImage.src = "Bilder/Cookie-img.png";
        buttonText.textContent = "BREAK ME!";
    }

    cookieImage.classList.toggle("toggled"); 
}