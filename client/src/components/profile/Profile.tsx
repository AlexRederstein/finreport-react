import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser";

const Profile = () => {
  return (
    <div>
      <h1>Данные сотрудника</h1>
      <strong></strong>
      {/* <ProfileRow label="ФИО" text={user.name} /> */}
    </div>
  );
};

// const ProfileRow = ({ label, text }) => {
//   return (
//     <div>
//       <strong>{label}:</strong> {text}
//     </div>
//   );
// };

export default Profile;
