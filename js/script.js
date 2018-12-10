/******************************************************************************************************************************
 Waypoints
 *******************************************************************************************************************************/

$(document).ready(function () {

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInDown');
    }, {
        offset: '55%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInDown');
    }, {
        offset: '75%'
    });

});

/******************************************************************************************************************************
 Nav Button
 *******************************************************************************************************************************/

$(window).load(function () {

    $('.nav_slide_button').click(function () {
        $('.pull').slideToggle();
    });

});


$(function () {

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 125
                }, 1000);
                return false;
            }
        }
    });

});

/******************************************************************************************************************************
 Nav Transform
 *******************************************************************************************************************************/

document.querySelector("#nav-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
});

/******************************************************************************************************************************
 Flexsliders
 *******************************************************************************************************************************/

$(window).load(function () {

    $('#blogSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#clientSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#contact-form').validate({
        rules: {
            name: {minlength: 2, required: true},
            email: {required: true, email: true},
            message: {minlength: 2, required: true}
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element
                    .text('OK!').addClass('valid')
                    .closest('.control-group').removeClass('error').addClass('success');
        },
        submitHandler: function (form) {
            // do other stuff for a valid form
            var formData = $('#contact-form').serialize();
            $.post('include/process.php', {formData: formData}, function (data) {
                $('#successMessage').html(data).show();
                setTimeout(function() {
                    $('#successMessage').fadeOut('fast');
                }, 30000); // <-- time in milliseconds
            });
        }
    });

});

