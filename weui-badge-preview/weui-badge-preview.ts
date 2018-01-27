import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiBadgeProps {
    text: number | string;
    style: { [key: string]: string };
    focus: boolean;
    children: any[];
}
@Component({
    selector: 'weui-badge-preview',
    templateUrl: './weui-badge-preview.html',
    styleUrls: ['./weui-badge-preview.scss']
})
export class WeuiBadgePreviewComponent extends ReactComponent<WeuiBadgeProps, any> {
    @HostListener('mouseenter', ['$event'])
    mouseover() {
        this.props.focus = true;
    }
    @HostListener('mouseleave', ['$event'])
    mouseleave() {
        this.props.focus = false;
    }
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
