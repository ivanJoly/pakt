import { Container, Stack, Flex, Box, Heading, Text } from '@chakra-ui/react';
import InfoCard from '../components/infoCard';

export default function About() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_ABOUT US</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'//:'} _Our services
                    </Text>
                    <br />
                </Heading>
                <Flex padding={{ base: 0, sm: 8, lg: 20 }} direction={{ base: 'column', md: 'row' }} gap={{ base: 12, md: 4 }}>
                    <Flex order={{ base: 1, md: 0 }} flex={{ base: '1', md: '0 1 50%' }} paddingRight={{ base: 0, lg: 40, xl: 60 }} gap={8} flexDirection={'column'}>
                        <Box>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }} spacing={0}>
                                <Text as={'span'} position={'relative'}>
                                    Want to dive deeper?
                                </Text>
                                <br />
                            </Heading>
                            <Text as={'span'} textStyle={'base'}>
                                You can explore our documentation on Github
                            </Text>
                            <br />
                            <Text color={'brand.tertiary'} as={'span'}>
                                Access Documentation
                            </Text>
                        </Box>
                        <Box>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }} spacing={0}>
                                <Text as={'span'} position={'relative'}>
                                    Chain availability
                                </Text>
                            </Heading>
                        </Box>
                    </Flex>
                    <Flex order={{ base: 0, md: 1 }} flex={{ base: '1', md: '0 1 50%' }} flexDirection={'column'} paddingRight={{ base: 0, xl: 12 }} gap={8}>
                        <Box paddingBottom={4}>
                            <Text as={'span'} textStyle={'base'}>
                                We fix your mistakes before they become a problem for your users, to assure them and you that the change that you are introducing does not cause any unnecessary issues.
                            </Text>
                        </Box>
                        <InfoCard title={'> Efficient'} description={'Our services are designed to provide impressive results quickly and efficiently.'} image={'efficient'} />
                        <InfoCard title={'> Cheap'} description={`We strive to provide cost-effective services that meet our customer's needs without breaking the bank`} image={'cheap'} />
                    </Flex>
                </Flex>
            </Stack>
        </Container>
    );
}
