"use client";

import { useState } from "react";

import HttpParamsList from "./HTTPParamsList";
import HTTPSend from "./HTTPSend";

//const httpParams: any[] = [];

export default function Postman() {
  const [httpParams, setHttpParam] = useState([]);

  const addHttpParamAddHandler = (event) => {
    console.log(
      `addHttpParamAddHandler: httpParams.length=${httpParams.length}`
    );
    setHttpParam([...httpParams]);
  };

  return (
    <div>
      <div className="p-4">
        <form data-form>
          <div className="input-group mb-4">
            <HTTPSend />
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
                styles="max-height: 200px;"
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
