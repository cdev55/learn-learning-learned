"use client"
import { loginServerAction } from "@/actions";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialLoginFormData, userLoginFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const router=useRouter();
  const checkDisabledValid=()=>{
    return Object.keys(loginFormData).every(key=>loginFormData[key].trim()!=="");
  }
  const handleSubmit=async()=>{
    const result=await loginServerAction(loginFormData);
    console.log({result})
    if(result.success){
        router.push("/");
    }
  }
  return (
    <div>
      <h1>LogIn</h1>
      <form action={handleSubmit}>
        {userLoginFormControls.map((controlItem) => {
          return (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={loginFormData[controlItem.name]}
                onchange={(event) => {
                  setLoginFormData({
                    ...loginFormData,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
            </div>
          );
        })}
        <Button disabled={!checkDisabledValid()} className="disabled:opacity-55" type="submit">Login</Button>
      </form>
    </div>
  );
}
