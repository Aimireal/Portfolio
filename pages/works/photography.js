import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Photography <Badge>2022</Badge>
            </Title>
            <WorkImage
                src="/images/works/photography-eyecatcher.png"
                alt="Photography"
            />
            <P>
                A blog-style website aimed at displaying a users photography
                talents and to act as a portfolio/showcase for this user
                Displays JavaScript and React design elements
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/Photography-Blog">
                        https://github.com/Aimireal/Photography-Blog
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
            <WorkImage src="/images/works/photoblog.png"/>
        </Container>
    </Layout>
)

export default Project