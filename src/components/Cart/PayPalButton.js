import React from "react";
import ButtonContainer from "../Button";
// import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <ButtonContainer>Paypal</ButtonContainer>
      
    );
  }
}
