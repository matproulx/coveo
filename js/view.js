/**
 * @author MProulx
 */

var _dataSource = null;
var _pager = null;
var _PAGESIZE = 20;

function initPriceSlider() {
	var slider = $("#kendoSliderPrice").kendoRangeSlider({
        change: rangeSliderOnChange,
        slide: rangeSliderOnSlide,
        min: 0,
        max: 300,
        smallStep: 10,
        largeStep: 100,
        tickPlacement: "both"
    });
    
    var slider = $("#kendoSliderPrice").getKendoRangeSlider();
    slider.wrapper.css("width", "150px");
    slider.resize();
}

function rangeSliderOnSlide(e) {
    //kendoConsole.log("Slide :: new slide values are: " + e.value.toString().replace(",", " - "));
}

function rangeSliderOnChange(e) {
    //kendoConsole.log("Change :: new values are: " + e.value.toString().replace(",", " - "));
}

function initListView() {
	_dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "https://cloudplatform.coveo.com/rest/search",
                dataType: "json",
                data: {
                    access_token: "6318103b-f9da-437c-854b-9e6f1f44e27b",
                    q: "@tpcepagenomsplitgroup==Merlot",
                    firstResult: getPagingSkipValue,
                    numberOfResults: _PAGESIZE
                }
            }
        },
        schema: {
            data: "results",
            total: "totalCount"
        },
        pageSize: _PAGESIZE,
        serverPaging: true,
        serverSorting: true
    });

    _pager = $("#pager").kendoPager({
        dataSource: _dataSource
    }).getKendoPager();

    $("#kendoListview").kendoListView({
        dataSource: _dataSource,
        template: kendo.template($("#template").html())
    });
	
}

function getPagingSkipValue()
{
	if (_pager)	{
		var currentPage = _pager.page();
		if (currentPage > 0) {
			currentPage = currentPage -1;
		}
		return currentPage * _pager.pageSize();
	}
	else
		return 0;
}

function refreshResults() {
	if (_dataSource) {
		_dataSource.fetch(function(){
		   // done
		});
	}	
}
