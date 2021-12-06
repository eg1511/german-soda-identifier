



$(".nav-button").click(function(evt){

    let itemID = evt.target.id;
    $(".content").hide();
    let contentID ="content-" + itemID;
    $("#"+ contentID).show();
});