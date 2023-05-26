var style_modal = document.getElementById('style-modal');
var modal = style_modal.querySelector('.modal');

var btnBuyTickets = document.getElementsByClassName('js-buy-ticket');
for(let i = 0; i < btnBuyTickets.length; i++) {
    btnBuyTickets[i].onclick = () => {
        style_modal.style.display = 'block';
    }
}

style_modal.querySelector('.modal .header .button-close').onclick = () => {
    style_modal.style.display = 'none';
}
style_modal.querySelector('.modal .footer .close').onclick = () => {
    style_modal.style.display = 'none';
}
style_modal.onclick = function(e) {
    if(e.target == style_modal) {
        style_modal.style.display = 'none';
    }    
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Mobile 
var btnMobileMenu = $('#header .mobile-menu');
var headerElement = $('#header');
// open close
btnMobileMenu.onclick = function() {
    if(headerElement.style.height != '46px') {
        headerElement.style.height = '46px';
    }
    else {
        headerElement.style.height = 'auto';
    }
}

// auto close when click
var itemMobileMenu = $$('#header a');
itemMobileMenu.forEach(function(value,index){
    value.onclick = function(event) {
        let elementNext = value.nextElementSibling;
        if(elementNext != null && elementNext.classList.contains('subnav')) {
            event.preventDefault();
        }
        else {
            headerElement.style.height = null;
        }
    }
});
