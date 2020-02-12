// Get the popup
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the webpage is loaded, show the modal
window.onload = function(){
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



//The Core of the Extension
window.addEventListener("resize", dimension_script);
var dimensionText = document.getElementById('dimension')
  function dimension_script(){
    var width = window.innerWidth;
    var height = window.innerHeight + 'px';
    var dimension = width + "x" + height;
    
        dimensionText.classList.toggle('active');
        console.log(dimension);
        dimensionText.innerHTML = dimension;
        setTimeout(function(){
          dimensionText.classList.toggle('active');
        }, 500);
}
    
 


