"use server";
import connectToDb from "@/database";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export const registerServerAction = async (formData) => {
  try {
    connectToDb();
    const { userName, email, password } = formData;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return {
        success: false,
        message: "User already exist, Please try some other email Id",
      };
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedpassword = await bcryptjs.hash(password, salt);
    const newlyCreatedUser = User({
      userName,
      email,
      password: hashedpassword,
    });
    const savedUser = await newlyCreatedUser.save();
    if (savedUser) {
      return {
        success: true,
        message: "User created successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to create user",
      };
    }
  } catch (error) {
    console.log("Error while registering user", error);
    return {
      success: false,
      message: "Error while registering user",
    };
  }
};

export const loginServerAction = async (formData) => {
  try {
    connectToDb();
    const { email, password } = formData;
    const user = await User.findOne({ email });
    if (!user) {
      return {
        success: false,
        message: "User Not found with this email",
      };
    }

    const passwordCorrect = await bcryptjs.compare(password, user.password);
    if (!passwordCorrect) {
      return {
        success: false,
        message: "Incorrect password",
      };
    }
    const tokenData = {
      id: user._id,
      email: user.email,
      userName: user.userName,
    };

    const token = jwt.sign(tokenData, "DEFAULT_KEY", { expiresIn: "1d" });
    const cookie = cookies();
    cookie.set("token", token);

    return {
      success: true,
      message: "User logged in successfully",
    };
  } catch (error) {
    console.log("Error while Logging In user", error);
    return {
      success: false,
      message: "Error while Logging In user",
    };
  }
};

export const fetchServerAction = async () => {
  try {
    connectToDb();

    const cookie = await cookies();
    const token = (await cookie?.get("token").value) || "";
    console.log({ token });
    const checkToken = jwt?.verify(token, "DEFAULT_KEY");
    console.log({ checkToken });
    if (checkToken?.id.length) {
      const id = checkToken?.id;
      const user = await User.findById(id);
      console.log({ checkToken, user });
      if (user) {
        return {
          success: true,
          message: "User Logged in",
          data: JSON.parse(JSON.stringify(user)),
        };
      } else {
        return {
          success: false,
          message: "User Not found",
        };
      }
    }
  } catch (error) {
    console.log("Error while Logging In user", error);
    return {
      success: false,
      message: "Error while Logging In user",
    };
  }
};

export const logoutServerAction = async() => {
    const Cookies = cookies();
    Cookies.set("token", "");
};
