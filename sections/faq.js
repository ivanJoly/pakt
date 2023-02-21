import { Container, Stack, Flex, Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Link, IconButton } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const ICONS = [
    {
        id: 1,
        icon: 'teenyicons:github-solid',
        link: 'https://www.github.com',
    },
    {
        id: 2,
        icon: 'ph:telegram-logo',
        link: 'https://www.github.com',
    },
    {
        id: 3,
        icon: 'ph:medium-logo',
        link: 'https://www.github.com',
    },
];

const ACCORDION_ITEMS = [
    {
        id: 1,
        title: 'What benefits does PAKT provide Ethereum projects?',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 2,
        title: 'How secure is the code audit process ?',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

const IconList = ({ icon, link }) => {
    return (
        <Link href={link} isExternal>
            <IconButton variant={'IconButtonOutlinePrimary'} size="md" icon={<Icon icon={icon} />} />
        </Link>
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
                            {ACCORDION_ITEMS.map((item) => {
                                return (
                                    <AccordionItem key={item.id}>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex="1" textAlign="left" paddingRight={4}>
                                                    {item.title}
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Text as={'span'} textStyle={'base'} size={'xs'}>
                                                {item.description}
                                            </Text>
                                        </AccordionPanel>
                                    </AccordionItem>
                                );
                            })}
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
                                return <IconList key={item.id} icon={item.icon} link={item.link} />;
                            })}
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    );
}
