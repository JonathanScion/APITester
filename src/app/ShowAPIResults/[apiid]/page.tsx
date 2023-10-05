import React from "react";
import { Prisma, PrismaClient } from '@prisma/client';
import styles from './styles.module.css'

export const prisma = new PrismaClient();

interface Params {
  params: { apiId: number };
}



export default async function ShowAPIResults({ params }: Params) {
  const data = await GetAPIData(params.apiId);
  console.log(data);
  return (
    <>
      <div>apparently so-ed</div>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            {getTableHeaderRow(data[0])}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr key={item[0]}>{getTableRow(item)}</tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function getTableRow(item: any) {
  let row = [];
  for (let key in item) {
    const val = item[key].toString();
    row.push(<td key={key}>{val}</td>);
  }

  return row;
}
function getTableHeaderRow(item: any) {
  let row = [];
  for (let key in item) {
    const val = item[key].toString();
    row.push(<th key={key}>{key}</th>);
  }

  return row;
}

async function GetAPIData(apiId: number) {
  console.log(`GetAPIData`, apiId);
  const url : string = await GetURLFromApiId(apiId);//"https://jsonplaceholder.typicode.com/todos/";
  console.log(`GetAPIData: from apiid=${apiId} got url=${url}`);

  const res = await fetch(url, {
    //{cache: 'no-store'} // may change caching option later... this is just an example
    next: {
      revalidate: 420,
    },
  });

  const data = await res.json();
  console.log(`GetAPIData: got data`, data);
  return data;
}

async function GetURLFromApiId (apiId: number) : Promise<string> {  
  console.log(`select base_url from apis WHERE api_id=${apiId}`)
  //return 'https://jsonplaceholder.typicode.com/todos/1';
  
  const apis = await prisma.$queryRaw(Prisma.sql`select base_url from apis WHERE api_id=${apiId}`);
  console.log('GetURLFromApiId', apis);
  return 'https://jsonplaceholder.typicode.com/todos';
  
  /*if (apis.length==0)
    {return undefined; }

  return apis[0].base_url;
  */
  
}


