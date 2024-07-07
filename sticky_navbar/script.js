const navElement = document.querySelector('nav');
const navBarLinks = navElement.querySelectorAll('a');
const navPosition = navElement.getBoundingClientRect();

window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;
    navElement.style.top = scrollPosition + 'px';

    navBarLinks.forEach(link =>{
        const sectionElement = document.querySelector(link.hash);
        const offset = 50;
        if(scrollPosition + offset > sectionElement.offsetTop && scrollPosition + offset < sectionElement.offsetTop + sectionElement.offsetHeight){
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
})