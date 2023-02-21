import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';
import { VectorSection } from '../components/hero/vector_section';

const CARD_ITEMS = [
    {
        id: 1,
        title: 'Efficient',
        description: 'Maximum productivity with minimum wasted effort',
        image: 'chart_network',
        rotate: -10,
        misc: () => <MiscBackgroundEfficient />,
    },
    {
        id: 2,
        title: 'Simple Integration',
        description: 'Just add one line of code and you are all set with Pakt',
        image: 'integration',
        rotate: 5,
        misc: () => <MiscBackgroundIntegration />,
    },
    {
        id: 3,
        title: 'Continous Security',
        description: 'Automates the monitoring of information security controls',
        image: 'security',
        rotate: 15,
        misc: () => <MiscBackgroundSecurity />,
    },
];

export const HeroTopGlass = ({ children }) => {
    return (
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
            {children}
        </Box>
    );
};

export const HeroTopGlassCardWrapper = ({ children, rotate }) => {
    return (
        <Box position={'absolute'} top={'-25%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
            <GlassCard isOnHoverActive={true} width={'120px'} height={'95px'} transform={`rotate(${rotate}deg)`}>
                {children}
            </GlassCard>
        </Box>
    );
};

export const HeroGlassCard = ({ children }) => {
    return (
        <Box
            width={'inherit'}
            height={'inherit'}
            position={'relative'}
            overflow={'hidden'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            padding={4}
            zIndex={2}
        >
            {children}
        </Box>
    );
};

export const HeroGlassCardWrapper = ({ children }) => {
    return (
        <GlassCard width={{ base: '100%', md: '280px' }} maxW={340} height={180}>
            {children}
        </GlassCard>
    );
};

export const HeroCircleGlassCardWrapper = ({ children, translateY = 0 }) => {
    return (
        <GlassCard width={'100px'} height={'100px'} zIndex={2} borderRadius={'50%'} transform={`translateY(${translateY}%)`}>
            {children}
        </GlassCard>
    );
};

const MiscBackgroundEfficient = () => {
    return (
        <>
            <Box
                position={'absolute'}
                top={{ base: '15%', lg: '15%' }}
                left={{ base: '15%', lg: '15%' }}
                height={140}
                width={200}
                filter={'blur(20px)'}
                background={'rgba(1, 37, 213, 0.5)'}
                zIndex={1}
                opacity={'0.75'}
                transform={'rotate(-50deg)'}
            ></Box>
            <Box
                position={'absolute'}
                top={{ base: '25%', lg: '25%' }}
                left={{ base: '35%', lg: '35%' }}
                height={130}
                width={130}
                borderRadius={'50%'}
                filter={'blur(15px)'}
                background={'rgba(1, 37, 213, 0.5)'}
                zIndex={1}
                opacity={'0.65'}
            ></Box>
        </>
    );
};

const MiscBackgroundIntegration = () => {
    return (
        <>
            <Box
                position={'absolute'}
                top={{ base: '5%', lg: '5%' }}
                left={{ base: '15%', lg: '15%' }}
                height={135}
                width={135}
                borderRadius={'50%'}
                filter={'blur(25px)'}
                background={'#2E56FF'}
                zIndex={1}
                opacity={'0.65'}
            ></Box>
            <Box
                position={'absolute'}
                top={{ base: '35%', lg: '35%' }}
                left={{ base: '45%', lg: '45%' }}
                height={95}
                width={95}
                borderRadius={'50%'}
                filter={'blur(25px)'}
                background={'#A7F0B7'}
                zIndex={0}
                opacity={'0.55'}
            ></Box>
        </>
    );
};

const MiscBackgroundSecurity = () => {
    return (
        <>
            <Box
                position={'absolute'}
                top={{ base: '5%', lg: '5%' }}
                left={{ base: '5%', lg: '5%' }}
                height={90}
                width={90}
                filter={'blur(25px)'}
                background={'#49B7B1'}
                zIndex={1}
                opacity={'0.45'}
            ></Box>
            <Box
                position={'absolute'}
                top={{ base: '80%', lg: '-10%' }}
                left={{ base: '50%', lg: '35%' }}
                height={95}
                width={95}
                borderRadius={'50%'}
                filter={'blur(25px)'}
                background={'#002CAA'}
                zIndex={0}
                opacity={'0.45'}
            ></Box>
            <Box
                position={'absolute'}
                top={{ base: '80%', lg: '40%' }}
                left={{ base: '50%', lg: '25%' }}
                height={95}
                width={95}
                borderRadius={'50%'}
                filter={'blur(25px)'}
                background={'#002CAA'}
                zIndex={0}
                opacity={'0.45'}
            ></Box>
        </>
    );
};

export default function Hero() {
    return (
        <Box width={'100%'}>
            <Container maxW="container.xl" backgroundImage={'./hero_background.png'} backgroundPosition={'right'} backgroundRepeat={'no-repeat'} backgroundSize={'cover'}>
                {/* TOP SECTION */}
                <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                    <Stack direction={{ base: 'column', md: 'row' }} gap={{ base: 8, md: 0 }}>
                        <Stack order={{ base: 1, sm: 0 }} flex={'0 1 50%'} spacing={{ base: 5, md: 10 }} paddingRight={{ base: 0, lg: 10 }}>
                            <Box display={{ base: 'none', sm: 'flex' }} color={'brand.tertiary'} gap={4}>
                                <Text as={'span'}>SECURITY</Text>
                                <Text as={'span'}>INNOVATION</Text>
                                <Text as={'span'}>TECHNOLOGY</Text>
                            </Box>
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '4xl', sm: '5xl', lg: '7xl' }} spacing={0}>
                                <Text as={'span'} position={'relative'}>
                                    {'</:'} Keep your code{' '}
                                    <Text
                                        as={'span'}
                                        position={'relative'}
                                        display={'inline-block'}
                                        zIndex={1}
                                        _before={{
                                            content: "''",
                                            width: '80%',
                                            height: '25%',
                                            position: 'absolute',
                                            backgroundColor: 'brand.primary',
                                            left: '30%',
                                            borderRadius: '24px',
                                            zIndex: -1,
                                            bottom: '20%',
                                        }}
                                    >
                                        safe
                                    </Text>
                                </Text>
                                <br />
                            </Heading>
                            <Text as={'span'} textStyle={'base'}>
                                Helping EVM projects avoid getting hacked, and losing funds, reputation, and credibility whilst reassuring users about the safety of new protocol changes.
                            </Text>
                            <Box>
                                <Button size="sm">GET IN TOUCH</Button>
                            </Box>
                        </Stack>
                        <Flex order={{ base: 0, sm: 1 }} flex={'0 1 50%'} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                            <VectorSection />
                        </Flex>
                    </Stack>
                </Stack>
                {/* CARDS SECTION */}
                <Stack direction={'row'} gap={{ base: 20, lg: 4 }} py={{ base: 20, md: 28 }} flexWrap={'wrap'} justifyContent={{ base: 'center', lg: 'flex-start' }}>
                    {CARD_ITEMS.map((item) => {
                        return (
                            <Box position={'relative'} key={`${item.id}-${item.title}`}>
                                <HeroTopGlassCardWrapper rotate={item.rotate}>
                                    <HeroTopGlass>
                                        <Box textAlign={'center'}>
                                            <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                                                <Image alt={`${item.image}`} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${item.image}.svg`} />
                                            </Box>
                                        </Box>
                                    </HeroTopGlass>
                                </HeroTopGlassCardWrapper>
                                <HeroGlassCardWrapper>
                                    <HeroGlassCard>
                                        <Stack textAlign={'center'} gap={1}>
                                            <Heading as="h6" size="md" fontWeight={600}>
                                                {item.title}
                                            </Heading>
                                            <Text as={'span'}>{item.description}</Text>
                                        </Stack>
                                    </HeroGlassCard>
                                    {item.misc()}
                                </HeroGlassCardWrapper>
                            </Box>
                        );
                    })}
                    <Box display={{ base: 'none', lg: 'flex' }} alignSelf={'flex-end'} padding={4}>
                        <Heading as="h5" size="lg" fontWeight={600}>
                            {'<<'} Top <br /> Features
                        </Heading>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
