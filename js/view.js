/**
 * @author MProulx
 */

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

function showResults(products) {
	var dataSource = new kendo.data.DataSource({
        data: products.results,
        pageSize: 21
    });

    $("#pager").kendoPager({
        dataSource: dataSource
    });

    $("#kendoListview").kendoListView({
        dataSource: dataSource,
        template: kendo.template($("#template").html())
    });
	
}
