import { Input } from "../ui/input";

export default function CommonFormElement({ currentItem, value, onchange }) {
  let element = null;
  switch (currentItem.type) {
    case "input":
      element = (
        <Input
          id={currentItem.name}
          name={currentItem.name}
          type={currentItem.type}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onchange}
        />
      );
      break;

    default:
      element = (
        <Input
          id={currentItem.name}
          name={currentItem.name}
          type={currentItem.type}
          placeholder={currentItem.placeholder}
          value={value}
          onChange={onchange}
        />
      );
      break;
  }
  return element;
}
