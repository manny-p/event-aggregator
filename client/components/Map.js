import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button
} from "@chakra-ui/react"
import { useDisclosure } from '@chakra-ui/react';

const icon = L.icon({ iconUrl: '/marker-icon.png' });


const Map = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (
    <MapContainer center={[34.020478, -118.2862666]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
          ref={btnRef}
          icon={icon}
          position={[34.020478, -118.2862666]}
          eventHandlers={{
            click: onOpen,
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

                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Return to Map
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
      </Marker>
    </MapContainer>
  )
}

export default Map

