import React, { useEffect }  from 'react';
import {
  sendBirdSelectors,
  useSendbirdStateContext,
} from "sendbird-uikit";
import SendProfanityNotification from './SendProfanityNotification';

function ChannelHandlers() {

  const context = useSendbirdStateContext();
  const sdkInstance = sendBirdSelectors.getSdk(context);
  
  useEffect(() => {
    if (sdkInstance && sdkInstance.ChannelHandler) {
      const channelHandler = new sdkInstance.ChannelHandler();
      channelHandler.onMessageReceived = (channel, message) => {
        if (message.message.includes("*")) {
          SendProfanityNotification()
        }
      };
      sdkInstance.addChannelHandler('profanity_handler', channelHandler);
    }

    return () => {
      if (sdkInstance && sdkInstance.removeChannelHandler) {
        sdkInstance.removeChannelHandler('profanity_handler');
      }
    };
  }, [sdkInstance]);
  return (
    <div/>
  );
}

export default ChannelHandlers;