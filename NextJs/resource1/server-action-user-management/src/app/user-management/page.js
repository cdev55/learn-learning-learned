import { fetchUserAction } from "@/actions";
import AddNewUser from "@/components/ui/add-new-user";
import { SingleUser } from "@/components/ui/single-user-card";
import { CloudFog } from "lucide-react";

async function UserManagement() {
  const listOfUsers = await fetchUserAction();
  console.log(listOfUsers);
  return (
    <div className="p-20 max-w-6xl">
      <div className="flex justify-between">
        <h1>User Management</h1>

        <AddNewUser />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-3">
        {listOfUsers && listOfUsers.data && listOfUsers.data.length > 0 ? (
          listOfUsers.data.map((item) => {
            return <SingleUser user={item} />;
          })
        ) : (
          <h2>No User Available, Please add users.</h2>
        )}
      </div>
    </div>
  );
}

export default UserManagement;
