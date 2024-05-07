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

    document.getElementById('person').textContent = data.name;
    document.querySelectorAll('#role').forEach(link => {
        link.textContent = data.role
    })
    document.getElementById('experience').textContent = data.experience;
    document.getElementById('skills').textContent = data.skills;
     // document.getElementById('education').textContent = data.education;
    
    const heroImgEl = document.querySelector('#heroImg')
    const aboutImgEl = document.querySelector('#about-img')
    // const linkedin = document.querySelector('#linkedin')
    const skype = document.querySelector('#skype')
    const github = document.querySelector('#github')
    const email = document.querySelector('#email')


    imgEl = document.createElement('img')
    imgEl.src = data.heroImg
    imgEl.alt = data.name
    imgEl.classList.add('img-fluid')
    heroImgEl.appendChild(imgEl)

    aboutImgEl.src = data.aboutImg

    document.querySelectorAll('#linkedin').forEach(link => {
        link.href += data.social.linkedinUser;
    });
    document.querySelectorAll('#twitter').forEach(link => {
        link.href ? link.href += data.social.twitterUser : link.textContent += '@' + data.social.twitterUser;
    });
    skype.href += data.social.skypeUser
    twitter.href += data.social.twitterUser
    github.href += data.social.githubUser
    email.href += data.social.emailUser 
    
    // Function to generate HTML for each work item
    function generateWorkHTML(workItem) {
        return `
        <div class="col-lg-4 col-sm-6">
            <div class="card scroll">
                <img src="${workItem.img}" alt="${workItem.Client}">
                <div class="link">
                    <a href="${workItem.link}">
                        <i class="bi bi-arrow-up-right-circle"></i>
                        Visit Website
                    </a>
                </div>
            </div>
        </div>
        `;
    }
    
    // Function to render the work section
    function renderWorkSection() {
        const workSection = document.getElementById('work');
        const workContent = data.work.map(workItem => generateWorkHTML(workItem)).join('');
        workSection.innerHTML = `
            <h2 class="section-title mb-5">Featured Work</h2>
            <div class="row">${workContent}</div>
        `;
    }
    
    // Call the function to render the work section
    renderWorkSection();
})();


