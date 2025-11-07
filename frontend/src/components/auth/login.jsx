import Input from "../ui/Input/Input";
import RowsContainer from "../ui/Form/RowsContainer";
import Row from "../ui/Form/Row";
import Button from "../ui/Button/Button";
import ContentContainer from "../ui/Form/ContentContainer";
import AuthFormContainer from "../ui/Form/AuthFormContainer";

export default () => {
  return (
    <AuthFormContainer>
      <ContentContainer style={{ textAlign: "center", minWidth: "50%" }}>
        <form action="">
          <h3>Вход в личный кабинет</h3>
          <RowsContainer>
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
          </RowsContainer>
          <Button type="submit">Войти</Button>
        </form>
      </ContentContainer>
    </AuthFormContainer>
  );
};
