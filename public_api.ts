import { WeuiBadgePreviewComponent } from './weui-badge-preview/weui-badge-preview';
import { WeuiBadgeSettingComponent } from './weui-badge-setting/weui-badge-setting';

export const both = {
    'weui-badge': {
        setting: WeuiBadgeSettingComponent,
        view: WeuiBadgePreviewComponent
    }
};

export const preview = {
    'weui-badge': WeuiBadgePreviewComponent
};

export const entrys = [
    WeuiBadgeSettingComponent,
    WeuiBadgePreviewComponent
];

export { WeuiBadgeProps } from './weui-badge-preview/weui-badge-preview';
