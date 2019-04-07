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


//function displayresult (){
//  if {
//    document.getelementById()
//  }
//}

//data
//var data = [[63, 13, 21, 3][24, 57, 16, 3][31, 12,33, 24][17, 22, 16, 45]];
//var location = ["West Bengal", "Uttar Pradesh", "Karnataka", "Madhya Pradesh"];
//var cropIndex = ["per0", "per1", "per2", "per4"];
//var locationIndex = ["percent0", "percent1", "percent2", "percent3"];

//function cropData(){
//  var ind = document.getElementById('crop').value;
//  var count = 0;
//  var crop = locIndex[count];

//  for each (dataSet in data){
//    var indNow = cropIndex[count];
//    document.getElementById(indNow).innerHTML = dataSet[ind];
//    count += 1;
//  }
//}

//function locData(){
//  var loc = document.getElementById('country').value;
//  for each (percent in data[loc])
//  document.getElementById(locNow).innerHTML = percent;
//}
