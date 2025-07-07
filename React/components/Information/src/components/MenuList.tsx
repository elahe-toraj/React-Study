import { useContext } from "react";
import { ListContext } from "../contexts/ListContext";

export default function MenuList() {
  const list = useContext(ListContext);

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
