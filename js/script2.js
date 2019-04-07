function displaycrops(){
  document.getElementById('crops').style.display = "block";


  var cropno = document.getElementById('country').options.selectedIndex;
  var crop;

  if(cropno == 0)
  {
    crop = "wheat";

    document.getElementById('p1').innerHTML = "13%";
    document.getElementById('p2').innerHTML = "57%";
    document.getElementById('p3').innerHTML = "12%";
    document.getElementById('p4').innerHTML = "22%";


  }
  else if (cropno == 1) {
    crop = "rice"
    document.getElementById('p1').innerHTML = "63%%";
    document.getElementById('p2').innerHTML = "24%";
    document.getElementById('p3').innerHTML = "31%";
    document.getElementById('p4').innerHTML = "17%";
  }
  else if (cropno == 2) {
    crop = "maize"
    document.getElementById('p1').innerHTML = "21%";
    document.getElementById('p2').innerHTML = "16%";
    document.getElementById('p3').innerHTML = "33%";
    document.getElementById('p4').innerHTML = "16%";
  }
  else if (cropno == 3) {
    crop = "pulses"
    document.getElementById('p1').innerHTML = "3%";
    document.getElementById('p2').innerHTML = "3%";
    document.getElementById('p3').innerHTML = "24%";
    document.getElementById('p4').innerHTML = "45%";
  }

document.getElementById('states').style.display = "none";
}

function displaystates(){
  document.getElementById('states').style.display = "block";


    var stateno = document.getElementById('country1').options.selectedIndex;
    console.log(stateno);

    if(stateno == 0)
    {

      document.getElementById('pp1').innerHTML = "63%";
      document.getElementById('pp2').innerHTML = "24%";
      document.getElementById('pp3').innerHTML = "31%";
      document.getElementById('pp4').innerHTML = "17%";


    }
    else if (stateno == 1) {



      document.getElementById('pp1').innerHTML = "13%";
      document.getElementById('pp2').innerHTML = "57%";
      document.getElementById('pp3').innerHTML = "12%";
      document.getElementById('pp4').innerHTML = "22%";
    }
    else if (stateno == 2) {

      document.getElementById('pp1').innerHTML = "21%";
      document.getElementById('pp2').innerHTML = "16%";
      document.getElementById('pp3').innerHTML = "33%";
      document.getElementById('pp4').innerHTML = "16%";
    }
    else if (stateno == 3) {

      document.getElementById('pp1').innerHTML = "3%";
      document.getElementById('pp2').innerHTML = "3%";
      document.getElementById('pp3').innerHTML = "24%";
      document.getElementById('pp4').innerHTML = "45%";
    }

    document.getElementById('country').style.display == "none"
  }
