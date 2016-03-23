/**
 * @author MProulx
 */

var _dataSource = null;
var _pager = null;
var _slider = null;
var _PAGESIZE = 16;

function initPriceSlider() {
	var slider = $("#kendoSliderPrice").kendoRangeSlider({
        change: rangeSliderOnChange,
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

function rangeSliderOnChange(e) {
    refreshResults();
}

function initListView() {
	_dataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: _URL,
                dataType: "json",
                data: {
                    access_token: _TOKEN,
                    q: getQueryParams,
                    aq: getAdvancedQueryParams,
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
