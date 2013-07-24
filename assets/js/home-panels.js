// home-toggle panels

$(document).ready(function(){
	$("a.exhibitors").click(function(event) {
		event.preventDefault();
		$("div.hide").toggle();
	});
					
});
