import React from 'react';
import {MapPanel} from './Map/Map';

import {
    EuiPage,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiPageHeader,
    EuiPageSideBar,
    EuiTitle,
    EuiButton,
    EuiSpacer,
} from '@elastic/eui';

const Layout = () => {  //chỗ này là viết tắt của function. có thể viết lại thành const Layout = function () { ...}

    return (
        <EuiPage>
            <EuiPageSideBar>SideBar nav</EuiPageSideBar>
            <EuiPageBody>
                <EuiPageHeader
                    iconType="logoElastic"
                    pageTitle="Page title"
                    rightSideItems={[
                        <EuiButton fill>Add something</EuiButton>,
                        <EuiButton>Do something</EuiButton>,
                    ]}
                />
                <EuiPageContent>
                    <EuiTitle>
                        <h2>Content title</h2>
                    </EuiTitle>
                    <EuiSpacer />
                    <EuiPageContentBody>
                        <MapPanel/>
                    </EuiPageContentBody>
                </EuiPageContent>
            </EuiPageBody>
        </EuiPage>
    );
}


export { Layout } // a thì thường export kiểu này
// export default nghĩa là nó export k có tên, chỗ nào xài thì lúc import có thể đặt tên lại.