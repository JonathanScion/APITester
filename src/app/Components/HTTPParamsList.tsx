import dynamic from "next/dynamic";
import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { useState } from "react";

export default function HTTPParamsList(props: any) {
  //  const [httpParams, setParameters] = useState(props.HTTPParams);
  const httpParams = [...props.HTTPParams];

  let itemList: any[] = [];
  if (httpParams && httpParams.length == 0) {
    httpParams.push("someValue");
  }
  //console.log("httpParams: ", httpParams);

  return (
    <>
      {/*httpParams.map((item: string) => { return (
        <>
        <div>
          <input
            key={item}
            type="text"
            data-key
            className="form-control"
            placeholder="key"
          ></input>
          <input
            key={item+1}
            type="text"
            data-value
            className="form-control"
            placeholder="value"
          ></input>
          <button
            key={item+2}
            type="button"
            data-remove-btn
            className="btn btn-outline-danger"
          >
            Remove
          </button>
        </div>
        </>)
      })*/}
    </>
  );

  console.log("itemList", itemList);
  return itemList;
}
