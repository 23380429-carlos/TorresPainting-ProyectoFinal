let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        setTimeout(() => {
            navbar.classList.remove('active');
        }, 100); 
    }
});


function toggleOtherServiceField() {
    const selector = document.getElementById('service_combo');
    const otherContainer = document.getElementById('other_service_container');
    const otherField = document.getElementById('other_service_field');

    if (selector.value === 'Otro') {
        otherContainer.style.display = 'flex'; 
        otherField.setAttribute('required', 'required'); 
    } else {
        otherContainer.style.display = 'none';
        otherField.removeAttribute('required'); 
        otherField.value = ''; 
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact form');
    const serviceSelector = document.getElementById('service_combo');
    const otherServiceField = document.getElementById('other_service_field');

    if (contactForm) {
        
        contactForm.reset(); 
        
        contactForm.addEventListener('submit', function(e) {
            
            if (serviceSelector.value !== 'Otro') {
                e.preventDefault(); 
                
                otherServiceField.setAttribute('disabled', 'disabled'); 
                
                setTimeout(() => {
                    contactForm.submit(); 
                }, 10);
            }
            
        });
    }
});