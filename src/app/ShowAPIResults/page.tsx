import React from "react";

async function GetAPIData(url: string) {
  console.log("GetAPIData: fetching", url);

  url = "https://jsonplaceholder.typicode.com/todos/"; //testing

  const res = await fetch(url, {
    //{cache: 'no-store'} // may change caching option later... this is just an example
    next: {
      revalidate: 420,
    },
  });

  const data = await res.json();
  return data;
}

export default async function ShowAPIResults(props: any) {
  //console.log("ShowAPIResults: fetching", props.url);
  const data = await GetAPIData(props.url);
  //console.log(data);
  let table = <table/>
  let table1 = React.createElement('table')

  return (
    <>
    <div>apparently so-ed</div>
      <table >
        <tbody>
            {data.map((item: any) => (
              <tr key={item[0]}>              
                {getTableRow(item)}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

function getTableRow(item: any) {
  console.log('getTableRows', item)
  let row = [];
  for (let key in item) {
    const val = item[key].toString();
    row.push(<td key={key}>{val}</td>);
  }
  
  return row;
}

