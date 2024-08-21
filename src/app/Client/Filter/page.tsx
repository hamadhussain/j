
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { useState } from "react";
// Define a type for the session object
interface MySession extends Session {
  user: {
    email: string;
  };
}

export default async function  Component() {
  // Use the typed session data
  const prisma = new PrismaClient();
  const names = ["James", "John", "Paul", "Ringo", "George"];

  // const { data: session } = useSession < MySession>();
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({ time: new Date().toISOString() }),
  })
 
  const data = await res.json()
 
  // return NextResponse.json(data)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  return (
    <>
      {/* Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button> */}
      {/* <div>
        <input
          className=" border-4 p-4"
          id="textInput"
          type="text"
          value={inputValue} // Controlled input value
          onChange={handleChange} // Event handler for changes
        />
        {names
          .filter((name) => name.toLowerCase().includes(inputValue))
          .map((filteredName) => (
            <li>{filteredName}</li>
          ))}
      </div> */}
      <div>
        <input
          className="border-4 p-4"
          id="textInput"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <ul>
          {names
            .filter((name) =>
              name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((filteredName, index) => (
              <li key={index}>{filteredName}</li>
            ))}
        </ul>
      </div>
    </>
  );
}
