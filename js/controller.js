/**
 * @author MProulx
 */

var _keywords = "";
var _TOKEN = "6318103b-f9da-437c-854b-9e6f1f44e27b";
var _URL = "https://cloudplatform.coveo.com/rest/search?access_token=";

function initTest() {
	$("#Search").click(function(){
    	getResults();
    });
}

function getResults() {
	$.get(_URL + _TOKEN + "&numberOfResults=200&q=" + "@tpcepagenomsplitgroup==Merlot", function(data, status){
		showResults(data);
	});
}

function getPrice() {
	
}

function getKeywords() {
	var keywords = $("#keywords").val();
}

function getCategories() {
	var categories = "";
}
