import { Container, Stack, Flex, Box, Heading, Text, Image, Button, Grid, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Faq() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_QUESTIONS</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'//:'}FAQs
                    </Text>
                </Heading>
            </Stack>
            <Flex padding={32}>
                <Box flex={'0 1 50%'}>
                    <Stack gap={4}>
                        <Heading as="h5" size="lg" fontWeight={600}>
                            Have any more questions?
                        </Heading>
                        <Text as={'span'} textStyle={'base'}>
                            Whether you need help understanding Ethereum protocol changes, or are interested in how code audit for smart contracts can help your Ethereum project, our team of experts
                            have worked on this FAQ’s
                        </Text>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            What benefits does PAKT provide Ethereum projects?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex="1" textAlign="left">
                                            How secure is the code audit process ?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text as={'span'} textStyle={'base'} size={'xs'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Stack>
                </Box>
                <Flex flex={'0 1 50%'} paddingLeft={20} alignItems={'flex-end'}>
                    <Stack>
                        <Heading as="h5" size="lg" fontWeight={600}>
                            Want to chat?
                        </Heading>
                        <Text as={'span'} textStyle={'base'}>
                            Follow us on social media to stay up-to-date on the latest PAKT’s news
                        </Text>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    );
}
