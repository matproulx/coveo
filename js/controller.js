/**
 * @author MProulx
 */

function initTest() {
	$("#Search").click(function(){
    	$.get("https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b&q=@tpcepagenomsplitgroup==Merlot", function(data, status){
    		showResults(data);
    	});
    });
}
