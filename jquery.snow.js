(function($){
	var intervalOfTheSnow;
	$.fn.snow = function(options){
	
			var $flake 			= $('<div class="flake" />').css({'position': 'absolute', 'top': '-50px'}),
				documentHeight 	= $(document).height(),
				documentWidth	= $(document).width(),
				defaults		= {
									flakeChar	: "&#10052;", 
									minSize		: 10,
									maxSize		: 20,
									newOn		: 500,
									flakeColor	: ["#ffffff"],
									durationMillis: null
								},
				options			= $.extend({}, defaults, options);
			
			$flake.html(options.flakeChar);

			intervalOfTheSnow		= setInterval( function(){
				var startPositionLeft 	= Math.random() * documentWidth - 100,
				 	startOpacity		= 0.5 + Math.random(),
					sizeFlake			= options.minSize + Math.random() * options.maxSize,
					endPositionTop		= documentHeight - defaults.maxSize - 200,
					endPositionLeft		= (startPositionLeft - 100 + Math.random() * 200) - 30,
					durationFall		= documentHeight * 10 + Math.random() * 5000;
				$flake
					.clone()
					.appendTo('body')
					.css(
						{
							left: startPositionLeft,
							opacity: startOpacity,
							'font-size': sizeFlake,
							color: options.flakeColor
						}
					)
					.animate(
						{
							top: endPositionTop,
							left: endPositionLeft,
							opacity: 0.2
						},
						durationFall,
						'linear',
						function() {
							$(this).remove()
						}
					);
			}, options.newOn);

			if (options.durationMillis) {
				setTimeout(function() {
					clearInterval(intervalOfTheSnow);
				}, options.durationMillis);
			}	
	};
	
})(jQuery);
