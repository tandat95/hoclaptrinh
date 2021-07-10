import React from 'react';
import './App.css';
import '@elastic/eui/dist/eui_theme_light.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import '@elastic/eui/dist/eui_theme_dark.css'; //này là tone tối
import { EuiButton, EuiAvatar, EuiIcon, EuiFlexItem, EuiCard } from '@elastic/eui';
import {Layout} from './Component/Layout';
import {MapPanel} from './Component/Map/Map';
import {Header} from './Component/Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <MapPanel/>
      {/* <EuiButton
        color="success"
        fill // props này là kiểu boolean (true/false) viết vầy có nghĩa là true => viết tắt
      >
        đây là cái nút
      </EuiButton>
      <EuiButton
        color="danger"
        fill={true} //viết chuẩn là vầy
      >
        đây là cái nút
      </EuiButton>
      <EuiAvatar size="s" name="Raphael" />



      <div className = {'card-container'}>
        <EuiFlexItem key={"aklhdfglasgl"}>
          <EuiCard
            icon={<EuiIcon size="s" />}
            title={"Đây là tiêu đề"}
            isDisabled={false}
            description="Example of a card's description. Stick to one or two sentences."
            onClick={() => { alert('card click') }}
          />
        </EuiFlexItem>
      </div> */}

    </div>
  );
}
// cách dùng là vậy đó e

export default App;
