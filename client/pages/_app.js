import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import React, {createContext, useState} from 'react'

export const Context = createContext(null)

function GlobalStateProvider({children}) {

    const [eventLocations, setEventLocations] = useState({})
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedCoordinates, setSelectedCoordinates] = useState([null, null])
    const initialState = {
        eventLocations,
        setEventLocations,
        selectedCity,
        setSelectedCity,
        selectedCoordinates,
        setSelectedCoordinates
    }

    return <Context.Provider value={initialState}>{children}</Context.Provider>
}

function MyApp({Component, pageProps}) {

    return (
        <GlobalStateProvider>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </GlobalStateProvider>
    )
}

export default MyApp