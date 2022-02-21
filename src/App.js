import React from 'react';
import './App.css';
import ChannelHandlers from './ChannelHandlers';

import {   
  SendBirdProvider,
  ChannelList,
  Channel,
} from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

function App() {

  const [currentChannelUrl, setCurrentChannelUrl] = React.useState(null);

  return (
    <div className="App">
      <SendBirdProvider appId={process.env.APP_ID} userId={"1"} > 
        <ChannelHandlers/>
        <div className="chat-box">
          <div className="channel-list">
            <ChannelList
              onChannelSelect={(channel) => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
          </div>
          <div className="channel">
            <Channel channelUrl={currentChannelUrl} />
          </div>
        </div>
      </SendBirdProvider>
    </div>
  );
}

export default App;
