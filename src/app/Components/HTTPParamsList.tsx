"use client";
import dynamic from "next/dynamic";
import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { useState } from "react";

export default function HTTPParamsList(props: any) {
//  const [httpParams, setParameters] = useState(props.HTTPParams);
  const httpParams = props.HTTPParams;

  let itemList: any[] = [];
  if (httpParams && httpParams.keys().length == 0) {
    httpParams.push("someValue");
  }
  
  httpParams.forEach((item: string, index: number) => {
    itemList.push(
      <div>
        <input
          type="text"
          data-key
          className="form-control"
          placeholder="key"
        ></input>
        <input
          type="text"
          data-value
          className="form-control"
          placeholder="value"
        ></input>
        <button
          type="button"
          data-remove-btn
          className="btn btn-outline-danger"
        >
          Remove
        </button>
      </div>
    );
  });

  return itemList;
}

/*
const queryParamsContainer = document.getElementById('[data-query-params]');
const requestHeadersContainer = document.getElementById('[data-request-header]');
const keyValueTemplate = document.querySelector('[data-key-value-template]');

document.querySelector('[data-add-query-param-btn]').addEventListener('click', () => {
    queryParamsContainer.append(createKeyValuePair());
});
queryParamsContainer.append(createKeyValuePair());
requestHeadersContainer.append(createKeyValuePair());



function createKeyValuePair(){
    const element = keyValueTemplate.textContent.cloneNode(true)
    element.querySelector('[data-remove-btn]').addEventListener('click', (e) => {
        e.target.closest('[data-key-value-pair]').remove();
    })

    return element;
}*/
