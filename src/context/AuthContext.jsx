import { createContext, useState } from "react";
import users from "../data/users.json";
import { loadFromStorage } from "../utils/storage";
import { generateMockToken } from "../utils/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [refreshToken, setRefreshToken] = useState(() =>
    loadFromStorage("currentUser", null)
  );

  const login = (email, password) => {

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      return {
        success: false,
        message: "Invalid Username or Password"
      };
    }

    const access = generateMockToken(
      {
        id: matchedUser.id,
        email: matchedUser.email,
        role: matchedUser.role,
        type: "access"
      },
      1,
      10
    );

    const refresh = generateMockToken(
      {
        id: matchedUser.id,
        email: matchedUser.email,
        role: matchedUser.role,
        type: "refresh"
      },
      1,
      10
    );

    return {
      success: true,
      access,
      refresh
    };
  };

  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;