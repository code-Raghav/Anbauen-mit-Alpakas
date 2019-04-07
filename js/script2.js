function displaycrops(){
  document.getElementById('crops').style.display = "block";
  var elmnt = document.getElementById("crops");
  elmnt.scrollIntoView(elmnt);

  var cropno = document.getElementById('country').options.selectedIndex;
  var crop;

  if(cropno == 0)
  {
    crop = "Weizen";

    document.getElementById('p1').innerHTML = "13%";
    document.getElementById('p2').innerHTML = "57%";
    document.getElementById('p3').innerHTML = "12%";
    document.getElementById('p4').innerHTML = "22%";


  }
  else if (cropno == 1) {
    crop = "Reis"
    document.getElementById('p1').innerHTML = "63%%";
    document.getElementById('p2').innerHTML = "24%";
    document.getElementById('p3').innerHTML = "31%";
    document.getElementById('p4').innerHTML = "17%";
  }
  else if (cropno == 2) {
    crop = "Mais"
    document.getElementById('p1').innerHTML = "21%";
    document.getElementById('p2').innerHTML = "16%";
    document.getElementById('p3').innerHTML = "33%";
    document.getElementById('p4').innerHTML = "16%";
  }
  else if (cropno == 3) {
    crop = "Hülsenfrüchte"
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
    var elmnt = document.getElementById("states");
    elmnt.scrollIntoView(elmnt);
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


  
  var slideIndex = 0;
  carousel();

  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }
