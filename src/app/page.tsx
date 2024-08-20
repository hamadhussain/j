// // "use client";
// // import Image from "next/image";
// // import ClientPage from "./Client/page";
// // import { useState } from "react";
// // export default function Home() {
// //   const [color, setColor] = useState();
// //   const handlesu = () => {};
// //   return (
// //     <>
// //       <ClientPage />
// //       {/* <Image src={color} width={100} height={100} alt={""} />
// //       <form action="" onSubmit={handlesu}>
// //         <input
// //           type="file"
// //           name="myImage"
// //           value={(e) => setColor(e.target.value)}
// //           accept="image/*"
// //         />
// //         <button type="submit"></button>
// //       </form> */}
// //     </>
// //   );
// // }

// // // // "use client";
// // // // import Image from "next/image";
// // // // import { useState } from "react";

// // // // export default function Home() {
// // // //   const [imageSrc, setImageSrc] = useState("");

// // // //   const handleFileChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       const reader = new FileReader();
// // // //       reader.onloadend = () => {
// // // //         setImageSrc(reader.result);
// // // //       };
// // // //       reader.readAsDataURL(file);
// // // //     }
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     // You can add form submission logic here
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {imageSrc && (
// // // //         <Image src={imageSrc} width={100} height={100} alt="Uploaded Image" />
// // // //       )}
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input
// // // //           type="file"
// // // //           name="myImage"
// // // //           onChange={handleFileChange}
// // // //           accept="image/*"
// // // //         />
// // // //         <button type="submit">Submit</button>
// // // //       </form>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";
// // // import Image from "next/image";
// // // import { useState } from "react";

// // // export default function Home() {
// // //   const [imageSrc, setImageSrc] = useState("");

// // //   const handleFileChange = (e) => {
// // //     const file = e.target.files[2];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onload = () => {
// // //         setImageSrc(reader.result);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //   };

// // //   return (
// // //     <>
// // //       {imageSrc && (
// // //         <Image src={imageSrc} width={100} height={100} alt="Uploaded Image" />
// // //       )}
// // //       <form onSubmit={handleSubmit}>
// // //         <input
// // //           type="file"
// // //           name="myImage"
// // //           onChange={handleFileChange}
// // //           accept="image/*"
// // //           multiple
// // //         />
// // //         <button type="submit">Submit</button>
// // //       </form>
// // //     </>
// // //   );
// // // }

// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }

"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

// Define a type for the session object
interface MySession extends Session {
  user: {
    email: string;
    // Add other properties if needed
  };
}

export default function Component() {
  // Use the typed session data
  const { data: session } = useSession<MySession>();

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
