// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// Simple reveal animation when sections enter the screen

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(function(section) {

    observer.observe(section);

});
// Your existing JavaScript code
// ...


// New portfolio code
document.querySelectorAll('nav a').forEach(function (link) {

    link.addEventListener('click', function (event) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }

    });

});


const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('visible');

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(function (section) {
    observer.observe(section);
});
