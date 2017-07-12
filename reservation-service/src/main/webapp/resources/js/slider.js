var interval;
var timeout;
var $preB = $('.prev_inn');
var $nxtB = $('.nxt_inn');

var width = 338;
var animationSpeed = 1000;
var currentSlide = 1;
var automoveAfter = 4000;

var $slider = $('#promotion_slider');
var $slideContainer = $slider.find('ul.visual_img');
var $slides = $slideContainer.find('li.item');

function sliderInit() {
	
	autoMove();
	
	$preB.on('click', preButtonMove);
	$nxtB.on('click', nxtButtonMove);

}

function autoMove(){
	var pause = 2000;
	var direction = "-=";

	interval = setInterval(function() {
		imgMove(direction);
	}, pause);
};

function stopSlider() {
	clearInterval(interval);
};

function preButtonMove() {
	var direction = "+=";
	stopTimeout();
	stopSlider();
	if(currentSlide===1) {
		$slideContainer.css('margin-left', -676);
	}
	imgMove(direction);
	restartAutomove();
	
	console.log('pre버튼');
};

function nxtButtonMove() {
	var direction = "-=";
	stopTimeout();
	stopSlider();
	imgMove(direction);
	restartAutomove();
	
	console.log('nex버튼');
};

function imgMove(direction) {
	
	$slideContainer.animate({'margin-left': direction+width}, animationSpeed, function(){
		currentSlide++;
		if(currentSlide === $slides.length-1) {
			currentSlide = 1;
			$slideContainer.css('margin-left', 0);
		}
	});
};

function stopTimeout(){
	clearTimeout(timeout);
}

function restartAutomove(){
	timeout = setTimeout(function(){ 
		autoMove(); 
	}, automoveAfter);
}














