/**
 * @author MProulx
 */

var _dataSource = null;
var _pager = null;
var _slider = null;
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
    
    _slider = $("#kendoSliderPrice").getKendoRangeSlider();
    _slider.wrapper.css("width", "230px");
    _slider.resize();
}

function rangeSliderOnSlide(e) {
    //refreshResults();
}

function rangeSliderOnChange(e) {
    refreshResults();
}

function initListView() {
	_dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "https://cloudplatform.coveo.com/rest/search",
                dataType: "json",
                data: {
                    access_token: "6318103b-f9da-437c-854b-9e6f1f44e27b",
                    q: getQueryParams,
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
