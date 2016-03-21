/**
 * @author MProulx
 */

function callTest() {
	$.ajax({
		  url: "https://cloudplatform.coveo.com/rest/search?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b&q=@tpcepagenomsplitgroup==Merlot",
		  context: document.body
		}).done(function() {
		  $( this ).addClass( "done" );
		});	
}
