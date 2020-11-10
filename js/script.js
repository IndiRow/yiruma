$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1500,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

let audioNL = document.querySelectorAll('audio');
        let audio = Array.apply(null, audioNL);

        audio.forEach(t => {
            let index = audio.indexOf(t);

            t.addEventListener('play', ()=> {
                audio.forEach(subT => {
                    subT !== audio[index] ?
                    (subT.pause()) :
                    subT.play()
                })
            })
        });