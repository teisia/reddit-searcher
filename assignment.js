$("#trigger").click(function() {
var search_term = $("#search").val();
var getter = $.ajax({
  url: "https://www.reddit.com/subreddits/search.json?q=" +search_term,
  method: "GET",
  dataType: "json"
})
getter.done(function(response){
  var dataArray = response["data"]["children"];
  for (var i = 0; i < dataArray.length; i++) {
    var user = dataArray[i]["data"]["id"];
    var title = dataArray[i]["data"]["title"];
    var pic = dataArray[i]["data"]["header_img"];
    $("#tabl").append("<tr><td>"+user+"</td><td>"+title+"+</td><td><img src='"+pic+"'></td></tr>");
}
})

getter.fail(function(response){
  console.log("failed ajax call");
});
})
