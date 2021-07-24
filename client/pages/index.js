import Head from 'next/head'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import { Button, Container, Flex } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import TableComponent from '../components/Table'
import { CitySearch } from '../components/CitySearch'
import _ from 'lodash'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import { Context } from './_app'
import { useRouter } from 'next/router'

export default function Home() {

  const Map = React.useMemo(() => dynamic(
    () => import('../components/Map'),
    {
      // eslint-disable-next-line react/display-name
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  ), [/* list variables which should trigger a re-render here */])

  const router = useRouter()
  const {
    eventLocations,
    setEventLocations,
    setSelectedCity,
    selectedCity
  } = useContext(Context)

  useEffect(() => {
    call()
  }, [])

  const call = async () => {
    const url = 'http://localhost:5000/'
    await axios.get(url)
      .then(res => {
        console.log(res.data)
        setEventLocations(res.data)
      })
      .catch(err => console.log(err))
  }

  if (_.isEmpty(eventLocations)) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </div>
  )
  return (

    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <Container>
          <Map/>
          <Flex justify='space-around' align='center'>
            <CitySearch locations={Object.keys(eventLocations)} setSelectedCity={setSelectedCity}/>
            <Button isDisabled={!selectedCity} onClick={() => router.push('/results')}
                    colorScheme="blue">Search</Button>
          </Flex>
        </Container>
      </main>
    </div>

  )
}

