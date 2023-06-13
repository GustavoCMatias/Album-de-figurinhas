import { createContext, useState } from "react";

export const albunsData = createContext(null);

function AlbunsDataContext({ children }) {
    const [myAlbunsInfo, setMyAlbunsInfo] = useState();
  
    return (
      <albunsData.Provider value={{ myAlbunsInfo, setMyAlbunsInfo }}>
        {children}
      </albunsData.Provider>
    );
  }

  export default AlbunsDataContext