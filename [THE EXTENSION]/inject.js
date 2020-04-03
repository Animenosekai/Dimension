// author: Anime no Sekai, 2020
inject(inject);
dimension_closebtn()

function inject(){
    var adding_fontawesome_stylesheet = document.createElement('link');
    adding_fontawesome_stylesheet.rel = 'stylesheet';
    adding_fontawesome_stylesheet.type = 'text/css';
    adding_fontawesome_stylesheet.media = 'screen';
    adding_fontawesome_stylesheet.href = 'https://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css';
    document.getElementsByTagName('head')[0].appendChild(adding_fontawesome_stylesheet);

    //MAIN DIV
    var dimension = document.createElement('div')
    dimension.setAttribute('id', 'dimension_container')
    
    //CONTENT
    var dimension_content_container = document.createElement('div')
    dimension_content_container.setAttribute('id', 'dimension_modal-content')
    dimension.appendChild(dimension_content_container)

    //BODY
    var dimension_body_container = document.createElement('div')
    dimension_body_container.setAttribute('id', 'dimension_modal-body')
    dimension_content_container.appendChild(dimension_body_container)

    //CLOSE BUTTON
    var dimension_closebtn = document.createElement('span')
    dimension_closebtn.setAttribute('id', 'dimension_closebtn')
    dimension_closebtn.innerHTML = '&times;'
    dimension_body_container.appendChild(dimension_closebtn)

    //TITLE AND DIMENSIONS
    var dimension_heading = document.createElement('h1')
    dimension_heading.setAttribute('id', 'dimensionHeading')
    dimension_heading.innerHTML = 'Dimension'
    dimension_body_container.appendChild(dimension_heading)

    //CONTAINER
    var dimension_dimensionscontainer = document.createElement('div')
    dimension_dimensionscontainer.setAttribute('id', "dimension_dimensionscontainer")
    dimension_body_container.appendChild(dimension_dimensionscontainer)

    //SUBCONTAINER
    var dimension_info_container = document.createElement('div')
    dimension_info_container.setAttribute('id', 'dimension_info')
    dimension_dimensionscontainer.appendChild(dimension_info_container)

    var dimension_dimension_icon_infoSign = document.createElement('i')
    dimension_dimension_icon_infoSign.setAttribute('id', 'dimension_dimension_icon_infoSign')
    dimension_dimension_icon_infoSign.setAttribute('class', 'icon-info-sign')
    dimension_info_container.appendChild(dimension_dimension_icon_infoSign)

    var dimension_dimensions_extraInfos = document.createElement('span')
    dimension_dimensions_extraInfos.setAttribute('id', 'dimension_extra-info')
    dimension_dimensions_extraInfos.innerHTML = "<i id='dimension_italic'>by Anime no Sekai</i>"
    dimension_info_container.appendChild(dimension_dimensions_extraInfos)

    document.body.insertBefore(dimension, document.body.firstChild);
}


function dimension_closebtn(){
    document.getElementById('dimension_closebtn').onclick = function(){
        document.getElementById('dimension_container').remove()
    }
}