// Get the popup
var modal = document.getElementById("myModal");



// When the webpage is loaded, show the modal
//window.onload = function(){
  //modal.style.display = "block";
//}




//The Core of the Extension
window.addEventListener("resize", dimension_script);
function dimension_script(){
    var dimensionText = document.getElementById('dimension')
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
    
// Get the <span> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on <span> (x), close the modal
//closeBtn.onclick = function() {
  //modal.style.display = "none";
//}
