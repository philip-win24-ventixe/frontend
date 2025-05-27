import React, { createContext, useContext, useState } from 'react'
// Tog hjälp av chatGPT för att skapa denna så att jag kan sätta ut tilar till de olika sidorna så att de kan visas rätt i headern
const TitleContext = createContext()

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Ventixe Events')
    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    )
}


export const useTitle = () => useContext(TitleContext)