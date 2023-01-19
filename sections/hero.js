import { Container, Stack, Flex, Box, Heading, Text, Image, Button } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

const CARD_ITEMS = [
    {
        title: 'Efficient',
        description: 'Maximum productivity with minimum wasted effort',
        image: 'chart_network',
    },
    {
        title: 'Simple Integration',
        description: 'Just add one line of code and you are all set with Pakt',
        image: 'integration',
    },
    {
        title: 'Continous Security',
        description: 'Automates the monitoring of information security controls',
        image: 'security',
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

export const HeroTopGlassCardWrapper = ({ children }) => {
    return (
        <GlassCard width={'100px'} height={'80px'} position={'absolute'} top={'-25%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
            {children}
        </GlassCard>
    );
};

export const HeroGlassCard = ({ children }) => {
    return (
        <Box width={'inherit'} height={'inherit'} position={'relative'} overflow={'hidden'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'flex-end'} padding={4}>
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
                                    {'</:'} Keep your code safe
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
                            <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector_1.svg'} />
                            </Box>
                        </Flex>
                    </Stack>
                </Stack>
                {/* CARDS SECTION */}
                <Stack direction={'row'} gap={{ base: 20, lg: 4 }} py={{ base: 20, md: 28 }} flexWrap={'wrap'} justifyContent={{ base: 'center', lg: 'flex-start' }}>
                    {CARD_ITEMS.map((item) => {
                        return (
                            <Box position={'relative'} key={`${item.title}`}>
                                <HeroTopGlassCardWrapper>
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
