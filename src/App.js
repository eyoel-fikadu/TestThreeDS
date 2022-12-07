import React, {useState} from 'react';

import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Redirect from './Redirect';

function App() {

  
  const [redirectUrlNew, setredirectUrlNew] = useState(null);
  const _token =
    "eyJ4NXQiOiJOMkpqTWpOaU0yRXhZalJrTnpaalptWTFZVEF4Tm1GbE5qZzRPV1UxWVdRMll6YzFObVk1TlEiLCJraWQiOiJNREpsTmpJeE4yRTFPR1psT0dWbU1HUXhPVEZsTXpCbU5tRmpaalEwWTJZd09HWTBOMkkwWXpFNFl6WmpOalJoWW1SbU1tUTBPRGRpTkRoak1HRXdNQV9SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzZXBhX3Rlc3QiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6InJKUkJUeEZqTElHbkQ3Wl9sazhuYkNhV25SMGEiLCJuYmYiOjE2NzAzOTEwNDEsImF6cCI6InJKUkJUeEZqTElHbkQ3Wl9sazhuYkNhV25SMGEiLCJzY29wZSI6ImRlZmF1bHQiLCJpc3MiOiJodHRwczpcL1wvdmRjLXdzbzItYXBpbTAxOjk0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2NzA0MDEwNDEsImlhdCI6MTY3MDM5MTA0MSwianRpIjoiYzZmOTI0YmYtODRmNi00NDYxLWFhOGEtNzI3ZDMyNDM1ZmUyIn0.BY8dSVIpFGYsLTgtKL8ZQZDipsu_v_nBn_q-BEmsrm19RYznxmTA_DLQZnJBP84eDsv6JjfUmQb1aMh5E_hp_fas_cQrXGVcvOZZT3EHmz4p7eB9J5aiqvwoqytpMRFY_Aq9NloFbQkkXLFWixMRq5OlCN-MtUYTl5luaKKMXSa1TcGAEY9KfJqNbd54mQ049vSJaAzjuZNUCpN7PEAA7cCKGcn7-I1Bz-guXt_h6TI_PX4ExHSOvm8VOKVp2BB-U50F-gPB3R14P5lfvPng6Zdvw0aqTn92thpnKymKeD36n4hE6BYe1t2r6xsLKJXJFpMgoIDwCO4WrWavulkwsg";
  const authToken = "Bearer " + _token;

  var data = JSON.stringify({
    orderType: "deposit",
    tenantId: "498ab974-aff1-11ec-b909-0242ac120002",
    organizationId: "d9ff4b24-def2-4c49-970d-74d6e7477ba6",
    sourceId: "dd35508b-7529-49b8-ae56-fafd523f953f",
    destinationId: "dd35508b-7529-49b8-ae56-fafd523f953f",
    merchantTransactionId: "",
    amount: 10,
    currency: "EUR",
    paymentBrand: "VISA",
    paymentMode: "CC",
    paymentType: "PA",
    accountId: "",
    terminalId: "",
    type: "3D_SECURE",
    orderDescriptor: "new test order from ipg muse",
    shipping: {
      country: "UK",
      city: "Aston",
      state: "NA",
      postcode: "CH5 3LJ",
      street1: "19 Scrimshire Lane",
    },
    customer: {
      givenName: "sneha",
      surname: "veer",
      birthdate: "19890202",
      phone: "9854789658",
      email: "smarita.pattnaik@gmail.com",
      ip: "192.168.0.1",
      telnocc: "091",
    },
    card: {
      number: "4111111111111111",
      expiryMonth: "12",
      expiryYear: "2030",
      cvv: "123",
    },
    merchantRedirectUrl: "http://localhost:8290/api/ipg/backoffice/redirect",
    notificationUrl:
      "https://webhook.site/a0143eb7-ac45-4fa4-b359-9ac4d7db0dd8",
    recurringType: "INITIAL",
    tmpl_amount: 0,
  });

  var config = {
    method: "post",
    url: "https://gateway.sepa-cyber.com/ipg/1.0.0/payment/pay-3d-secure",
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJ4NXQiOiJOMkpqTWpOaU0yRXhZalJrTnpaalptWTFZVEF4Tm1GbE5qZzRPV1UxWVdRMll6YzFObVk1TlEiLCJraWQiOiJNREpsTmpJeE4yRTFPR1psT0dWbU1HUXhPVEZsTXpCbU5tRmpaalEwWTJZd09HWTBOMkkwWXpFNFl6WmpOalJoWW1SbU1tUTBPRGRpTkRoak1HRXdNQV9SUzI1NiIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzZXBhX3Rlc3QiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6InJKUkJUeEZqTElHbkQ3Wl9sazhuYkNhV25SMGEiLCJuYmYiOjE2NzAzOTEwNDEsImF6cCI6InJKUkJUeEZqTElHbkQ3Wl9sazhuYkNhV25SMGEiLCJzY29wZSI6ImRlZmF1bHQiLCJpc3MiOiJodHRwczpcL1wvdmRjLXdzbzItYXBpbTAxOjk0NDNcL29hdXRoMlwvdG9rZW4iLCJleHAiOjE2NzA0MDEwNDEsImlhdCI6MTY3MDM5MTA0MSwianRpIjoiYzZmOTI0YmYtODRmNi00NDYxLWFhOGEtNzI3ZDMyNDM1ZmUyIn0.BY8dSVIpFGYsLTgtKL8ZQZDipsu_v_nBn_q-BEmsrm19RYznxmTA_DLQZnJBP84eDsv6JjfUmQb1aMh5E_hp_fas_cQrXGVcvOZZT3EHmz4p7eB9J5aiqvwoqytpMRFY_Aq9NloFbQkkXLFWixMRq5OlCN-MtUYTl5luaKKMXSa1TcGAEY9KfJqNbd54mQ049vSJaAzjuZNUCpN7PEAA7cCKGcn7-I1Bz-guXt_h6TI_PX4ExHSOvm8VOKVp2BB-U50F-gPB3R14P5lfvPng6Zdvw0aqTn92thpnKymKeD36n4hE6BYe1t2r6xsLKJXJFpMgoIDwCO4WrWavulkwsg",
      walletId: "df14c60c-6991-47bc-9183-e70bea5b8002",
      TenantId: "498ab974-aff1-11ec-b909-0242ac120002",
      OrganizationId: "094020d0-c527-4775-bb6c-147146938a3e",
    },
    data: data,
  };

  const sendRequest = async () => {
    const json = JSON.stringify({
      order: {
        orderId: "test order",
        orderType: "deposit",
      },
      sourceId: "dd35508b-7529-49b8-ae56-fafd523f953f",
      destinationId: "dd35508b-7529-49b8-ae56-fafd523f953f",
      orderType: "deposit",
      tenantId: "498ab974-aff1-11ec-b909-0242ac120002",
      organizationId: "d9ff4b24-def2-4c49-970d-74d6e7477ba6",
      merchantTransactionId: "",
      amount: 10,
      currency: "EUR",
      paymentBrand: "VISA",
      paymentMode: "CC",
      paymentType: "PA",
      accountId: "",
      terminalId: "",
      type: "3D_SECURE",
      orderDescriptor: "new test order from ipg muse",
      shipping: {
        country: "UK",
        city: "Aston",
        state: "NA",
        postcode: "CH5 3LJ",
        street1: "19 Scrimshire Lane",
      },
      customer: {
        givenName: "sneha",
        surname: "veer",
        birthdate: "19890202",
        phone: "9854789658",
        email: "smarita.pattnaik@gmail.com",
        ip: "192.168.0.1",
        telnocc: "091",
      },
      card: {
        number: "4111111111111111",
        expiryMonth: "12",
        expiryYear: "2030",
        cvv: "123",
      },
      merchantRedirectUrl: "http://localhost:8290/api/ipg/backoffice/redirect",
      notificationUrl:
        "https://webhook.site/a0143eb7-ac45-4fa4-b359-9ac4d7db0dd8",
      recurringType: "INITIAL",
      tmpl_amount: 0,
    });
    var axios = require("axios");
    axios(config)
      .then(function (response) {
        console.log("return value is", response.data);

        const redirect = response.data.value.paymentDetail.data.redirect;
        if (redirect) {
          console.log("reached inside redirect");

          let str = "";
          const param = redirect.parameters.map(({ name, value }) => {
            str = str + name + "=" + value + "&";
          });

          console.log("param", param);

          setredirectUrlNew(response);
          console.log(redirectUrlNew);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    const res = "";
  };
  return (
    <div className="App">
      <button onClick={() => sendRequest()}>Send request</button>
      <Redirect res = {redirectUrlNew} />
    </div>
  );
}

export default App;
