let picArray = ["styles_v1/assets/handshake_stock.jpg", "styles_v1/assets/laptop_graph_stock.jpg", "styles_v1/assets/paper_graph_stock.jpg"];

function loadPicture(pic) {
    document.getElementById("img-holder").style = "background-image: url('" + picArray[pic] + "');";
    

    for(i = 0; i < picArray.length; i++) {
        if(i = pic) {
            document.getElementsByClassName("dot")[pic].style = "background-color: red;";
            return 0;
        }
        
    }
}

