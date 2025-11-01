import { useEffect, useState } from "react";
import client from "../APIs/client";

export default function PersonList() {

  //  State setup using the useState hook
  const [list, setList] = useState([]);

  //  Data fetching using the useEffect hook
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
  }, []);// The empty dependency array [] ensures this runs only once after the initial render

  // --- Rendering Logic ---

  return (
    <ul>
      {list.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}