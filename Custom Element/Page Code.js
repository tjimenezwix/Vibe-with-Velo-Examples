let clickCount = 0;

$w.onReady(function () {
	$w('#canvas').on('clickedCanvas', () => {
		$w('#clickTextbox').text = `Clicked: ${++clickCount} times`
		if(clickCount === 10){
			$w('#canvas').setAttribute('animation', false);
		}
	});
});