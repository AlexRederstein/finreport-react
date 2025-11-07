import Input from "../ui/Input/Input";
import RowsContainer from "../ui/Form/RowsContainer";
import Row from "../ui/Form/Row";
import Button from "../ui/Button/Button";
import ContentContainer from "../ui/Form/ContentContainer";
import AuthFormContainer from "../ui/Form/AuthFormContainer";

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
    <AuthFormContainer>
      <ContentContainer style={{ textAlign: "center", minWidth: "50%" }}>
        <form action="" onSubmit={submit}>
          <h3>Регистрация</h3>
          <RowsContainer>
            <Row label="Имя">
              <Input type="text" name="name" defaultValue="Кирилл " />
            </Row>
            <Row label="Фамилия">
              <Input type="text" name="lastname" defaultValue="Синицын" />
            </Row>
            <Row label="Отчество">
              <Input type="text" name="surname" defaultValue="Сергеевич" />
            </Row>
            <Row label="Почта">
              <Input
                type="email"
                name="email"
                defaultValue="kirya.sinichin@mail.ru"
              />
            </Row>
            <Row label="Пароль">
              <Input type="text" name="password" defaultValue="12345" />
            </Row>
            <Row label="Повторите пароль">
              <Input type="text" defaultValue="12345" />
            </Row>
          </RowsContainer>
          <Button type="submit">Отправить</Button>
        </form>
      </ContentContainer>
    </AuthFormContainer>
  );
};
