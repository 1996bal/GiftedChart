import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { MyContextType, MyProviderProps, } from './Data'
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';



// Create a Context with an undefined initial value
export const MyContext = createContext<MyContextType | undefined>(undefined);


export const MyProvider = ({ children }: MyProviderProps) => {
  const [value, setValue] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [id, setId] = useState<number | null>(null);
  const [jd, setD] = useState<number | string | boolean>(0);
  const [data, setData] = useState<apidata[]>([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => { setTitle(json[value].title), setId(json[2].userId), setD(json), setData(json) })
    }, []
  )
console.log('j',data[1].id);

  return (

    
      < MyContext.Provider value = {{ value, setValue, title, id, jd, apidata }}>
      { children }
        </MyContext.Provider >
      

  );
};
