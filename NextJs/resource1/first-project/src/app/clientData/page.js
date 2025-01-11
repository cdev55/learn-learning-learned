"use client";

import Link from "next/link";
import { useEffect, useState } from "react";



const clientDataFetching = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users/`;
      const resp = await fetch(url);
      const userData = await resp.json();
      console.log(6767,userData)
      setData(userData);
      // return resp.json();
    } catch (error) {
      console.log("Error::",error)
    }
  };
  useEffect(() => {
    fetchData();
    
  },[]);

  return (
    <div>
        <h2>ghjghj</h2>
      {data?.map((user) => {
        return (
          <div className="mt-5" key={user.id}>
            <Link href={`/clientData/${user.id}`}>
            <h2>{user.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default clientDataFetching;
