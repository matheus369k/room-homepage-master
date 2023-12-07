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

    const tagSlide = $('.Container_img_top_left');

    let imgNow = tagSlide.css('background-image').split('-');
    let imgvalue = imgNow[imgNow.length - 1][0]

    if (slidebtn === 'btn_prev') {

        imgvalue -= 1

    } else if (slidebtn === 'btn_next' || slidebtn === '') {

        imgvalue += 1

    }

    if (imgvalue > 3) {

        imgvalue = 1

    } else if (imgvalue < 1) {

        imgvalue = 3
    }

    let versionImg = 'desktop'

    if (window.innerWidth < 769) {

        versionImg = 'mobile'

    }

    $(tagSlide).addClass('animation_switch_img');

    setTimeout(() => {

        tagSlide.css({ 'background-image': `url(./images/${versionImg}-image-hero-${imgvalue}.jpg)`})

        switchtext(imgvalue);

    }, 50)

    setTimeout(() => { $(tagSlide).removeClass('animation_switch_img') }, 600)

    return
}
function switchtext(imgvalue) {

    $('.selected').removeClass('selected');

    if (imgvalue === 1) {

        $('.infor_main_one').addClass('selected');

    } else if (imgvalue === 2) {

        $('.infor_main_two').addClass('selected');

    } else if (imgvalue === 3) {

        $('.infor_main_three').addClass('selected');

    }

    return
}

$('#menu').click(() => {

    if (document.querySelector('.active')) {

        $('.navbar_container').animate({ height: '0px' }, 'slow')

        setTimeout(() => {

            $('.navbar_container').removeClass('active');

            $('#menu').attr('src', './images/icon-hamburger.svg');

            $('.head').removeClass('block')

        }, 500)

    }
    else {

        $('.navbar_container').css({ height: '150px' })

        $('.navbar_container').addClass('active');

        $('#menu').attr('src', './images/icon-close.svg');

        $('.head').addClass('block');

    }
})

