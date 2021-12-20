import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content="Dylan's homepage" />
                <meta name="author" content="Dylan" />
                <meta property="og:site_name" content="Dylan's homepage" />
                <meta property="og:type" content="website" />
                <title>Dylan - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                { children }
            <Footer/>
            </Container>
        </Box>
    )
}

export default Main