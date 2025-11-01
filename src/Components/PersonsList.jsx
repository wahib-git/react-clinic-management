import { useEffect, useState } from "react";
import client from "../api/client";

export default function PersonList() {
  const [list, setList] = useState([]);
  useEffect(() => {

    async function load() {
      try {
        const res = await client.get("/users");
        setList(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    load();
  }, []);

  return (
    <ul>
      {list.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}