var searchBarModule = require("ui/search-bar");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = {
        items : ["Item 1", "Item 2", "Item 3"]
    };
}
exports.pageLoaded = pageLoaded;

exports.onListViewLoaded = function(args) {
    var listView = args.object;
    listView.tableHeaderView = new searchBarModule.SearchBar();
    
    setTimeout(function() {
        listView.tableHeaderView = null;
    }, 3000);
}
