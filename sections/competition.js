import { Container, Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

const OTHER_SERVICES = ['Lack of funds protections throughout the process', 'Slow response time', 'No hard checking of the code', 'Lack of rigorous review'];
const PAKT_SERVICES = ['Comprehensive code audit', 'Protection of funds at risk at any time', 'Rigorous review of every line of code', 'Manual inspection for malicious intent', 'Focus on changelog'];

const IconCardCompetition = ({ image }) => {
    return (
        <Box position={'relative'} overflow={'hidden'} borderRadius={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={4} zIndex={2}>
            <Box textAlign={'center'}>
                <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'}>
                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${image}.svg`} />
                </Box>
            </Box>
        </Box>
    );
};

const HeaderCard = ({ title, description }) => {
    return (
        <>
            <Box height={20}></Box>
            <Heading flex={0} as="h5" size="lg" fontWeight={600}>
                {title}
            </Heading>
            <Text as={'span'} textStyle={'base'} flex={0}>
                {description}
            </Text>
        </>
    );
};

const StackItem = ({ items, icon = 'X' }) => {
    return (
        <Stack gap={0}>
            {items.map((item, index) => {
                return (
                    <Flex key={`${item}-${index}`} align={'center'} justifyContent={'center'} gap={4}>
                        <Box display={'inline-block'} marginBottom={'-4px'} marginRight={2} position={'relative'} height={'20px'} width={'20px'}>
                            <Image alt={`${icon}`} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${icon}.svg`} />
                        </Box>
                        <Text flex={1} as={'span'} textStyle={'base'} fontSize={'sm'} lineHeight={1.8}>
                            {item}
                        </Text>
                    </Flex>
                );
            })}
        </Stack>
    );
};

export default function Competition() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                {/* SECTION HEADER */}
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_OUR COMPETITION</Text>
                </Box>
                <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                    <Stack flex={'0 1 50%'} spacing={{ base: 8, md: 10 }}>
                        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                            <Text as={'span'} position={'relative'}>
                                {'</: '}Us vs them
                            </Text>
                            <br />
                        </Heading>
                    </Stack>
                    <Stack flex={'0 1 50%'} justify={'flex-start'} align={'flex-start'}>
                        <Text as={'span'} textStyle={'base'} paddingRight={{ base: 0, lg: 24, xl: 32 }}>
                            In the Ethereum security landscape, there are many competitors vying for the same market, while they all provide valuable services, none can match Pakt's comprehensive
                            approach when it comes to protecting smart contracts and protocols on Ethereum.
                        </Text>
                    </Stack>
                </Stack>
                {/* SECTION CARDS */}
                <Flex direction={{ base: 'column', md: 'row' }} padding={{ base: 0, sm: 8, lg: 24, xl: 32 }} gap={{ base: 32, md: 8 }}>
                    <Box flex={'0 1 50%'} position={'relative'} transform={'translateY(50px)'}>
                        <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'-5%'} left={'30%'} transform={'translateX(-50%)'} zIndex={3}>
                            <IconCardCompetition image={'rack_server'} />
                            <Box
                                position={'absolute'}
                                top={{ base: '5%', lg: '20%' }}
                                left={{ base: '15%', lg: '30%' }}
                                height={100}
                                width={100}
                                borderRadius={'50%'}
                                filter={'blur(15px)'}
                                background={'#0125D5'}
                                zIndex={1}
                                opacity={'0.65'}
                            ></Box>
                        </GlassCard>
                        <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                            <Box padding={{ base: 8, lg: 12 }}>
                                <Stack gap={4}>
                                    <HeaderCard
                                        title={'Other Services'}
                                        description={`Competitors don't have as much security when it comes to Ethereum code audits, so they are more likely to make mistakes.`}
                                    />
                                    <StackItem items={PAKT_SERVICES} icon={`across-social`} />
                                </Stack>
                            </Box>
                        </GlassCard>
                    </Box>
                    <Box flex={'0 1 50%'} position={'relative'}>
                        <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'-5%'} left={'30%'} transform={'translateX(-50%)'} zIndex={3}>
                            <IconCardCompetition image={'house'} />
                        </GlassCard>
                        <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                            <Box padding={{ base: 8, lg: 12 }}>
                                <Stack gap={4}>
                                    <HeaderCard
                                        title={'Pakt Servicies'}
                                        description={`We provide a comprehensive approach that goes beyond the standard code audit, providing a more rigorous and thorough process.`}
                                    />
                                    <StackItem items={OTHER_SERVICES} icon={`check-icon`} />
                                </Stack>
                            </Box>
                        </GlassCard>
                        <Box
                            position={'absolute'}
                            top={{ base: '5%', lg: '0%' }}
                            left={{ base: '15%', lg: '15%' }}
                            height={135}
                            width={135}
                            borderRadius={'50%'}
                            filter={'blur(35px)'}
                            background={'#126CE8'}
                            zIndex={1}
                            opacity={'0.65'}
                        ></Box>
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}
