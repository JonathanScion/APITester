import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions } from "../redux/store";

import axios from "axios";

export default function HTTPSend(props: any) {
  console.log("HTTPSend...");
  //const [httpMethod, setHTTPMethod] = useState("");
  //const [httpURL, setHTTPURL] = useState("");
  const dispatch = useDispatch();
  const url = useSelector((state: any) => state.api.url);
  console.log("got the url from store", url);

  const urlChangeHandler = (event: any) => {
    const httpURL = event.target.value;
    console.log(`urlChangeHandler: dispatching ${httpURL}`, event);
    dispatch(apiActions.apiReducer({ url: httpURL }));
  };

  const sendHTTP = (event: any) => {
    event.preventDefault();

    axios({
      url: url,
      /*method: httpMethod,
      params: ,
            headers: ,*/
    }).then((response) => {
      console.log(response);
    });
  };

  //onSelect={(event) => setHTTPMethod(event.target.value)}
  return (
    <>
    <div>{url}</div>
      <select
        className="form-select flex-grow-0 w-auto"
        aria-label="flex-grow"
        data-method
        
      >
        <option value="GET">
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
        onChange={urlChangeHandler}
      />      
      <button type="submit" className="btn btn-primary" onClick={sendHTTP}>
        Send
      </button>
    </>
  );
}
