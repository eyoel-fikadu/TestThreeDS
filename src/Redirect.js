import React from "react";

export default function Redirect({res}) {

  if (res === null) {
  console.log("In redirect null ", res);

    return <div>Loading</div>;
  }
  else{
  console.log("Url is ", res.data.data.redirect.url);

    return (
      <div>
        <form method='post' action={res.data.data.redirect.url}>
         {res.data.data.redirect.parameters.map(({name,value}) => {
           return <input type="hidden" name={name} value={value} />
         })}
         <button type="submit">GO</button>
       </form>
      </div>
    );
  }
}