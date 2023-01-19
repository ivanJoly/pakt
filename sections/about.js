import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export const InfoCard = ({ image, title, description }) => {
    return (
        <Flex gap={{ base: 6, md: 12 }} alignItems={'center'}>
            <GlassCard width={{ base: '75px', sm: '100px' }} height={{ base: '75px', sm: '80px' }} position={'relative'} zIndex={2}>
                <Box
                    width={'inherit'}
                    height={'inherit'}
                    position={'relative'}
                    overflow={'hidden'}
                    borderRadius={4}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={4}
                >
                    <Box textAlign={'center'}>
                        <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${image}.svg`} />
                        </Box>
                    </Box>
                </Box>
            </GlassCard>
            <Stack flex={1} gap={1}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {title}
                    </Text>
                </Heading>
                <Text as={'span'} textStyle={'base'}>
                    {description}
                </Text>
            </Stack>
        </Flex>
    );
};

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
