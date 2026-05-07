import { useContext } from "react";
import { Context } from "../../context/UserContext";

const Profile = () => {

  const store = useContext(Context)

  return (
    <div className="content-container">
      <h1>Данные сотрудника</h1>
      <strong></strong>
      <ProfileRow label="ФИО" text={store.user.name}/>
      <ProfileRow label="Дата рождения" text={store.user.birthDate}/>
      <ProfileRow label="Почта" text={store.user.email}/>
    </div>
  );
};

interface ProfileRowProps {
  label: string,
  text: string
}

const ProfileRow = ({ label, text } :ProfileRowProps) => {
  return (
    <div>
      <strong>{label}:</strong> {text}
    </div>
  );
};

export default Profile;
