"use client";

import { useEffect, useState } from "react";



const ClientDetails = ({params}) => {
  const [user, setUser] = useState([]);

  const fetchData = async () => {

    const id= await params.details;
    console.log({id})
    try {
      const url = `https://jsonplaceholder.typicode.com/users/${id}`;
      const resp = await fetch(url);
      const userData = await resp.json();
      console.log(6767,userData)
      setUser(userData);
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
        <h2>Details</h2>
        <div className="mt-5" key={user.id}>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.mobile}</h2>
          </div>
      {/* {data?.map((user) => {
        return (
          <div className="mt-5" key={user.id}>
            <h2>{user.name}</h2>
          </div>
        );
      })} */}
    </div>
  );
};

export default ClientDetails;
