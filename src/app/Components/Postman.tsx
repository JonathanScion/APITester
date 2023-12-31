"use client";

import { useState , useEffect} from "react";
import { Provider } from 'react-redux';

import HttpParamsList from "./HTTPParamsList";
import HTTPSend from "./HTTPSend";
import store from '../redux/store/index'


//const httpParams: any[] = [];

export default function Postman() {
  const [httpParams, setHttpParam] = useState([]);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  //postgres://JonathanScion:BKuNqkY9ESU2@ep-sweet-recipe-31367253.us-east-2.aws.neon.tech/neondb

  const addHttpParamAddHandler = (event: any) => {
    setHttpParam([...httpParams]);
  };

  return (
    <div>
      <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
      <div className="p-4">
        <form data-form>
          <div className="input-group mb-4">
          <Provider store={store}>
              <HTTPSend />
          </Provider>
          </div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="query-params-tab"
                data-bs-toggle="tab"
                data-bs-target="#query-params"
                type="button"
                role="tab"
                aria-controls="query-params"
                aria-selected="true"
              >
                Query Params
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="request-headers-tab"
                data-bs-toggle="tab"
                data-bs-target="#request-headers"
                type="button"
                role="tab"
                aria-controls="request-headers"
                aria-selected="false"
              >
                Headers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="json-tab"
                data-bs-toggle="tab"
                data-bs-target="#json"
                type="button"
                role="tab"
                aria-controls="json"
                aria-selected="false"
              >
                JSON
              </button>
            </li>
          </ul>

          <div className="tab-content p-3 border-top-0 border">
            <div
              className="tab-pane fade show active"
              id="query-params"
              role="tabpanel"
              aria-labelledby="query-params-tab"
            >
              <div data-query-params></div>
              <button
                data-add-query-params-btn
                className="mt-2 btn btn-outline-success"
                type="button"
                onClick={addHttpParamAddHandler}
              >
                Add
              </button>
            </div>
            <div
              className="tab-pane fade "
              id="request-headers"
              role="tabpanel"
              aria-labelledby="request-headers-tab"
            >
              <div data-request-header></div>
              <button
                data-add-request-header-btn
                className="mt-2 btn btn-outline-success"
                type="button"
              >
                Add2
              </button>
            </div>
            <div
              className="tab-pane fade "
              id="json"
              role="tabpanel"
              aria-labelledby="request-headers-tab"
            >
              <div
                data-json-request-body
                className="overflow-auto"
                style={{maxHeight: 200}}
              ></div>
            </div>
          </div>
        </form>
      </div>

      <div data-key-value-template>
        <div className="input-group mb-2" data-key-value-pair>
          <div>
            <HttpParamsList HTTPParams={[...httpParams]} />
          </div>
        </div>
      </div>      
    </div>
  );
}
