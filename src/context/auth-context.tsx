import React, { ReactNode, useState } from "react";
import * as auth from "../auth-provider";
import { http } from "../types/http";
import { User } from "../types/user";
import { useMount } from "../utils";

interface AuthForm {
  username: string;
  password: string;
}

const bootstrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }
  return user;
};

const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () =>
    auth.logout().then(() => {
      setUser(null);
      //queryClient.clear();
    });
    
    useMount( () => {
      bootstrapUser().then(setUser)
    });

  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
}

//const queryClient = useQueryClient();


//   useMount(
//     useCallback(() => {
//       run(bootstrapUser());
//     }, [])
//   );

//   if (isIdle || isLoading) {
//     return <FullPageLoading />;
//   }

//   if (isError) {
//     return <FullPageErrorFallback error={error} />;
//   }


export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth 必须在 AuthProvider中使用");
  }
  return context;
};