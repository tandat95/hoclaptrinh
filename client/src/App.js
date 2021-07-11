import React from 'react';
import './App.scss';
import '@elastic/eui/dist/eui_theme_light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Component/Header/Header';
import {MapPanel} from "./Component/Map/Map";
import {EuiPage, EuiPageBody} from '@elastic/eui';
import {NavDrawer} from "./Component/NavDrawer/NavDrawer";

function App() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
            }}
        >
            <Header/>
            <NavDrawer/>
            <div style={{
                height: '100vh',
            }}>
                <MapPanel/>
            </div>
        </div>
    );
}

export default App;