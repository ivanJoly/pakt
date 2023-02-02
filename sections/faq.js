import { Container, Stack, Flex, Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Image } from '@chakra-ui/react';

const ICONS = ['gh-icon', 'telegram-icon', 'medium-icon'];

const IconList = ({ image }) => {
    return (
        <Box display={'inline-block'} position={'relative'} height={'40px'} width={'40px'}>
            <Image alt={`${image}`} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${image}.svg`} />
        </Box>
    );
};

export default function Faq() {
    return (
        <Container maxW="container.xl" py={{ base: 20, md: 28 }}>
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 16 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_QUESTIONS</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'//:'}FAQs
                    </Text>
                </Heading>
            </Stack>
            <Flex direction={{ base: 'column', lg: 'row' }} paddingX={{ base: 0, lg: 18, xl: 32 }} gap={16}>
                <Box flex={{ base: 1, lg: '0 1 50%' }}>
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
                <Flex flex={{ base: 1, lg: '0 1 50%' }} paddingLeft={{ base: 0, lg: 20 }} alignItems={'flex-end'}>
                    <Stack gap={4}>
                        <Heading as="h5" size="lg" fontWeight={600}>
                            Want to chat?
                        </Heading>
                        <Text as={'span'} textStyle={'base'}>
                            Follow us on social media to stay up-to-date on the latest PAKT’s news
                        </Text>
                        <Flex marginTop={6} gap={6} flexWrap={'wrap'} maxW={250}>
                            {ICONS.map((item) => {
                                return <IconList key={item} image={item} />;
                            })}
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    );
}
