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


//data
var data = [[63, 13, 21, 3][24, 57, 16, 3][31, 12,33, 24][17, 22, 16, 45]];
var location = ["West Bengal", "Uttar Pradesh", "Karnataka", "Madhya Pradesh"];

function cropData(stateId){
  document.getElementById()
}
