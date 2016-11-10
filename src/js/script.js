'use strict'
$(document).ready(function(){

	$("#slider").slider({
      min: 0,
		  max: 350,
		  value: 115,
		  range: "min",
		  stop: function(event, ui) {
	      $("input#maxCost").val($("#slider").slider("values",0));
		  },
		  slide: function(event, ui){
	      $("input#maxCost").val($("#slider").slider("values",0));
		  }
	});
	$("#slider_cup").slider({
      min: 0,
		  max: 50,
		  value: 5,
		  range: "min",
		  stop: function(event, ui) {
	      $("input#maxCost_cup").val($("#slider_cup").slider("values",0));
		  },
		  slide: function(event, ui){
	      $("input#maxCost_cup").val($("#slider_cup").slider("values",0));
		  }
	});

});