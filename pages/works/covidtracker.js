import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                COVID Tracker <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/covidtracker-eyecatcher.png"
                alt="Covid Tracker"
            />
            <P>
                A JavaScript/React webpage for a COVID tracking site 
                using the UK Governments API for daily updates on the pandemic
                <br/><br/>
                Filtering available for regional data, to showcase cases/deaths
                by area as well as a general overview of everything
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/React-Covid-Tracker">
                        https://github.com/Aimireal/React-Covid-Tracker
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Web</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>JavaScript | React</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/covidtracker.png"/>
        </Container>
    </Layout>
)

export default Project