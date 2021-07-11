import React from 'react';
import {EuiBadge, EuiIcon, EuiAvatar} from '@elastic/eui';
import {
    EuiHeader,
    EuiHeaderSection,
    EuiHeaderSectionItem,
    EuiHeaderSectionItemButton,
    EuiHeaderLogo
} from '@elastic/eui';

const Header = () => {
    const renderMenuTrigger = () => (
        <EuiHeaderSectionItemButton
            aria-label="Open nav"
            onClick={() => {
                //TODO: đóng mở navDrawer, code sau
            }}>
            <EuiIcon type="apps" href="#" size="m"/>
        </EuiHeaderSectionItemButton>
    );
    const renderLogo = () => (
        <EuiHeaderLogo
            iconType="logoKibana"
            href="#/layout/nav-drawer"
            aria-label="Goes to home"
        />
    );
    return (
        <EuiHeader
            position = {'fixed'}
        >
            <EuiHeaderSection grow={false}>
                {/*<EuiHeaderSection sizes={['xs', 's']}>*/}
                {/*    <EuiHeaderSectionItem border="right">*/}
                {/*        {renderMenuTrigger()}*/}
                {/*    </EuiHeaderSectionItem>*/}
                {/*</EuiHeaderSection>*/}
                <EuiHeaderSectionItem border="right">
                    {renderLogo()}
                </EuiHeaderSectionItem>
                {/*<EuiHeaderSectionItem border="right">*/}
                {/*    <EuiHeaderSectionItemButton aria-label="Spaces menu">*/}
                {/*        <EuiAvatar type="space" name="Sales Team" size="s"/>*/}
                {/*    </EuiHeaderSectionItemButton>*/}
                {/*</EuiHeaderSectionItem>*/}
            </EuiHeaderSection>

            {/*{renderBreadcrumbs()}*/}

            <EuiHeaderSection side="right">
                <EuiHeaderSectionItem>
                    <EuiHeaderSectionItemButton aria-label="Account menu">
                        <EuiAvatar name="John Username" size="s"/>
                    </EuiHeaderSectionItemButton>
                </EuiHeaderSectionItem>
            </EuiHeaderSection>
        </EuiHeader>
    );
};
export {Header}