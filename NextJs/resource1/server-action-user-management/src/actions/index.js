"use server";

import { connectDB } from "@/app/database";
import User from "@/app/models/user";
import { CloudFog } from "lucide-react";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

//----Add User-----
export async function addNewUserAction(formData, pathToRevalidate) {
  console.log(formData);
  const { email } = formData;
  console.log({ email });
  try {
    connectDB();
    const newlyAddedUser = await User.create(formData);
    if (newlyAddedUser) {
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "New user added successfully",
      };
    } else {
      return {
        success: false,
        message: "Error adding new user",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error adding new user",
    };
  }
}

//------fetch user------

export async function fetchUserAction() {
  try {
    connectDB();
    const listOfUsers = await User.find();
    if (listOfUsers) {
      console.log({ listOfUsers });
      return {
        success: true,
        data: JSON.parse(JSON.stringify(listOfUsers)),
        message: "User fetched successfully",
      };
    } else {
      return {
        success: false,
        message: "Error fetching users",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error fetching users",
    };
  }
}

//------delete user------

export async function deleteUserAction(userId, pathToRevalidate) {
  try {
    connectDB();
    const deleteUser = await User.findByIdAndDelete(userId);
    if (deleteUser) {
      console.log({ deleteUser });
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User deleted successfully",
      };
    } else {
      return {
        success: false,
        message: "Error deleting users",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error deleting users",
    };
  }
}

//------edit user------

export async function editUserAction(userId, formData, pathToRevalidate) {
  try {
    connectDB();
    const updatedUser = {
      firstName: formData.firstName,
      lastName: formData.firstName,
      email: formData.email,
      address: formData.address,
    };
   const editUser = await User.findByIdAndUpdate({ _id: userId }, updatedUser, {
      new: true,
    });
    if (editUser) {
      console.log({ editUser });
      revalidatePath(pathToRevalidate);
      return {
        success: true,
        message: "User updated successfully",
      };
    } else {
      return {
        success: false,
        message: "Error updating users",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error updating users",
    };
  }
}
