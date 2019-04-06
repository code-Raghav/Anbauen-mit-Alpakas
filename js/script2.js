function displaycrops(){
document.getElementById('crops').style.display = "block";
}
function displaystates(){
document.getElementById('states').style.display = "block";
}


$(".btnCrop").click(function() {
    $('html,body').animate({
        scrollTop: $(".crops").offset().top},
        'slow');
});

$(".btnState").click(function() {
    $('html,body').animate({
        scrollTop: $(".states").offset().top},
        'slow');
});
