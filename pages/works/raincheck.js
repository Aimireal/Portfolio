import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                RainCheck <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/raincheck-eyecatcher.png"
                alt="RainCheck"
            />
            <P>
                A weather application featuring dynamic wallpapers, icons and an 
                informative overlook on the upcoming weeks weather. Works across
                web and android devices.
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/Raincheck/releases/tag/v1.9-beta">
                        https://github.com/Aimireal/Raincheck/releases/tag/v1.9-beta
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Android | Web | IOS</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Flutter | Dart | OpenWeatherMapsAPI</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/raincheck.png" alt="walknote" />
        </Container>
    </Layout>
)

export default Project