import { useContext, useState } from "react"
import { Context } from "../../context/UserContext";
import InputContainer from "../ui/InputContainer";
import { ControlInput } from "../ui/Input";

const Registration = () => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [birthDate, setBirthDate] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const store = useContext(Context)
    
    return (
        <div>
            <InputContainer>
                <ControlInput type="text" label="Почта" value={email} onChange={setEmail} />
                <ControlInput type="text" label="Имя" value={name} onChange={setName} />
                <ControlInput type="date" label="Дата рождения" value={birthDate} onChange={setBirthDate} />
                <ControlInput type="text" label="Пароль" value={password} onChange={setPassword} />
            </InputContainer>
            <button onClick={() => store.registration(email, name, birthDate, password)}>Регистрация</button>
        </div>
    )
}

export default Registration