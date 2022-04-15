let picArray = ["styles_v1/assets/handshake_stock.jpg", "styles_v1/assets/laptop_graph_stock.jpg", "styles_v1/assets/paper_graph_stock.jpg"];

function loadPicture(pic) {
    document.getElementById("img-holder").style = "background-image: url('" + picArray[pic] + "');";
}