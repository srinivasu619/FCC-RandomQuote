$( document ).ready(function() {
  var num = Math.ceil(Math.random() * (39-1)+1);
  getQuote(num);
  var prevnum=num;
   $("#get-another-quote-button").on('click',function(e){
     e.preventDefault();
     var num = Math.ceil(Math.random() * (39-1)+1);
     do{
       num = Math.ceil(Math.random() * (39-1)+1);
     }while(num === prevnum)
     getQuote(num);
   });
});


function getQuote(num)
{
    $.get("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=",function(data)
                    {
      $("#quote-title").text("By "+data[num].title);
      $("#quote").html(data[num].content);
      var url = "https://twitter.com/intent/tweet?text="+data[num].content.slice(3,-5)+" -By "+data[num].title;
      $("#tweetQuote").attr("href",url);
    });
  //console.log(data);
}