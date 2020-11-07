$("search").on("submit", function(){
    var searchEL = $(this).attr("searchEl");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchEL + "&api-key=khDvOG8iazyG2Ykbx5sJ7MD9ZCdPACjY"

})
