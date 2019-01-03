moviebase = objMovies.Movies;

function compare(a, b) {
    if (a.title< b.title)
        return -1;
    if (a.title > b.title)
        return 1;
    return 0;
}


//this function builds up the screen: read the database file and create the HTML code. Executed everytime there is a change.

function refreshdisplay(){

console.log("refreshing screen");

$("#movie_content").empty();

$.each(moviebase, function (i){
	var item = "<div id='"+i+"' class='col-xxl-4 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-2 py-2'>"+"<div class='outershell'><div class='movie_cover'><img src='"+moviebase[i].img+"'></div><div class='movie_title'>"+moviebase[i].title+"</div><div class='movie_description'><div class='destext'>"+moviebase[i].description+"</div></div><div id="+i+" class='likebutton'>Like &#128077</div></div><div class='circleback'>"+moviebase[i].likes+"</div>";
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


//bonus function: bubble sort by like count
function swap(movielikes, firstIndex, secondIndex){
    var temp = movielikes[firstIndex].likes;
    movielikes[firstIndex].likes = movielikes[secondIndex].likes;
    movielikes[secondIndex].likes = temp;
}

function bubbleSort(items){

    var i, j, k = 0

    for (i=0; i < items.length; i++){
        for (j=0, k=items.length-i-1; j < k; j++){
        	console.log(j, j+1, k);
        	console.log(items[j].likes);
        	console.log(items[j+1].likes);
            if (items[j].likes > items[j+1].likes){
                swap(items, j, j+1);
            }
        }
    }

    return items;
}







//adding event handler to every button
function addEventHandler() {
 $(".likebutton").click(function(){likeIncrease(this)});
 $(".sortbutton").click(function(){
    moviebase.sort(compare);
    refreshdisplay();
 });

}




refreshdisplay();


//<div id="1" class="movie_cover"><img src=".img/1.jpg"></div><div class="movie_title">The Dark Knight</div><div id="1" class="movie_description">Batman has not been seen for ten years.</div>;

//<div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"> Movies </div>