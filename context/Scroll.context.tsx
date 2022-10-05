import { createContext, useEffect, useState } from 'react';

export const ScrollContext = createContext({
    scrollHeight: 0
});

export function ScrollProvider({children}){

    const [scrollHeight, setScrollHeight] = useState(0)

    useEffect(()=>{
        window.addEventListener('scroll',(event)=>{
          setScrollHeight(window.scrollY)
        })
      },[setScrollHeight])

return(
    <ScrollContext.Provider value={{scrollHeight}}>
    {children}
</ScrollContext.Provider>
)
}
