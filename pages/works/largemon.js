import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Largemon <Badge>2019</Badge>
            </Title>
            <WorkImage
                src="/images/works/uoh-eyecatcher.png"
                alt="University of Huddersfield"
            />
            <P>
                Part of my studies at the University of Huddersfield this
                assignment was a directed module in which I had to produce a
                software artefact and paper on a specific task. This one being  
                to recreate the functionality of the Pokemon games with a 
                random generation system for the monsters
                <br/><br/>
                This was accompanied by a paper, and programmed as a terminal
                game in order to save development time implementing a full GUI
                but retains all of the required functionality with some extra
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/1718-Largemon">
                        https://github.com/Aimireal/1718-Largemon
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Desktop</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>C++</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/largemon.png"/>
        </Container>
    </Layout>
)

export default Project