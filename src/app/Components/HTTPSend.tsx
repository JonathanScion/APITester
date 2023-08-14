"use client";

import axios from "axios";

import { useState } from "react";

export default function HTTPParamsList(props: any) {
  const [httpMethod, setHTTPMethod] = useState("");
  const [httpURL, setHTTPURL] = useState("");

  const sendHTTP = (event) => {
    event.preventDefault();

    axios({
      url: httpURL,
      method: httpMethod,
      /*params: ,
            headers: ,*/
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <select
        className="form-select flex-grow-0 w-auto"
        aria-label="flex-grow"
        data-method
        onSelect={(event) => setHTTPMethod(event.target.value)}
      >
        <option value="GET" defaultValue={true}>
          GET
        </option>
        <option value="POST">POST</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        data-url
        required
        className="form-control"
        type="url"
        placeholder="https://example.com"
        onChange={(event) => {
          setHTTPURL(event.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary" onClick={sendHTTP}>
        Send
      </button>
    </>
  );
}
