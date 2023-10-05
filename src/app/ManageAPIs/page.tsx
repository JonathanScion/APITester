import { prisma } from "../lib/prisma";

export default async function ListAPIs() {
  //const apis = await prisma.apis.findMany();
  const apis: object[] = await prisma.$queryRaw`SELECT * FROM apis`;

  console.log(typeof apis);
  console.log(apis);
  return ShowAPIsList(apis);
}


async function ShowAPIsList(apis: any[]) {
  //console.log("ShowAPIResults: fetching", props.url);

  return (
    <>
      <div>apparently so-ed</div>
      <table>
        <tbody>
          {apis.map((item: any) => (
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
    console.log('pushing', key, val)
    switch (key) {
        case 'user_id':
            row.push(<td key={key}>{val}</td>);
            break;
        case 'base_url':
            row.push(<td key={key}><a href="ShowAPIResults/{key}/">{val}</a></td>);
            break;
    }
  }

  return row;
}

/*
class UrlSaved {
    user_id: int,
    base_url: string
}*/