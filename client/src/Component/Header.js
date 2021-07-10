import React from 'react';
import { EuiBadge, EuiIcon, EuiAvatar } from '@elastic/eui';
import theme from '@elastic/eui/dist/eui_theme_light.json';
import {
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiHeaderSectionItemButton,
  } from '@elastic/eui';
const Header = () =>{
      return (
        <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo>Elastic</EuiHeaderLogo>,
              <EuiHeaderLinks aria-label="App navigation dark theme example">
                <EuiHeaderLink isActive>Docs</EuiHeaderLink>
                <EuiHeaderLink>Code</EuiHeaderLink>
                <EuiHeaderLink iconType="help"> Help</EuiHeaderLink>
              </EuiHeaderLinks>,
            ],
            borders: 'right',
          },
          {
            items: [
              <EuiBadge
                color={theme.euiColorDarkestShade.rgba}
                iconType="arrowDown"
                iconSide="right">
                Production logs
              </EuiBadge>,
              <EuiHeaderSectionItemButton
                aria-label="2 Notifications"
                notification={'2'}>
                <EuiIcon type="cheer" size="m" />
              </EuiHeaderSectionItemButton>,
              <EuiHeaderSectionItemButton aria-label="Account menu">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
    );
  }
  export {Header}