import {
    Container,
    Heading,
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" 
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
                p={3} 
                mb={6} 
                align="center">
                    To download my CV, check it out on <a href='
                        https://www.linkedin.com/in/dylan-hudson-dev/detail/overlay-view/
                        urn:li:fsd_profileTreasuryMedia:
                        (ACoAACW0_rIBb3kaJs_tMgPMrqf621IZaIUHZmo,1635475053682)/'
                    >&quot;LinkedIn&quot;</a> or if you want to see my projects, navigate to <a href='
                        /works/'
                    >Works</a>
                </Box>
                
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                    <Heading as="h3" fontSize={20} mb={4}>
                        Work Experience
                    </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Fusion IT MGMT LTD (Aug 2018 - Sep 2019):
                    </Heading>
                    <Paragraph>
                        Worked on multiple core projects both internally and with 
                        Clients to produce software artefacts using C# as well as 
                        SQL and the MatterSphere backend alongside maintaining 
                        Client communication and presence.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Assisted in training of another programmer in order to get 
                        them familiar with the technology stack, as well as working 
                        as a solo developer and as a team for the entire development 
                        cycle.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Design, Documentation, Development and Deployment were all 
                        done on the majority of projects by myself as well as some 
                        including testing and client feedback.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Further development of professional skills such as timeliness, 
                        presentation, timekeeping, self organisation as well as 
                        communication via calls, stand-up meetings and email.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Developed, tested and deployed advanced systems for legal-500 
                        solicitors, some being the largest specialists in the UK along 
                        with some worldwide clients.
                    </Paragraph>
                </Section>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        Freelance Technician (2015 - Present)
                    </Heading>
                    <Paragraph>
                        Worked with customers directly. Demonstrating effective 
                        communication skills to understand their needs.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Sourced jobs to develop skills in networking and developing 
                        business for myself.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Developed strong time management skills to meet client 
                        deadlines, developing skills in timetabling and prioritising 
                        work to be more efficient and leaving time for unforeseen issues.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Learned how to diagnose issues in hardware and software to 
                        become more independent in problem solving.
                    </Paragraph>
                </Section>
                <br/>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h3" fontSize={20} mb={4}>
                            Education
                        </Heading>
                    </Box>
                </Box>
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        University of Huddersfield (Sept 2016 - June 2020)
                    </Heading>
                    <Heading as="h3" fontSize={16} mb={4}>
                        BSc Computing | Graduated First-Class Honours 1:1
                    </Heading>
                    <Paragraph>
                        1st Year:<br/>
                        Project 1 (A),<br/>  
                        Harware &amp; Networks (B),<br/>
                        Software Design &amp; Dev (B),<br/> 
                        Computing Science &amp; Mathematics (Pass),<br/> 
                        Studio 1 (B)
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        2nd Year:<br/>
                        Algorithms, Processes &amp; Data (D),<br/>
                        Operating Systems &amp; Language Translators (D),<br/> 
                        <a href="/works/largemon" target="__blank">
                            Object Oriented Systems Development (A),
                        </a><br/>
                        Relational Databases &amp; Web Integration (C),<br/> 
                        Cyber Security (A),<br/>
                        Team Project (B)
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        3rd Year:<br/>
                        Placement with Fusion:<br/>
                        Personal, Social &amp; Technical Skills (A)<br/>
                        Organisational &amp; Activity Analysis (A)
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Final Year:<br/>
                        <a href="/works/aivision" target="__blank">
                            AI Vision (A),
                        </a><br/>
                        Individual Project (A),<br/>
                        Large-Scale Software Engineering (B),<br/>
                        <a href="/works/auctionroom" target="__blank">
                            Distributed &amp; Client Server Systems (A),
                        </a><br/>
                        <a href="/works/monitoringstation" target="__blank">
                            Distributed &amp; Client Server Systems - 2 (A),
                        </a><br/>
                        Advanced Web Programming (A)
                    </Paragraph>
                </Section>
            
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        St Benedict&lsquo;s Catholic Sixth Form (Sept 2014 - Sept 2016)
                    </Heading>
                    <Paragraph>
                        IT QCF - Disctinction, Disctinction*
                    </Paragraph>
                    <Paragraph>
                        IT Modules: Networking, Animation, Hardware/Software and 
                        Web Content Creation
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        A/AS-Level History and RE - B/C/D
                    </Paragraph>
                </Section>
                
                <Section delay={0.2}> 
                    <Heading as="h3" variant="cv-title">
                        St Bede&lsquo;s Cathloic Grammar School (Sept 2008 - Sept 2014)
                    </Heading>
                    <Paragraph>
                        GCSE Level: English, Maths, Computing, Literature, Media, 
                        Science/Additional Science, History, Art and Design.
                    </Paragraph>
                    <br/>
                    <Paragraph>
                        Graded with 7 C&lsquo;s, 3 B&lsquo;s and 1 A.
                    </Paragraph>
                </Section>
                <br/>
            </Container>
        </Layout>
    )
}

export default Page