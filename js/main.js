setInterval(() => {

    SlideAuto()

}, 20000)


document.querySelectorAll('.btn_switch').forEach(btn => {

    $(btn).click(() => {

        let slidebtn = btn.children[0].getAttribute('class')

        SlideAuto(slidebtn)

        return
    });
});

function SlideAuto(slidebtn = '') {

    const tagSlide = $('.Container_img_top_left')

    let imgNow = parseInt(tagSlide.css('background-image').split('-')[3][0])


    if (slidebtn === 'btn_prev') {

        imgNow -= 2

    }

    if (imgNow >= 3) {
        imgNow = 0
    }
    else if (imgNow <= 0) {

        imgNow = 2
    }

    tagSlide.animate({ opacity: '0', }, 'slow')

    let versionImg = 'desktop'

    if (window.innerWidth < 769) 
    {

        versionImg = 'mobile'

    }

    setTimeout(() => {

        tagSlide.css({ 'background-image': `url(./images/${versionImg}-image-hero-${imgNow + 1}.jpg)` })

        tagSlide.animate({ opacity: '1' }, 'slow')

        switchtext(imgNow);

    }, 800)

    return
}
function switchtext(imgNow) {

    $('.selected').removeClass('selected');

    if (imgNow === 0) {

        $('.infor_main_one').addClass('selected');

    } else if (imgNow === 1) {

        $('.infor_main_two').addClass('selected');

    } else if (imgNow === 2) {

        $('.infor_main_three').addClass('selected');

    }

    return
}

