// "use client";
// import React from "react";
// import { SessionProvider } from "next-auth/react";

// export default function Page({
//   children, // will be a page or nested layout
// }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

// // // export default page;

"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

interface PageProps {
  children: React.ReactNode;
}

export default function Page({ children }: PageProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
