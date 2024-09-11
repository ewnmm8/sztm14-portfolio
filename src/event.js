import $ from 'jquery'
import 'jquery-easing'

$(window).on("scroll", () => {
    if ($(window).scrollTop() === 0) {
        $('#up-button').fadeOut(300, 'linear')
        return
    }
    else {
        $('#up-button').fadeIn(300, 'linear')
        return
    }
})
$('#up-button').on('click', () => {
    $('html, body').animate({scrollTop: 0}, 1000, 'easeOutCirc')
})