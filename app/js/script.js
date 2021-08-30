// Hamburger Animation Effect
// - First get the hamburger element from the DOM
const btnHamburger = document.getElementById('btnHamburger');
const body = documenty.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade'); 

btnHamburger.addEventListener('click', function() {
    console.log('open hamburger');
    // Add the class of "open" to the hamburger menu when it is clicked
    // - starting off, check to see if it already has the "open" class
    if(header.classList.contains('open')) { // - close hamburger menu
        // we want to remove/turn off the open class so the hamburger returns to it's previous state
        header.classList.remove('open');
        body.classList.remove('noscroll');
        fadeElems.forEach(function(element) {
            // adds the fade out effect
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
    } else { // - open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            // adds the fade in effect
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
        
    } 
    
})