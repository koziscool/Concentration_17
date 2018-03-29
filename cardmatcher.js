

matcherController = {
	init: function( size ) {
		
	},		
};

matcherView = {
	updateGameView: function(  ) {
		
	},
};

$(document).ready( function() {
	$("#grid-size").focus();
	$("#grid-size-button").click( function(e){
		e.preventDefault();
		var size = $("#grid-size").val();
		$("#grid-size-form").hide();
		matcherController.init(size);
		matcherView.updateGameView();
	});
});
	