import React from "react";
import { EuiHorizontalRule, EuiImage, EuiNavDrawer, EuiNavDrawerGroup } from '@elastic/eui';

const NavDrawer = () =>
{
    const faveExtraAction = {
        color: 'subdued',
        iconType: 'starEmpty',
        iconSize: 's',
        'aria-label': 'Add to favorites'
    };

    const pinExtraAction = {
        color: 'subdued',
        iconType: 'pin',
        iconSize: 's'
    };

    const pinExtraActionFn = val =>
    {
        pinExtraAction['aria-label'] = `Pin ${val} to top`;
        return pinExtraAction;
    };

    const topLinks = [
        {
            label: 'Tuyến đường',
            iconType: 'package',
            flyoutMenu: {
                title: 'Danh sách tuyến đường',
                listItems: [
                    {
                        label: 'Tuyến đường 1',
                        href: '#/route/list',
                        iconType: 'dashboardApp',
                        extraAction: faveExtraAction
                    }
                ]
            }
        },
        {
            label: 'Biểu đồ',
            iconType: 'filter',
            flyoutMenu: {
                title: 'abc',
                listItems: [
                    {
                        label: 'bca',
                        href: '#/category/list',
                        iconType: 'canvasApp',
                        extraAction: {
                            color: 'subdued',
                            iconType: 'starFilled',
                            iconSize: 's',
                            'aria-label': 'Remove from favorites',
                            alwaysShow: true
                        }
                    }
                ]
            }
        }
    ];

    const settingLink = [
        {
            label: 'Cài đặt',
            iconType: 'managementApp',
            flyoutMenu: {
                title: 'Thiết lập ứng dụng',
                listItems: [
                    {
                        label: 'Chủ đề',
                        href: '#/setting/theme',
                        iconType: 'brush',
                        extraAction: {
                            color: 'subdued',
                            iconType: 'starEmpty',
                            iconSize: 's',
                            'aria-label': 'Add to Tools and Settings to favorites'
                        }
                    },
                ]
            }
        }
    ];
    return (
        <EuiNavDrawer
            isLocked ={true}
        >
            <EuiNavDrawerGroup listItems={topLinks}/>
            <EuiHorizontalRule margin="none"/>
            <EuiNavDrawerGroup listItems={settingLink}/>
        </EuiNavDrawer>
    );
};

export {NavDrawer};