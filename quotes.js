//Inspiration ifrån: https://www.freecodecamp.org/news/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08/
//Quote array, pga array = varje quote har ett "nummer"
const quotes = [
'Do not be afraid of competition',
'An exciting opportunity lies ahead of you',
'You love peace',
'Get your mind set…confidence will lead you on',
'You will always be surrounded by true friends',
'Sell your ideas-they have exceptional merit',
'You should be able to undertake and complete anything',
'You are kind and friendly',
'You are wise beyond your years',
'Your ability to juggle many tasks will take you far',
'A routine task will turn into an enchanting adventure',
'Beware of all enterprises that require new clothes',
'Be true to your work, your word, and your friend',
'Goodness is the only investment that never fails',
'A journey of a thousand miles begins with a single step',
'Forget injuries; never forget kindnesses',
'Respect yourself and others will respect you',
'Sing everyday and chase the mean blues away',
'Plan for many pleasures ahead',
'Experience is the best teacher',
'You will be happy with your spouse',
'Expect the unexpected',
'Stay healthy. Walk a mile'
];

//Inspiration från föreläsning av LocalStorage och https://stackoverflow.com/questions/69565599/how-to-set-limit-amount-of-clicks-button-can-be-pressed-using-cookies

localStorage.setItem('limit', '5'); //Max 3 gånger (varje klick räknas så får skriva in 5)
localStorage.setItem('count', '0'); 

// Hämtar in element från DOM
const button = document.querySelector('.main-inner-button-button')
const img = document.querySelector('.main-inner-cookie img')

// Slå ihop funktion så att EventListener kallar på bägge samtidigt
button.addEventListener('click', () => {

    const limits = parseInt(localStorage.getItem('limit'));
    let count = parseInt(localStorage.getItem('count'));

    if(count >= limits) {
        alert('Your daily fortune cookies are all eaten! Try again tomorrow');
        return;
    }

    else {
        count++
        localStorage.setItem('count', count.toString()); //LocalStorage kan bara lagra strängar, därför behöver man konvertera

        generateQuote();
        changeImg();
    }
});

// Funktion som genererar quotes
const generateQuote = () => {
const generateRandom = Math.floor(Math.random() * (quotes.length)); //Randomiserar fram en quote i arrayen
const showBox = document.getElementById('show-quotes');
const buttonText = document.querySelector('.main-inner-button-button');
    
showBox.innerHTML = quotes[generateRandom];

    if (buttonText.textContent === "TRY AGAIN") {
        showBox.style.display = 'none';
    }

    else {
        showBox.style.display = 'block';
    }  
}

// Funktion som ändrar bild
const changeImg = () => {
const cookieImage = document.getElementById('cookie_img');
const buttonText = document.querySelector('.main-inner-button-button');

    if (cookieImage.src.endsWith("Cookie-img.png")) //Metod som kollar efter specifik ändelse true/false
    {
        cookieImage.src = "Bilder/glueckskeks-offen.png";
        buttonText.textContent = "TRY AGAIN";
        
    } else {
        cookieImage.src = "Bilder/Cookie-img.png";
        buttonText.textContent = "BREAK ME!";
    }

cookieImage.classList.toggle("toggled"); 

}
