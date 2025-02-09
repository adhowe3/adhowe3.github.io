document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with class 'film-link'
    const filmLinks = document.querySelectorAll('.film-link');
    
    // Get the GIF element
    const gifPlayer = document.querySelector('.playing-gif');

    // Add click event listener to each film link
    filmLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            // Get the gif source from the data-gif attribute
            const gifSrc = this.getAttribute('data-gif');
            // Change the src of the gif player
            gifPlayer.src = gifSrc;
        });
    });
});