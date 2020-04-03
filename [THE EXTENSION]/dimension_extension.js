//author: Anime no Sekai, 2020

//The Core of the Extension
window.addEventListener("resize", dimension_script);
function dimension_script(){
    var dimensionText = document.getElementById('dimensionHeading')
    var width = window.innerWidth;
    var height = window.innerHeight + 'px';
    var dimension = width + "x" + height;

        dimensionText.classList.toggle('active');
        dimensionText.innerHTML = dimension;
        setTimeout(function(){
          dimensionText.classList.toggle('active');
        }, 500);
      }