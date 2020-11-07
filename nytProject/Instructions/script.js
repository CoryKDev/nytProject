$("input").on("click", function(){
    var searchEL = $(this).attr("id");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchEL + "&api-key=khDvOG8iazyG2Ykbx5sJ7MD9ZCdPACjY";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    })

})
