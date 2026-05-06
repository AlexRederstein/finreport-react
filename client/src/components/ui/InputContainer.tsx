import React from "react"
import "./ui.scss"

interface InputContainerProps {
    children: React.ReactNode
}

const InputContainer = ({children}: InputContainerProps) => {
    return <div className="input-container">{children}</div>    
}

export default InputContainer