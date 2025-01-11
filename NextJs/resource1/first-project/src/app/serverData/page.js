import Link from "next/link";

const fetchData = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(url);
  return response.json();
  // console.log({data:response.data})/
};
const serverSideDataFetching = async () => {
  const list = await fetchData();
  console.log({ list });
  return (
    <div>
      {list.map((item) => {
        return( 
        <div
        key={item.id}
        className="mt-5 cursor-pointer"
        >
            <Link href={`/serverData/${item.id}`}>
            <h1>{item.name}</h1>
            </Link>
        </div>
        );
      })}
    </div>
  );
};

export default serverSideDataFetching;
