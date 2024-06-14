import React, { ReactNode } from 'react';


// Define the type for the context value
export  interface MyContextType {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    title:string;
    id:number | null;
    jd:number | string | boolean ;
    apidata:Apidata[];
  }
  
  // Create a Provider Component
export interface MyProviderProps {
    children: ReactNode;
  }
  
   interface Apidata {
    userId:number;
    id:number;
    title:string;
    completed:boolean;
  }