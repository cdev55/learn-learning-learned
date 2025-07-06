
import { fetchServerAction } from "@/actions";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect} from "next/navigation";

export default async function Home() {
  const user=await fetchServerAction();
  // if(!user.success){
  //   redirect("/sign-in")
  // }
  console.log(user);
  return (
    <div>
      <h1>Authentication</h1>
      <h2>{user?.data?.userName}</h2>
      <h2>{user?.data?.email}</h2>
      <Logout/>
    </div>
  );
}
