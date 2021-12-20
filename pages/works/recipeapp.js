import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                RecipeApp <Badge>2021</Badge>
            </Title>
            <WorkImage
                src="/images/works/recipeapp-eyecatcher.png"
                alt="RecipeApp"
            />
            <P>
                A quick JavaScript project to search recipes or components
                and for any given query return results linking to full recipes
                as well as instructions.
            </P>
            <List>
                <ListItem>
                    <Meta>Link</Meta>
                    <Link href="https://aimireal.github.io/ReactRecipeApp/">
                        https://aimireal.github.io/ReactRecipeApp/
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <Link>Web</Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <Link>JavaScript | React | Edamam</Link>
                </ListItem>
            </List>
            <br/>
            <WorkImage src="/images/works/recipeapp.png"/>
        </Container>
    </Layout>
)

export default Project