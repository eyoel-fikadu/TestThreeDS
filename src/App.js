import React, {useState} from 'react';

import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Redirect from './Redirect';

function App() {

  const [redirectUrlNew, setredirectUrlNew] = useState(null);
  const sendRequest = async () => {
    const json = JSON.stringify(
      {
        "data": {
            "order": {
                "orderId": "test order",
                "orderType": "Test"
            },
            "tenantId": "498ab974-aff1-11ec-b909-0242ac120002",
            "organizationId": "d9ff4b24-def2-4c49-970d-74d6e7477ba6",
            "merchantTransactionId": "1NewUniqueID23-20010-013-55013",
            "amount": 10,
            "currency": "EUR",
            "paymentBrand": "VISA",
            "paymentMode": "CC",
            "paymentType": "PA",
            "accountId": "",
            "terminalId": "",
            "type": "3D_SECURE",
            "orderDescriptor": "new test order from ipg muse",
            "shipping": {
                "country": "UK",
                "city": "Aston",
                "state": "NA",
                "postcode": "CH5 3LJ",
                "street1": "19 Scrimshire Lane"
            },
            "customer": {
                "givenName": "sneha",
                "surname": "veer",
                "birthdate": "19890202",
                "phone": "9854789658",
                "email": "smarita.pattnaik@gmail.com",
                "ip": "192.168.0.1",
                "telnocc": "091"
            },
            "card": {
                "number": "4111111111111111",
                "expiryMonth": "12",
                "expiryYear": "2030",
                "cvv": "123"
            },
            "merchantRedirectUrl": "http://localhost:8290/api/ipg/backoffice/redirect",
            "notificationUrl": "https://webhook.site/a0143eb7-ac45-4fa4-b359-9ac4d7db0dd8",
            "recurringType": "INITIAL",
            "tmpl_amount": 0
        }
    }
  );
    const res = await axios.post('https://ipg-proxy.sepa-cyber.staging/api/v1/payments', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("return value is", res.data);
    
    if(res.data.data.redirect)
    {
      console.log("reached inside redirect");
     // return (
      //   <form action={res.data.redirect.url}>
      //   {res.data.redirect.parameters.map(({name,value}) => {
      //     <input type="hidden" name={name} value={value} />
      //   })}
      // </form>

      //);
      let str = "";
      const param = res.data.data.redirect.parameters.map(({name,value}) => {
            str = str + name + "=" + value + "&"
          });
          // const param = res.data.redirect.parameters.map(({name,value}) => {
          //   return {
          //     name: name,
          //     value: value
          //   }
          // });
          console.log("param", param);

      // const newAxios = await axios.post(res.data.redirect.url,param);

      // console.log("new axios", newAxios);

      setredirectUrlNew(res);
     console.log(redirectUrlNew);
    }
  }
  return (
    <div className="App">
      <button onClick={() => sendRequest()}>Send request</button>
      <Redirect res = {redirectUrlNew} />
    </div>
  );
}

export default App;
