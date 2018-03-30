$(document).ready(function() {

	var entry;
	var operationString = '';
	var output = $("#result");

	output.html(0);

	$(".btn").click(function(){
		entry = ($(this).attr('value'));

		if (entry !== 'ac' && entry !== 'ce' & entry !== '=') {
			if (entry === 'x') {
				entry = '*';
			}
			operationString+= entry;
			console.log(typeof operationString);
			output.html(operationString);			
		}

		if(entry === 'ac') {
			reset();
		}

		if(entry === 'ce') {
			backOne();
		}

		if(entry === '=') {
			equals();
		}

	});

	function equals() {
		try {
			operationString.toString();
			entry = eval(operationString);
			output.html(entry);
			operationString = '';				
		}
		catch (err) {
			output.html('ERROR');
			console.log(err);
			operationString = '';	
		}
	}

	function reset() {
		output.html(0);
		operationString = '';
	}

	function backOne() {
		if (operationString.length <= 1) {
			reset();
		} else {
			operationString = operationString.slice(0, -1);
			output.html(operationString);			
		}
	}
})