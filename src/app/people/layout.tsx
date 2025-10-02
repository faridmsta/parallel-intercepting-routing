import React from 'react'

const PeopleLayout = ({
  children,
  peopleidmodal
}: Readonly<{
  children: React.ReactNode;
  peopleidmodal: React.ReactNode;
}>) => {
  return (
    <>
      {children}
      {peopleidmodal}
    </>
  )
}

export default PeopleLayout