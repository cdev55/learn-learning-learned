"use client"
import { logoutServerAction } from "@/actions";
import { Button } from "../ui/button";

function Logout() {
    async function handleLogout() {
      await logoutServerAction();
    }
  
    return <Button onClick={handleLogout}>Logout</Button>;
  }
  
  export default Logout;