export const userRegisterationFormControls = [
  {
    name: "userName",
    label: "First Name",
    placeholder: "Please enter you first name",
    coponentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    coponentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    coponentType: "input",
    type: "password",
  },
];

export const userLoginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Please enter your email",
    coponentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter your password",
    coponentType: "input",
    type: "password",
  },
];

export const initialSignUpFormData = {
  userName: "",
  email: "",
  password: "",
};
export const initialLoginFormData = {
  email: "",
  password: "",
};
