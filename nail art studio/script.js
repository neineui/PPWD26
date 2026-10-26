$(function () {

    $('.menu-toggle').on('click', function () {
        $('.main-nav').stop(true, true).slideToggle(250);
    });

    $('.main-nav a').on('click', function () {
        if ($(window).width() <= 650) {
            $('.main-nav').stop(true, true).slideUp(200);
        }
    });

    $('.tab-panel').hide();

    $('#tab-cute')
        .prop('hidden', false)
        .css('display', 'grid')
        .show();

    $('.tab').on('click', function () {

        const target = $(this).data('target');
        const $target = $(target);

        if (!$target.length) {
            return;
        }

        $('.tab')
            .removeClass('active')
            .attr('aria-selected', 'false');

        $(this)
            .addClass('active')
            .attr('aria-selected', 'true');

        $('.tab-panel')
            .stop(true, true)
            .hide()
            .prop('hidden', true);

        $target
            .prop('hidden', false)
            .css({
                display: 'grid',
                opacity: 0
            })
            .show()
            .animate({
                opacity: 1
            }, 300);
    });

    $('.nail-card')
        .css({
            position: 'relative',
            top: '0px'
        })
        .on('mouseenter', function () {

            $(this)
                .stop(true, true)
                .animate({
                    top: '-6px'
                }, 180);

        })
        .on('mouseleave', function () {

            $(this)
                .stop(true, true)
                .animate({
                    top: '0px'
                }, 180);

        });

    $('.hero-photo')
        .hide()
        .fadeIn(700);

    $('a[href^="#"]').on('click', function (e) {

        const href = $(this).attr('href');
        const $target = $(href);

        if (!$target.length) {
            return;
        }

        e.preventDefault();

        $('html, body')
            .stop(true)
            .animate({
                scrollTop: $target.offset().top - 72
            }, 500);

    });

    $(window).on('scroll', function () {

        if ($(this).scrollTop() > 350) {

            $('#backToTop')
                .stop(true, true)
                .fadeIn(200);

        } else {

            $('#backToTop')
                .stop(true, true)
                .fadeOut(200);

        }

    });

    $('#backToTop').on('click', function () {

        $('html, body')
            .stop(true)
            .animate({
                scrollTop: 0
            }, 550);

    });

    function showToast(message) {

        $('#toast')
            .stop(true, true)
            .text(message)
            .fadeIn(200)
            .delay(2800)
            .fadeOut(350);

    }

    $.validator.addMethod(
        'nomorIndonesia',
        function (value, element) {

            return this.optional(element) ||
                /^(08|62)[0-9]{8,11}$/.test(value);

        },
        'Masukkan nomor HP Indonesia yang valid, misalnya 081234567890.'
    );

    $('#bookingForm').validate({

        rules: {

            nama: {
                required: true,
                minlength: 3
            },

            email: {
                required: true,
                email: true
            },

            telepon: {
                required: true,
                nomorIndonesia: true
            },

            layanan: {
                required: true
            },

            tanggal: {
                required: true,
                date: true
            },

            waktu: {
                required: true
            },

            desain: {
                required: true,
                minlength: 10
            },

            persetujuan: {
                required: true
            }

        },

        messages: {

            nama: {
                required: 'Nama lengkap wajib diisi.',
                minlength: 'Nama minimal 3 karakter.'
            },

            email: {
                required: 'Email wajib diisi.',
                email: 'Masukkan alamat email yang valid.'
            },

            telepon: {
                required: 'Nomor HP wajib diisi.'
            },

            layanan: {
                required: 'Pilih layanan yang kamu inginkan.'
            },

            tanggal: {
                required: 'Pilih tanggal booking.'
            },

            waktu: {
                required: 'Pilih waktu booking.'
            },

            desain: {
                required: 'Ceritakan desain kuku yang kamu inginkan.',
                minlength: 'Deskripsi desain minimal 10 karakter.'
            },

            persetujuan: {
                required: 'Centang persetujuan agar bisa melanjutkan.'
            }

        },

        errorElement: 'label',
        errorClass: 'error',

        errorPlacement: function (error, element) {

            if (element.attr('name') === 'persetujuan') {

                error.insertAfter('.checkbox-label');

            } else {

                error.insertAfter(element);

            }

        },

        highlight: function (element) {

            $(element)
                .addClass('error')
                .removeClass('valid');

        },

        unhighlight: function (element) {

            $(element)
                .removeClass('error')
                .addClass('valid');

        },

        submitHandler: function (form) {

            const nama = $('#nama').val().trim();
            const layanan = $('#layanan').val();
            const tanggal = $('#tanggal').val();
            const waktu = $('#waktu').val();

            const safeNama = $('<div>')
                .text(nama)
                .html();

            const safeLayanan = $('<div>')
                .text(layanan)
                .html();

            $('#bookingSuccess')
                .html(
                    '<strong>Yay, ' + safeNama + '!</strong> ' +
                    'Form booking kamu sudah tervalidasi. ' +
                    'Layanan: ' + safeLayanan +
                    ', tanggal ' + tanggal +
                    ' pukul ' + waktu +
                    '. Ini simulasi praktikum, jadi data belum dikirim ke salon.'
                )
                .stop(true, true)
                .slideDown(300);

            showToast(
                'Form berhasil divalidasi. Thank you, ' + nama + '!'
            );

        }

    });

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    )
        .toISOString()
        .split('T')[0];

    $('#tanggal').attr('min', localDate);

});