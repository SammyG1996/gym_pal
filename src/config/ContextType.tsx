export type ContextType = {
    isLoggedIn : boolean; 
    updatedIsLoggedIn : () => void;
    token: null | string;
    updateToken : (val:string | null) => void;
    username: string | null;
    updateUsername : (val:string | null) => void;
    alert: string | null;
    updateAlert : (val:string | null) => void;
    formattedDate: string;
    user: Record<string, any> | null;
    updateUser : (val:object | null) => void;
  };

