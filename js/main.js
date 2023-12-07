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

    let versionImg = 'desktop'

    if (window.innerWidth < 769) {

        versionImg = 'mobile'

    }

    $(tagSlide).addClass('animation_switch_img');

    setTimeout(() => {

        tagSlide.css({ 'background-image': `url(./images/${versionImg}-image-hero-${imgNow + 1}.jpg)` })

        switchtext(imgNow);

    }, 290)

    setTimeout(() => { $(tagSlide).removeClass('animation_switch_img') }, 601)

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

$('#menu').click(() => {

    if (document.querySelector('.active')) {

        $('.navbar_container').animate({height: '0px'}, 'slow')

        setTimeout(()=>{

            $('.navbar_container').removeClass('active');
    
            $('#menu').attr('src', './images/icon-hamburger.svg');
    
            $('.head').removeClass('block')

        }, 500)

    }
    else {

        $('.navbar_container').css({height: '150px'})

        $('.navbar_container').addClass('active');

        $('#menu').attr('src', './images/icon-close.svg');

        $('.head').addClass('block');

    }
})

