import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                ReChat <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/rechat-eyecatcher.png"
                alt="ReChat"
            />
            <P>
                A beautified dark mode web based messenger application based on ChatEngine.io
                and written in ReactJS
                <br/><br/>
                Utilises Google and Facebook accounts for signing up/login. It uses Firebase
                to store backend data. Chat features include single or group chats, full 
                support for media and formatting as well as a clean material design
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/Rechat">
                        https://github.com/Aimireal/Rechat
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Web</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>JavaScript | React | Firebase</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/rechat.png"/>
        </Container>
    </Layout>
)

export default Project