function displaycrops(){
  document.getElementById('crops').style.display = "block";

  var cropno = document.getElementById('country').options.selectedIndex;
  var crop;
  if(cropno == 0){
    crop = "wheat";
  }
  else if (cropno == 1) {
    crop = "rice"
  }
  else if (cropno == 2) {
    crop = "maize"
  }
  else if (cropno == 3) {
    crop = "pulses"
  }
  console.log(crop);
  console.log(cropno);
  

}
function displaystates(){
document.getElementById('states').style.display = "block";
}
