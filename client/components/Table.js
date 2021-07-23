import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'


export default function TableComponent() {
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
                <Tr>
                    <Td>name</Td>
                    <Td>date</Td>
                    <Td>time</Td>
                    <Td>city</Td>
                    <Td isNumeric>25.4</Td>
                    <Td>zipcode</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
            </Tbody>
            <Tfoot>
                <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                </Tr>
            </Tfoot>
        </Table>
    )
}