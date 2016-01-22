# Nativescript ListView header plugin.

A plugin for adding headerView i.e. [tableHeaderView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITableView_Class/#//apple_ref/occ/instp/UITableView/tableHeaderView) to ListView for iOS.
 
## Installation

```
tns plugin add nativescript-listview-header
```
### Examples

Include the plugin in your xml 
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" 
        loaded="pageLoaded" 
        xmlns:tools="nativescript-listview-header">
    <tools:ListViewWithHeader items="{{items}}" loaded="onListViewLoaded" rowHeight="44">
    </tools:ListViewWithHeader>
</Page>
```

Set your header view in code behind 
```javascript
var searchBarModule = require("ui/search-bar");
exports.onListViewLoaded = function(args) {
    var listView = args.object;
    listView.tableHeaderView = new searchBarModule.SearchBar();
}
```

### Screen shot

<img src="https://raw.githubusercontent.com/rajivnarayana/nativescript-listview-header/master/ScreenShot.png" width="320" />