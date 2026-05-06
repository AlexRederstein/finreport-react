interface InputProps {
    type: string;
    label: string;
    value?: string;
    onChange?: (value: string) => void
}

interface ControlInputProps {
    type: string;
    label: string;
    value: string;
    onChange: (value: string) => void
}

export const ControlInput = ({type, label, value, onChange}: ControlInputProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <>
            {label && <span>{label}:</span>}
            <input 
                type={type} 
                value={value} 
                onChange={handleChange}
            />
        </>)
}

export const Input = ({label, type} : InputProps) => {
    return (
        <>
            {label && <span>{label}:</span>}
            <input 
                type={type} 
            />
        </>)
}

