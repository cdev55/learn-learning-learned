"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../button";
import { deleteUserAction } from "@/actions";
import { useContext } from "react";
import { UserContext } from "@/context";

export function SingleUser({ user }) {
  const { setOpenPopup, setAddNewUserFormData, setCurrentEditedId } =
    useContext(UserContext);

  const handleDeleteUser = async (userId) => {
    const result = await deleteUserAction(userId, "/user-management");
    console.log(result);
  };
  const handleEditUser = async (user) => {
    setOpenPopup(true);
    setCurrentEditedId(user._id);
    setAddNewUserFormData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      address: user?.address,
    });
  };
  return (
    <div>
      <Card key={user._id}>
        <CardHeader>
          <CardTitle>{user.firstName}</CardTitle>
          <CardDescription>{user.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{user.address}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => handleEditUser(user)}>Edit</Button>
          <Button onClick={() => handleDeleteUser(user._id)}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
