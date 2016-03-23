/**
 * Controller : all functions controlling the search, querys and main search controls
 * @author MProulx
 */

var _keywords = "";
var _TOKEN = "6318103b-f9da-437c-854b-9e6f1f44e27b";
var _URL = "https://cloudplatform.coveo.com/rest/search";

/* ********************* IMPORTANT NOTE *****************************
 * There seems to be a problem when trying to access the 1000th item 
 * in the listView with pager.
 * It then shows no result and I didn't find the problem's cause.
 * ******************************************************************
 */

// Initialize the events
function initEvents() {
	// Launch search on the click on the search button
	$("#search").click(function(){
    	refreshResults();
    });
    
    // Listen to the checkbox state change to launch search everytime
    $("input[type='checkbox']").change(function () {
    	refreshResults();
    });
    
    // Launch the search when hitting Enter in the keywords field
    $("#keywords").keydown(function(event) {
    	if ( event.which == 13 ) {
    		refreshResults();
    	}
    });
}

// Called to refresh the results in the list view, from view.js or initTest
function refreshResults() {
	if (_dataSource) {
		_pager.page(0);
		_dataSource.fetch(function(){
		   // if callback is needed, place it here
		});
	}	
}

// Called from view.js to get current query parameters to the dataSource
function getQueryParams() {
	var query = getKeywords();
	
	return query;
}

// Get current keywords
function getKeywords() {
	var keywords = $("#keywords").val();
	
	return keywords;
}


// Called from view.js to get current advanced query parameters to the dataSource
function getAdvancedQueryParams() {
	var query = "";
	query = getPrice() + " " + getCategories();
	
	return query;
}

// Returns the 2 price range values
function getPrice() {
	if (_slider) {
		return "(@tpprixnum==" + _slider.values()[0] + ".." + _slider.values()[1] + ")";
	}
	else
		return "";
}

// Returns all the categories advanced query
function getCategories() {
	var categories = getCatDisponibility() + " " + getCatCategory() + " " + getCatCountries();
	
	return categories;
}

// Returns the disponibility checked categories
function getCatDisponibility() {
	var categories = "";
	var listValues = getCategoryValues(["catDispoSuccursale", "catDispoEnLigne"]);
	if (listValues != "")
		categories = "(@tpdisponibilite==(" + listValues + "))";
	
	return categories;
}

// Returns the main checked categories
function getCatCategory() {
	var categories = "";
	var listValues = getCategoryValues(["catVinRouge", "catVinBlanc", "catVinGrappa", "catVinMousseuxRose", "catVinPineau", "catVinAromatise"]);
	if (listValues != "")
		categories = "(@tpcategorie==(" + listValues + "))";
	
	return categories;
}

// Returns the checked countries
function getCatCountries() {
	var categories = "";
	var listValues = getCategoryValues(["catPaysFrance", "catPaysItalie", "catPaysCanada", "catPaysUSA", "catPaysEspagne"]);
	if (listValues != "")
		categories = "(@tppays==(" + listValues + "))";
	
	return categories;
}

// Returns a string containing all checked category values, separated by , OR empty string 
function getCategoryValues(listCategories) {
	var values = "";
	
	var isChecked = false;
	var categories = [];
	
	for (var i = 0; i < listCategories.length; i++) {
		if ($("#" + listCategories[i]).is(":checked")) {
			isChecked = true;
			categories.push("\"" + $("#" + listCategories[i]).val() + "\"");
		}
	}
	
	if (isChecked) {
		values = categories.toString();
	}
	
	return values;
}
