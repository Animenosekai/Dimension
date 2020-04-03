// Get the popup
var modal = document.getElementById("dimension_container");
// Get the <span> element that closes the modal
var closeBtn = document.getElementById("dimension_closebtn")

// When the webpage is loaded, show the modal
//window.onload = function(){
  //modal.style.display = "block";
//}

//The Core of the Extension
window.addEventListener("resize", dimension_script);
function dimension_script(){
    var dimensionText = document.getElementById('dimensionHeading')
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
      

      
//When the user clicks on <span> (x), close the modal
function dimension_closebtn(){
  document.getElementById('dimension_container').style.display = 'none';
}