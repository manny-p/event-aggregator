import { Tabs, TabList, Tab } from "@chakra-ui/react"

export const TabGroup = (props) => {
    const {setMapView} = props
    return(
        <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
                <Tab onClick={() => setMapView(true)}>Map View</Tab>
                <Tab onClick={() => setMapView(false)}>List View</Tab>
            </TabList>
        </Tabs>
    )
}