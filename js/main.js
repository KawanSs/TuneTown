$(document).ready(function(){
    // Carroussel
    $('.catalog').slick({
        autoplay: true,
        arrows: false
    });

    // Masks
    $('#phone').mask('(00) 00000-0000',{
        placeholder: '(xx) xxxxx-xxxx'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    $('#zip').mask('00000-000', {
        placeholder: '012345-678'
    })
    $('#adress').mask('', {
        placeholder: 'Road, City - State'
    })
    
    //moves
    $('#btnAbout').click(function(){
        $('html').animate({
            scrollTop: $('#about').offset().top
        })
    })
    $('#btnProducts').click(function(){
        $('html').animate({
            scrollTop: $('#products').offset().top
        })
    })
    $('#btnContacts').click(function(){
        $('html').animate({
            scrollTop: $('#contact').offset().top
        })
    })

    $('.addBtn').click(function(){
        const dest = $('#contact');

        const buying = $(this).parent().find('p').text();

        $('#message').val(buying);

        $('html').animate({
            scrollTop: dest.offset().top
        },1000)
    })
})