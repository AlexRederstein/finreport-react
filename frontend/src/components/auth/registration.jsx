import Input from "../ui/Input/Input";
import Form from "../ui/Form/Form";
import FormRow from "../ui/Form/FormRow";
import Button from "../ui/Button/Button";

export default () => {
  const submit = async (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("*[name]");
    var data = {};
    inputs.forEach((item) => {
      data[item.name] = item.value;
    });

    try {
      const responce = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await responce.json();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form onSubmit={submit}>
      <h3>Регистрация</h3>
      <FormRow label="Имя">
        <Input type="text" name="name" defaultValue="Кирилл " />
      </FormRow>
      <FormRow label="Фамилия">
        <Input type="text" name="lastname" defaultValue="Синицын" />
      </FormRow>
      <FormRow label="Отчество">
        <Input type="text" name="surname" defaultValue="Сергеевич" />
      </FormRow>
      <FormRow label="Почта">
        <Input
          type="email"
          name="email"
          defaultValue="kirya.sinichin@mail.ru"
        />
      </FormRow>
      <FormRow label="Пароль">
        <Input type="text" name="password" defaultValue="12345" />
      </FormRow>
      <FormRow label="Повторите пароль">
        <Input type="text" defaultValue="12345" />
      </FormRow>
      <Button type="submit">Отправить</Button>
    </Form>
  );
};
