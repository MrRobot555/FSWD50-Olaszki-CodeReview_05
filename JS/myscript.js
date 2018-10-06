moviebase = objMovies.Movies;

//this function builds up the screen: read the database file and create the HTML code. Executed everytime there is a change.
function refreshdisplay(){

$("#movie_content").empty();

$.each(moviebase, function (i){
	var item = "<div id='"+i+"' class='col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-2 py-2'>"+"<div class='outershell'><div class='movie_cover'><img src='"+moviebase[i].img+"'></div><div class='movie_title'>"+moviebase[i].title+"</div><div class='movie_description'><div class='destext'>"+moviebase[i].description+"</div><div id="+i+" class='likebutton'>Like &#128077 &#160 &#160 <font color='white'>"+moviebase[i].likes+"</font><img src='./img/circle.svg'></div></div></div>";
	$("#movie_content").append(item);

	
//examine if the like count is one digit or two digit
	if (moviebase[i].likes.toString().length > 1) {
//we change the padding-right so that the double digit number gets to the center of the circle
		    $('#' + i + ' .likebutton').css('padding-right', '20px');
	     }
});

addEventHandler();

}

//increase like count in the array (database)
function likeIncrease(a){
	var buttonid = Number(a.id);
	moviebase[buttonid].likes++;
	refreshdisplay();
	
}

//adding event handler to every button
function addEventHandler() {
 $(".likebutton, .sortbutton").click(function(){likeIncrease(this)});
}




refreshdisplay();


//<div id="1" class="movie_cover"><img src=".img/1.jpg"></div><div class="movie_title">The Dark Knight</div><div id="1" class="movie_description">Batman has not been seen for ten years.</div>;

//<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"> Movies </div>