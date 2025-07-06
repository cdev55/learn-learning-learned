"use client";
import { registerServerAction } from "@/actions";
import CommonFormElement from "@/components/form-element";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { initialSignUpFormData, userRegisterationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const router = useRouter();
  const checkDisabledValid = () => {
    console.log(
      "valid::>>",
      Object.keys(signUpFormData).every(
        (key) => signUpFormData[key].trim() !== ""
      )
    );
    return Object.keys(signUpFormData).every(
      (key) => signUpFormData[key].trim() !== ""
    );
  };

  const handleSubmit = async () => {
    const result = await registerServerAction(signUpFormData);
    console.log("Result::>>", result);
    if (result.data) {
      router.push("/sign-in");
    }
  };
  console.log(signUpFormData);
  return (
    <div>
      <h1>Register</h1>
      <form action={handleSubmit}>
        {userRegisterationFormControls.map((controlItem) => {
          return (
            <div key={controlItem.name}>
              <Label>{controlItem.label}</Label>
              <CommonFormElement
                currentItem={controlItem}
                value={signUpFormData[controlItem.name]}
                onchange={(event) =>
                  setSignUpFormData({
                    ...signUpFormData,
                    [event.target.name]: event.target.value,
                  })
                }
              />
            </div>
          );
        })}
        <Button
          disabled={!checkDisabledValid()}
          className="disabled:opacity-55"
          type="submit"
        >
          SignUp
        </Button>
      </form>
    </div>
  );
}
