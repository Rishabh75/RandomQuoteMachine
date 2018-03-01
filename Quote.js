$(document).ready(function(){
getQuote();
var quote;
var authors;
var i;
var colors=["AliceBlue","Aquamarine","Aqua","CadetBlue","Coral","Crimson","DarkCyan","DarkOliveGreen","GoldenRod","MediumSeaGreen"];
	function getQuote(){

		var url ="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?" ;
		$.getJSON(url,function(data){
			i= Math.floor(Math.random() * 10); 
			$(".block").css("backgroundColor", colors[i]);
			$(".quotes").html('" '+data.quoteText+'"');
			$(".author").html(' ~ '+data.quoteAuthor);
			quote=data.quoteText;
			authors=data.quoteAuthor;
			
		});
	}

	$(".quoteTweet").on("click",function(){
		window.open("https://twitter.com/intent/tweet?text= " +quote+ " ' ~ "+authors);
	});
	

    $(".quoteButton").on("click",function(){
        getQuote();
    });
});