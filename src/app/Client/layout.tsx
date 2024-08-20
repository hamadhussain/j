export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
 
      {children}
    </section>
  )
}


// import React from 'react'

// const Layout = ({children}) => {
//   return (
//     <div>
//       asasdad
//       {children}
//     </div>
//   )
// }

// export default Layout
