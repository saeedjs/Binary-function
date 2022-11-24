function option(){
	 $("#from").append(`<option value="2">2-Binary</option>`);
	 $("#from").append(`<option value="8">8-Octal</option>`);
	 $("#from").append(`<option value="10">10-Decimal</option>`);
	 $("#from").append(`<option value="16">16-Hex</option>`);
	 $("#to").append(`<option value="2">2-Binary</option>`);
	 $("#to").append(`<option value="8">8-Octal</option>`);
	 $("#to").append(`<option value="10">10-Decimal</option>`);
	 $("#to").append(`<option value="16">16-Hex</option>`);
};
function hexf(t){
	switch (t)
 		{
 			case "a":
 				t = 10;
 			break;
 			case "A":
 				t = 10;
 			break;
 			case "b":
 				t = 11;
 			break;
 			case "B":
 				t = 11;
 			break;
 			case "c":
 				t = 12;
 			break;
 			case "C":
 				t = 12;
 			break;
 			case "d":
 				t = 13;
 			break;
 			case "D":
 				t = 13;
 			break;
 			case "e":
 				t = 14;
 			break;
 			case "E":
 				t = 14;
 			break;
 			case "f":
 				t = 15;
 			break;
 			case "F":
 				t = 15;
 			break;	
 		}
 		return t;
};
function empty(){
	$("#from").empty();
	$("#to").empty();
};
function btod(number){
	var value = $("#value").val();
	var char = [];
 	var i=0,length,length2,sum=0;
 	length = value.length;
 	for (length; length > 0; length--)
 	{
 		char[length-1] = value.charAt(i);
 		i++;
 	}
 	for (i=0; i < value.length; i++)
 	{
 		var t = char[i];
 		t = hexf(t);		
 	  	var a = Math.pow(number,i);
 	  	a *= t;
 		if (t == 0 && i == 0)
 			a = 0;
 	 	sum += a;
 	}
 	$("#answer").val(sum);
 	return sum;
};
function dtob(value){
	//var value = $("#value").val();
	value = parseInt(value);
 	var binary = [];
 	var i=0,answer="";
 	while(value != 0)
 	{
 		var sum = value % 2;
 		binary [i] = sum;
 		value /= 2;
 		value = parseInt(value);
 		i++;
 	}
 	var i2 = i-1;
 	for(var b=0; b < i; b++)
 	{
 		answer += binary[i2].toString();
 		i2--;
 	}
 	$("#answer").val(answer);
};
function dtoo(value){
	var result="";
 	var ar = [];
 	var i=0;
 	for(value; value != 0; i++)
 	{
 		var sum = value % 8;
 		value /= 8;
 		value = parseInt(value);
 		sum = parseInt(sum);
 		ar [i] = sum;
 	}
 	i--;
 	for (i; i > -1; i--)
 	{
 		sum = ar [i];
 		sum = sum.toString();
 		result += sum;
 	}
 	$("#answer").val(result);
 	return result;
};
function dtoh(value){
	var result="";
 	var ar = [];
 	var i=0;
 	for(value; value != 0; i++)
 	{
 		var sum = value % 16;
 		value /= 16;
 		value = parseInt(value);
 		sum = parseInt(sum);
 		//sum = sum.toString();
 		//result += sum;
 		ar [i] = sum;
 	}
 	i--;
 	for (i; i > -1; i--)
 	{
 		sum = ar [i];
 		sum = sum.toString();
 		switch(sum)
 		{
 			case "10":
 				sum = "A";
 			break;	
 			case "11":
 				sum = "B";
 			break;
 			case "12":
 				sum = "C";
 			break;
 			case "13":
 				sum = "D";
 			break;
 			case "14":
 				sum = "E";
 			break;
 			case "15":
 				sum = "F";
 			break;
 		}
 		result += sum;
 	}
 		$("#answer").val(result);
 		return result;
};
function squantity(quantity){
	switch(quantity)
		{
			case '0':
				empty();
				option();
			break;
			case '1':
				empty();
			break;	
			case '2':
				empty();
			break;
			case '3':
				empty();
			break;
			case '4':
				empty();
			break;
			case '5':
				empty();
			break;
			case '6':
				empty();
			break;
			case '7':
				empty();
			break;
			case '8':
				empty();
			break;
			case '9':
				empty();
			break;
		}
};
// function eror(to){
// 	var value = $("#value").val();
// 	value = value.toString();
// 	for (var i=0; i < value.length; i++)
// 	{
// 		if (value.charAt(i) > to)
// 			return 0;
// 		else
// 			return 1;
// 	}
// }
function value(){
	$("#answer").empty();
 	var value = $("#value").val();
 	var from = $("#from").val();
 	var to = $("#to").val();
 	if (from == "2" && to == "2")
 		$("#answer").val(value);
 	if (from == "2" && to == "8")
 	{
 		var decimal = btod(2);
 		var octal = dtoo(decimal);
 		$("#answer").val(octal);
 	}
 	if (from == "2" && to == "10")
 		btod(2);
 	if (from == "2" && to == "16")
 	{
 		var decimal = btod(2);
 		var hex = dtoh(decimal);
 		$("#answer").val(hex);
 	}
 	if (from == "10" && to == "2")
 		dtob(value);
 	if (from == "10" && to == "8")
 		dtoo(value);
 	if (from == "10" && to == "10")
 		$("#answer").val(value);
 	if (from == "10" && to == "16")
 		dtoh(value);
 	if (from == "8" && to == "2")
 	{
 		var octal = btod(8);
 		dtob(octal);
 	}
 	if (from == "8" && to == "8")
 		$("#answer").val(value);
 	if (from == "8" && to == "10")
 		btod(8);
 	if (from == "8" && to == "16")
 	{
 		var hex = btod(8);
 		dtoh(hex);
 	}
 	if (from == "16" && to == "2")
 	{
 		var decimal = btod(16);
 		dtob(decimal);
 	}
 	if (from == "16" && to == "8")
 	{
 		var decimal = btod(16);
 		dtoo(decimal);
 	}
 	if (from == "16" && to == "10")
 		var hex = btod(16);
 	if (from == "16" && to == "16")
 		$("#answer").val(value);
};
$(function () {
	option();
	$("#quantity").click(function(){
		var quantity = $("#quantity").val();
		squantity(quantity);
	});
 	$("#button").click(function (){
 		value();
 	});
 });