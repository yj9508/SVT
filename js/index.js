window.onload = function() {
    const modal = document.querySelector("#modal");
    const photoCon = document.querySelector(".photo");
    const closeButton = document.querySelector(".close");

    let _img = document.querySelectorAll(".thumbnail > img");
    console.log(_img);

    for(let i = 0; i < _img.length; i++) {
        _img[i].addEventListener('click', e => {
            imgSrc = _img[i].getAttribute('src');
            pTxt = e.currentTarget.nextSibling.nextSibling.nextSibling.nextSibling;
            output = `<img src = "${imgSrc}"><pre>${pTxt.innerText}</pre>`;
            photoCon.innerHTML = output;
            modal.classList.add("show");
        }, false);
    }
    
    closeButton.addEventListener('click', () => {
        modal.classList.remove("show");
    });
};

window.addEventListener('load', function() {
	new Swiper('.swiper-container', {

		slidesPerView : 4,
		spaceBetween : 30,
		slidesPerGroup : 4,
		loopFillGroupWithBlank : true,
	
		loop : true,
	
		pagination : {
			el : '.swiper-pagination',
			clickable : true,
		},
		navigation : {
			nextEl : '.swiper-button-next',
			prevEl : '.swiper-button-prev'
		},
	});
});


