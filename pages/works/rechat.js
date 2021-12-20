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
                which allows users to text over the web privately or in groups as well as send 
                images, videos or other files natively. Deployed onto Netlify.
            </P>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://aimireal-rechat.netlify.app/chats">
                        https://aimireal-rechat.netlify.app/chats
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