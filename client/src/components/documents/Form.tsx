import { documentRegistryService } from "../../services/DocumentRegistryService"

const Form = () => {

    const document = documentRegistryService.get("compensation_of_expenses")
    if(!document) {
        return <div>Ошибка такого заявления не существует!</div>
    }

    console.log(document)
 return(<div>Пук</div>)
}

export default Form