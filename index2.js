var search_term = $("#user_name").val();

var getter = $.ajax({
  url: "https://www.reddit.com/subreddits/search.json?q=" +search_term,
  method: "GET",
  dataType: "json"
});

getter.done(function(response){
  console.log(response["data"]["children"][0]["data"]["display_name"]);
});

getter.fail(function(){
  console.log("those people are mean :(");
})

for (var i = 0; i < array.length; i++) {
  var image = response[0]["image_name"];
  $("#my_table").append("<tr><td><img src='"+image+"'/></td></tr>");
}
