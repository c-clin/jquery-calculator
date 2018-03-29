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
		operationString.toString();
		entry = eval(operationString);
		output.html(entry);
		operationString = '';	
	}

	function reset() {
		output.html(0);
		operationString = '';
	}

	function backOne() {
		operationString = operationString.slice(0, -1);
		output.html(operationString);
	}

})