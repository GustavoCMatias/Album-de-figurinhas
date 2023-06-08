import { createContext, useState } from "react";

export const UserData = createContext(null);

function UserContext({ children }) {
    const [userInfo, setUserInfo] = useState();
  
    return (
      <UserData.Provider value={{ userInfo, setUserInfo }}>
        {children}
      </UserData.Provider>
    );
  }

  export default UserContext