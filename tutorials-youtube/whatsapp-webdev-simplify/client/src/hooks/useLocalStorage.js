
import {useEffect, useState} from 'react'

const PREFIX = "WDSIPMPLIFIED";


export default function useLocalStorage(key, initialValue) {
    
    const prefix_key = PREFIX + key;
    
    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(prefix_key);
         
        if(jsonValue != null) return JSON.parse(jsonValue);
        if(typeof initialValue === 'function')
          return initialValue();
        else
           return initialValue;
    });

    useEffect(() =>{
        localStorage.setItem(prefix_key, JSON.stringify(value));
         
    },[prefix_key, value])

    return [value, setValue]; 
/*
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
      const jsonValue = localStorage.getItem(prefixedKey)
      if (jsonValue != null) return JSON.parse(jsonValue)
      if (typeof initialValue === 'function') {
        return initialValue()
      } else {
        return initialValue
      }
    })
  
    useEffect(() => {
      localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])
  
    return [value, setValue]*/
}






