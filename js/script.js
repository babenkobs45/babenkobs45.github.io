$(".menu-gamburger").click(function(){
	$("header nav").addClass("show");
});

$("header .close").click(function(){
	$(this).parent().removeClass("show");
});

$(".decor").click(function(){
	$('.modal').addClass('show');
	$('.modal .item').append( $(this).parent().html() );
});

$(".modal .close").click(function () {
	$(".modal .item *:not(.close)").remove();
	$(".modal").removeClass("show video");
});

function youtube_id(url){
    if( url.includes("youtu.be") ){
        var position = url.indexOf('youtu.be/') + 9;
        var id = url.slice(position, position + 11);

    } else {
        var position = url.indexOf('v=') + 2;
		var id = url.slice(position, position + 11);
    }

    return id
}

$('.play-button').click(function(e){
	e.preventDefault();
	var id = youtube_id( $(this).attr('href'));
	var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

	$('.modal').addClass('show video');
	$('.modal .item').append(iframe);

})