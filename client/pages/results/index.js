import Head from 'next/head'
import {Container} from '@chakra-ui/react'
import { useState, useContext} from 'react';
import TableComponent from '../../components/Table';
import { CitySearch } from '../../components/CitySearch';
import { TabGroup } from '../../components/TabGroup'
import { Context } from '../_app'
import styles from '../../styles/Home.module.css'
import _ from 'lodash'

export default function Results() {

    const {
        eventLocations,
        setSelectedCity,
        selectedCity,
    } = useContext(Context)

    const [mapView, setMapView] = useState(true)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <Container>
                    <TabGroup setMapView={setMapView}/>
                    <CitySearch locations={!_.isEmpty(eventLocations) ? Object.keys(eventLocations) : []} selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
                    {mapView
                        ? <p>Loading</p>
                        : <TableComponent cityEvents={selectedCity ? eventLocations[selectedCity] : []}/>
                    }
                </Container>
            </main>
        </div>

    )
}
