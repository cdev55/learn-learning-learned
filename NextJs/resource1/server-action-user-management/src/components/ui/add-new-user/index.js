"use client";

import {
  addNewUserFormControls,
  addNewUserFormInitialState,
} from "@/app/utils";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useContext, useState } from "react";
import { Label } from "../label";
import { Input } from "../input";
import { addNewUserAction, editUserAction } from "@/actions";
import { UserContext } from "@/context";

const { Button } = require("../button");

function AddNewUser() {
  const {
    openPopup,
    setOpenPopup,
    addNewUserFormData,
    setAddNewUserFormData,
    currentEditedId,
    setCurrentEditedId,
  } = useContext(UserContext);

  const handleSaveButtonValid = () => {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  };

  const handleAddNewUserAction = async () => {
    const result = (await currentEditedId)
      ? editUserAction(currentEditedId, addNewUserFormData, "/user-management")
      : addNewUserAction(addNewUserFormData, "/user-management");
    console.log({ result });
    setCurrentEditedId(null);
    setAddNewUserFormData(addNewUserFormInitialState);


  };
  return (
    <div>
      <Button onClick={() => setOpenPopup(true)}>Add New User</Button>
      <Dialog
        open={openPopup}
        onOpenChange={() => {
          setAddNewUserFormData(addNewUserFormInitialState);
          setOpenPopup(false);
          setCurrentEditedId(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentEditedId ? "Edit User" : "Add New User"}
            </DialogTitle>
          </DialogHeader>
          <form action={handleAddNewUserAction} className="grid gap-4 py-4">
            <div>
              {addNewUserFormControls.map((controlItem) => (
                <div className="mb-5" key={controlItem.name}>
                  <Label htmlFor={controlItem.name} className="text-right">
                    {controlItem.label}
                  </Label>
                  <Input
                    id={controlItem.name}
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    type={controlItem.type}
                    value={addNewUserFormData[controlItem.name]}
                    onChange={(e) =>
                      setAddNewUserFormData({
                        ...addNewUserFormData,
                        [controlItem.name]: e.target.value,
                      })
                    }
                    className="col-span-3"
                  />
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                onClick={() => setOpenPopup(false)}
              >
                Save
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
