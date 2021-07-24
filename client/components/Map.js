import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React, { useContext } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Box,
    Image,
} from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react';
import { Context } from '../pages/_app'

const icon = L.icon({ iconUrl: '/marker-icon.png' });


const Map = (props) => {
    const { cityEvents } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {
        selectedCoordinates,
        setSelectedCoordinates,
    } = useContext(Context)
    const filteredEvents =
        cityEvents.filter(event =>
            event.lat === selectedCoordinates[0] && event.lon === selectedCoordinates[1]
        )

    const uniqueCoordinates = () => {
        const uniques = []
        cityEvents.forEach((event) => {
            const isDuplicate = uniques.some(unique => event.lat === unique.lat && event.lon === unique.lon)
            const coordinatePair = {
                lat: event.lat,
                lon: event.lon
            }
            !isDuplicate ? uniques.push(coordinatePair) : null
        })
        return uniques
    }
    const centerCoordinates = !_.isEmpty(cityEvents) ? [cityEvents[0].lat, cityEvents[0].lon] : [0,0]
    return (
        <MapContainer center={centerCoordinates} zoom={8} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {uniqueCoordinates().map((coordinatePair, i) => {
                return (
                    <Marker
                        key={i}
                        ref={btnRef}
                        icon={icon}
                        position={[coordinatePair.lat, coordinatePair.lon]}
                        eventHandlers={{
                            click: () => {
                                onOpen()
                                setSelectedCoordinates([coordinatePair.lat, coordinatePair.lon])
                            },
                        }}
                    >
                        <Drawer
                            isOpen={isOpen}
                            placement="right"
                            onClose={onClose}
                            size={'xl'}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Upcoming Events</DrawerHeader>

                                <DrawerBody>
                                    {filteredEvents.map(event => {
                                        return (
                                            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                                                <Image src={event.image} alt={event.name} />
                                                <Box p="6">
                                                    <Box d="flex" alignItems="baseline">
                                                        <Box
                                                            color="gray.500"
                                                            fontWeight="semibold"
                                                            letterSpacing="wide"
                                                            fontSize="xs"
                                                            textTransform="uppercase"
                                                            ml="2"
                                                        >
                                                            {event.genre}
                                                        </Box>
                                                    </Box>

                                                    <Box
                                                        mt="1"
                                                        fontWeight="semibold"
                                                        as="h4"
                                                        lineHeight="tight"
                                                        isTruncated
                                                    >
                                                        {event.name}
                                                    </Box>

                                                    <Box>
                                                        {event.dateTime}
                                                        <Button onClick={() => window.open(event.tix_url, '_blank')} colorScheme="teal" variant="solid">
                                                            View Tickets
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                </DrawerBody>

                                <DrawerFooter>
                                    <Button variant="outline" mr={3} onClick={onClose}>
                                        Return to Map
                                    </Button>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </Marker>
                )
            })}
        </MapContainer>
    )
}

export default Map