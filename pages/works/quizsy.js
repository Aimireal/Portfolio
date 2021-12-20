import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Quizsy <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/quizsy-eyecatcher.png"
                alt="Quizsy"
            />
            <P>
                A multi-platform quiz game featuring 24 categories and thousands of questions.
                Has a sleek, simple interface as well as differing difficulties and history for 
                checking answers to previous questions
            </P>
            <br/>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://github.com/Aimireal/Quizsy/releases/tag/v1.0">
                        https://github.com/Aimireal/Quizsy/releases/tag/v1.0
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Android | Web | IOS</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>Flutter | Dart | OpenTriviaAPI</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/quizsy.png"/>
        </Container>
    </Layout>
)

export default Project