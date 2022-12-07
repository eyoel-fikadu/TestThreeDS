import React from "react";

export default function Redirect({res}) {

  if (res === null) {
  console.log("In redirect null ", res);

    return <div>Loading</div>;
  }
  else{
    const redirect = res.data.value.paymentDetail.data.redirect;
    console.log("Url is ", redirect.url);

    return (
      <div>
        <form method="post" action={redirect.url}>
          {redirect.parameters.map(({ name, value }) => {
            return <input type="hidden" name={name} value={value} />;
          })}
          <button type="submit">GO</button>
        </form>
      </div>
    );
  }
}