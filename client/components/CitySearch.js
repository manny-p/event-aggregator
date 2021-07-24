import React from 'react'
import { Select } from "@chakra-ui/react"

export const CitySearch = (props) => {
    const { setSelectedCity, locations, selectedCity } = props
    return (
        <>
            <Select defaultValue={selectedCity || null} onChange={(e) => setSelectedCity(e.target.value)} variant="outline" size="lg" placeholder="Search for tickets near...">
                {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                ))}
            </Select>
        </>
    )
}