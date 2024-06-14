// Data.ts
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  export interface MyContextType {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  }
  
  export interface MyProviderProps {
    children: React.ReactNode;
  }
  