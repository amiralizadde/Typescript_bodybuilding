import React from 'react'

type HTextProps = {
    children:React.ReactNode;
}

const HText = ({children}: HTextProps) => {
  return (
    <h1  className="basis-3/5 text-3xl  font-bold ">
        {children}
    </h1>
  )
}

export default HText;