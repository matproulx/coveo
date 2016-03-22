/**
 * @author MProulx
 */

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
