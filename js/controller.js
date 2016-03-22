/**
 * @author MProulx
 */

var _keywords = "";
var _TOKEN = "6318103b-f9da-437c-854b-9e6f1f44e27b";
var _URL = "https://cloudplatform.coveo.com/rest/search?access_token=";

function initTest() {
	$("#Search").click(function(){
    	refreshResults();
    });
}

function refreshResults() {
	if (_dataSource) {
		_dataSource.fetch(function(){
		   // done
		});
	}	
}

function getQueryParams() {
	var query = "";
	//query = "(@tpcepagenomsplitgroup==Merlot)" + "(@tpprixnum==0..270)";
	query = getPrice();
	
	return query;
}

function getPrice() {
	if (_slider) {
		return "(@tpprixnum==" + _slider.values()[0] + ".." + _slider.values()[1] + ")";
	}
	else
		return "";
}

function getKeywords() {
	var keywords = $("#keywords").val();
}

function getCategories() {
	var categories = "";
}
