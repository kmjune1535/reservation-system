var sliderModule = (function(){
	var interval;
	var timeout;
	var width = 338;
	var animationSpeed = 1000;
	var currentSlide = 1;
	var automoveAfter = 4000;

	var $slider = $('#promotion_slider');
	var $slideContainer = $slider.find('ul.visual_img');
	var $slides = $slideContainer.find('li.item');
	
	var autoMove = function(){
		var direction = "-=";
		var pause = 2000;

		interval = setInterval(function() {
			sliderModule.imgMove(direction);
		}, pause);
	};
	
	var imgMove = function(direction){
		$slideContainer.animate({'margin-left': direction+width}, animationSpeed, function(){
			currentSlide++;
			if(currentSlide === $slides.length-1) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	};
	
	var stopSlider = function(){
		clearInterval(interval);
	};
	
	var preButtonMove = function(){
		var direction = "+=";
		sliderModule.stopTimeout();
		sliderModule.stopSlider();
		if(currentSlide===1) {
			$slideContainer.css('margin-left', -676);
		}
		sliderModule.imgMove(direction);
		sliderModule.restartAutomove();
	};
	
	var nxtButtonMove = function(){
		var direction = "-=";
		sliderModule.stopTimeout();
		sliderModule.stopSlider();
		sliderModule.imgMove(direction);
		sliderModule.restartAutomove();

	};
	
	var stopTimeout = function(){
		clearTimeout(timeout);
	};
	
	var restartAutomove = function(){
		timeout = setTimeout(function(){ 
			sliderModule.autoMove(); 
		}, automoveAfter);
	};
	
	return {
		autoMove : autoMove,
		imgMove : imgMove,
		stopSlider : stopSlider,
		preButtonMove : preButtonMove,
		nxtButtonMove : nxtButtonMove,
		stopTimeout : stopTimeout,
		restartAutomove : restartAutomove
	};
	
})();

sliderModule.autoMove();

$('.prev_inn').on('click', sliderModule.preButtonMove);
$('.nxt_inn').on('click', sliderModule.nxtButtonMove);









