// Animated Banner Text
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
  
TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
};
  
window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
}
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};



function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  
}

/*function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  var expandImg1 = document.getElementById("expandedImg1");
  var expandImg2 = document.getElementById("expandedImg2");
  var expandImg3 = document.getElementById("expandedImg3");
  var expandImg4 = document.getElementById("expandedImg4");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  var imgText1 = document.getElementById("imgtext1");
  var imgText2 = document.getElementById("imgtext2");
  var imgText3 = document.getElementById("imgtext3");
  var imgText4 = document.getElementById("imgtext4");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  expandImg1.src = imgs.src;
  expandImg2.src = imgs.src;
  expandImg3.src = imgs.src;
  expandImg4.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  imgText1.innerHTML = imgs.alt;
  imgText2.innerHTML = imgs.alt;
  imgText3.innerHTML = imgs.alt;
  imgText4.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  expandImg1.parentElement.style.display = "block";
  expandImg2.parentElement.style.display = "block";
  expandImg3.parentElement.style.display = "block";
  expandImg4.parentElement.style.display = "block";
  
}*/

function myFunction1(imgs) {
  // Get the expanded image
  var expandImg1 = document.getElementById("expandedImg1");
  // Get the image text
  var imgText1 = document.getElementById("imgtext1");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg1.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText1.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg1.parentElement.style.display = "block";
  
}

function myFunction2(imgs) {
  // Get the expanded image
  var expandImg2 = document.getElementById("expandedImg2");
  // Get the image text
  var imgText2 = document.getElementById("imgtext2");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg2.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText2.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg2.parentElement.style.display = "block";
  
}

function myFunction3(imgs) {
  // Get the expanded image
  var expandImg3 = document.getElementById("expandedImg3");
  // Get the image text
  var imgText3 = document.getElementById("imgtext3");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg3.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText3.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg3.parentElement.style.display = "block";
  
}

function myFunction4(imgs) {
  // Get the expanded image
  var expandImg4 = document.getElementById("expandedImg4");
  // Get the image text
  var imgText4 = document.getElementById("imgtext4");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg4.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText4.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg4.parentElement.style.display = "block";
  
}

/*function myFunction(imgs) {
  for (i = 0; i < 6; i++) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg" + i);
    // Get the image text
    var imgText = document.getElementById("imgtext" + i);
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }
}*/
