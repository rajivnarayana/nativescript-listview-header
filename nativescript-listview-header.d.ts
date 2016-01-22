declare module "nativescript-listview-header" {
    
    import { ListView } from "ui/list-view";
    import { Property } from "ui/core/dependency-observable";
    import { View } from "ui/core/view";
    
    export class ListViewWithHeader extends ListView {
        public static showDisclousureIndictorProperty : Property;
        public tableHeaderView : View;
        public showDisclosureIndicator : boolean;
    }
}