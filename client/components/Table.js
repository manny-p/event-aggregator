import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button
} from '@chakra-ui/react'



export default function TableComponent(props) {
    const { cityEvents } = props
    return (
        <Table variant="striped" colorScheme="teal">
            <TableCaption>Upcoming Events</TableCaption>
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Date</Th>
                    <Th>Time</Th>
                    <Th>City</Th>
                    <Th>Zipcode</Th>
                    <Th>Genre</Th>
                    <Th>Buy Tickets</Th>
                </Tr>
            </Thead>
            <Tbody>
                {cityEvents.map((event, i) => (
                    <Tr key={i}>
                        <Td>{event.name}</Td>
                        <Td>{event.date}</Td>
                        <Td>{event.time}</Td>
                        <Td>{event.city}</Td>
                        <Td>{event.zipcode}</Td>
                        <Td>{event.genre}</Td>
                        <Td>
                            <Button onClick={() => window.open(event.tix_url, '_blank')} colorScheme="teal" variant="solid">
                                View Tickets
                            </Button>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>footer</Th>
                    <Th>footer</Th>
                    <Th>footer</Th>
                    <Th>footer</Th>
                    <Th>footer</Th>
                    <Th>footer</Th>
                    <Th>footer</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}