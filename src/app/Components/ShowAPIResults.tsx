async function GetAPIData(url: string) {
  console.log("GetAPIData: fetching", url);
  
  url = 'http://localhost:3000/api/apis'; /testing

  const res = await fetch(url, {
    //{cache: 'no-store'} // may change caching option later... this is just an example
    next: {
      revalidate: 420,
    },
  });

  const data = await res.json();
  return data;
}

export default function ShowAPIResults(props: any) {
  const data = GetAPIData(props.url);
  return (
    <>
      <div>{data}</div>
    </>
  );
}
