// header stuck
$(window).scroll(function(){
	if($(this).scrollTop() > 90){
		$('#header').addClass("stickyHeader");
	} else{
        $('#header').removeClass("stickyHeader");
	}
});

// clients slider
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
    responsive:{
        0:{items:1},
		400:{items:2},
        992:{items:3},
        1400:{items:4}
    }
})

// AoS
AOS.init();

(async function () {
    const response = await fetch("./data.json");
    const data = await response.json();

    const personEl = document.querySelector('#person')
    const roleEl = document.querySelector('#role')
    const experienceEl = document.querySelector('#experience')
    const skillsEl = document.querySelector('#skills')
    const heroImgEl = document.querySelector('#heroImg')
    const linkedin = document.querySelector('#linkedin')
    const skype = document.querySelector('#skype')
    const github = document.querySelector('#github')
    const email = document.querySelector('#email')

    personEl.textContent = data.name 
    roleEl.textContent = data.role 
    experienceEl.textContent = data.experience
    skillsEl.textContent = data.skills

    imgEl = document.createElement('img')
    imgEl.src = data.heroImg
    imgEl.alt = data.name
    imgEl.classList.add('img-fluid')
    heroImgEl.appendChild(imgEl)

    linkedin.href += data.linkedinUser
    skype.href += data.skypeUser
    twitter.href += data.twitterUser
    github.href += data.githubUser
    email.href += data.emailUser
})();

