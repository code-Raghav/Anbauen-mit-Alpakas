function displaycrops(){
  //cropData();
  document.getElementById('crops').style.display = "block";
}
function displaystates(){
  //locData();
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
//var data = [[63, 13, 21, 3][24, 57, 16, 3][31, 12,33, 24][17, 22, 16, 45]];
//var location = ["West Bengal", "Uttar Pradesh", "Karnataka", "Madhya Pradesh"];
//var cropIndex = ["per0", "per1", "per2", "per4"];
//var locationIndex = ["percent0", "percent1", "percent2", "percent3"];

//function cropData(){
//  var ind = document.getElementById('crop').value;
//  var test = parseInt(ind);
//  var count = 0;
//  var crop = locationIndex[count].ind;

//  for each (dataSet in data){
//    var indNow = cropIndex[count];
//    document.getElementById(indNow).innerHTML = data[count][crop];
//    count += 1;
//  }
//}

//function locData(){
//  var loc = document.getElementById('country').value;
//  var test2 = parseInt(loc);
//  for each (percent in data[test2])
//  document.getElementById(locNow).innerHTML = percent;
//}
