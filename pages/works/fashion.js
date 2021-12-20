import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Fashion <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/fashion-eyecatcher.png"
                alt="Fashion"
            />
            <P>
                A template to build off for e-commerce websites. This one is more
                of a basic one to demonstrate design elements and to be part of a 
                challenge to make a quick but serviceable website
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://aimireal.github.io/ReactWebStore/">
                        https://aimireal.github.io/ReactWebStore/
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
            <WorkImage src="/images/works/fashion.png"/>
        </Container>
    </Layout>
)

export default Project