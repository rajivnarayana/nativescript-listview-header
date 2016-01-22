import { ListView, knownTemplates } from "ui/list-view";
import { View } from "ui/core/view";
import { Property as DependencyObservableProperty } from "ui/core/dependency-observable";
import { PropertyMetadata as ProxyPropertyMetaData } from "ui/core/proxy";
import { layout } from "utils/utils";

exports.knownTemplates = knownTemplates;

export class ListViewWithHeader extends ListView {
	
	private _tableHeaderView : View;
	
	public static showDisclousureIndictorProperty = new DependencyObservableProperty("showDisclosureIndicator", "SearchableListView", new ProxyPropertyMetaData(false));
	
	constructor() {
		super();
	}
	
	get tableHeaderView() : View {
		return this._tableHeaderView;
	}
	
	set tableHeaderView(view : View) {
		if ( view) {
			this._addView(view);
			this.ios.tableHeaderView = view.ios;
			view.ios.frame = CGRectMake(0,0,this.ios.bounds.size.width, 1);
		}
		this._tableHeaderView = view;
	}
	
	get showDisclosureIndicator(): boolean {
        return this._getValue(ListViewWithHeader.showDisclousureIndictorProperty);
    }
	
    set showDisclosureIndicator(value: boolean) {
        this._setValue(ListViewWithHeader.showDisclousureIndictorProperty, value);
    }
	
	public _prepareCell(cell: UITableViewCell, indexPath: NSIndexPath): number {
		let retValue : number = super._prepareCell(cell, indexPath);
		cell.accessoryType = UITableViewCellAccessoryDisclosureIndicator;
		return retValue;	
	}
    
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        if (this._tableHeaderView) {
            let childHeightMeasureSpec = layout.makeMeasureSpec(0, layout.UNSPECIFIED);
            let childMeasuredSize = View.measureChild(this, this._tableHeaderView, widthMeasureSpec, childHeightMeasureSpec);
            View.layoutChild(this, this._tableHeaderView, 0, 0, childMeasuredSize.measuredWidth, childMeasuredSize.measuredHeight);
            this._tableHeaderView.ios.frame = CGRectMake(0, 0, this.ios.bounds.size.width, childMeasuredSize.measuredHeight);
        }
    }
}