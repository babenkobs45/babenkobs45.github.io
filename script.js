playButton = document.querySelectorAll(".play-button");
for (i = 0; i < playButton.length; i++) {
	playButton[i].onclick = function() {
		document.querySelector(".modale").classList.add("show");
		new YT.Player('video', {
			videoId: this.dataset.videoUrl,
			events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
			}
		});
	}
}

function onPlayerReady(event){
	event.target.playVideo();
};
function onPlayerStateChange(){};

document.querySelector(".modale").onclick = function() {
	this.classList.remove("show");
	var empty_elem = document.createElement('div');
	empty_elem.setAttribute("id", "video");
	this.querySelector("#video").replaceWith(empty_elem);
}


var speakersInfo = document.querySelectorAll(".speakers-block .item .photo");

for (i = 0; i < speakersInfo.length; i++) {
	speakersInfo[i].onclick = function(){
		console.log("plus");
		this.parentNode.parentNode.parentNode.classList.toggle("show");
		document.querySelector(".speakers-block .item.show .closed").onclick = function(){
			document.querySelector(".speakers-block .item.show").classList.toggle("show");
		}
		document.querySelector(".speakers-block .item.show .button").onclick = function(){
			document.querySelector(".speakers-block .item.show").classList.toggle("show");
		}
	}
}

var programs = document.querySelectorAll("#info-block .item");
var programNumber = 0;

for(i=0; i < programs.length; i++) {
	document.querySelector(".why-block .wrapper-circle").appendChild(programs[i].querySelector("img"));
}

setProgramm(programs[0],0);

function setProgramm (program, numberP) {
	console.log(document.querySelector(".why-block .info .sub-title").innerHTML);
	++numberP;
	var pagination = "<span class='sub-title'><span class='t-blue'>" + ((numberP > 9) ? numberP : "0" + numberP) + "</span><sup>/" + ((programs.length > 9) ? programs.length : "0" + programs.length) + "</sup></span>";
	var images = document.querySelectorAll(".why-block .wrapper-circle img");

	document.querySelector(".why-block .info > .sub-title > .wrapper").innerHTML = program.querySelector(".title").innerHTML;
	if (document.querySelector(".why-block .wrapper-circle .show")) {
		document.querySelector(".why-block .wrapper-circle .show").classList.remove("show");
	}

	images[--numberP].classList.add("show");
	
	document.querySelector(".why-block .info .pagination").innerHTML = pagination;

	// for (i=0; i < images.length; i++) {
	// 	images[i].classList.toggle("show");
	// }
}

document.querySelector(".arrow.next").onclick = function(){
	if (programNumber == programs.length - 1) {
		programNumber = 0;
	} else {
		programNumber+=1;
	}
	setProgramm(programs[programNumber], programNumber);
}

document.querySelector(".arrow.prev").onclick = function(){
	if (programNumber == 0) {
		programNumber = programs.length - 1;
	} else {
		programNumber-=1;
	}
	setProgramm(programs[programNumber], programNumber);
}