import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import GlassCard from '../glassCard';

const VECTOR_ITEMS = [
    {
        id: 1,
        title: '117',
        description: 'Attacks avoided',
        translateY: -30,
        misc: () => <MiscBackgroundVector />,
    },
    {
        id: 2,
        title: '15',
        description: 'Saved projects',
        translateY: 0,
        misc: () => <MiscBackgroundVector />,
    },
    {
        id: 3,
        title: '160',
        description: 'Checks per day',
        translateY: -20,
        misc: () => <MiscBackgroundVector />,
    },
    {
        id: 4,
        title: '127',
        description: 'Code updates',
        translateY: 5,
        misc: () => <MiscBackgroundVector />,
    },
];

export const HeroCircleGlassCardWrapper = ({ children, translateY = 0 }) => {
    return (
        <GlassCard border={'1px solid #2e56ff'} width={{ base: '75px', sm: '80px' }} height={{ base: '75px', sm: '80px' }} zIndex={2} borderRadius={'50%'} transform={`translateY(${translateY}%)`}>
            {children}
        </GlassCard>
    );
};

const MiscBackgroundVector = () => {
    return (
        <>
            <Box
                position={'absolute'}
                top={{ base: '10%', lg: '15%' }}
                left={{ base: '5%', lg: '15%' }}
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
                top={{ base: '0%', lg: '25%' }}
                left={{ base: '5%', lg: '35%' }}
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

export const VectorSection = () => {
    return (
        <>
            <Box position={'relative'} maxW={'350px'} marginTop={{ base: 12, md: 0 }}>
                <Box position={'relative'} height={'300px'} rounded={'2xl'} boxShadow={'2xl'} width={'full'} overflow={'hidden'}>
                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector_1.svg'} />
                </Box>
                <Box
                    position={'absolute'}
                    zIndex={1}
                    transform={'rotate(45deg)'}
                    top={'-30%'}
                    left={'-10%'}
                    height={'200px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}
                    maxW={'200px'}
                >
                    <Image alt={'Hero Image 2'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./hero_vector_2.svg'} />
                </Box>
            </Box>
            <Box
                width={{ base: 'full', sm: 'unset' }}
                position={'absolute'}
                left={{ base: '0%', sm: '50%', md: '5%', lg: '10%' }}
                bottom={'5%'}
                display={'flex'}
                flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                gap={2}
                transform={{ base: 'translateX(0%)', sm: 'translateX(-50%)', md: 'translateX(0%)' }}
            >
                {VECTOR_ITEMS.map((item) => {
                    return (
                        <HeroCircleGlassCardWrapper key={item.id} translateY={item.translateY}>
                            <Flex direction={'column'} textAlign={'center'} height={'full'} justifyContent={'center'} position={'relative'} zIndex={3} padding={'0 5px'}>
                                <Heading as="h6" size="md" fontWeight={600}>
                                    {item.title}
                                </Heading>
                                <Text as={'span'} fontSize={'small'} fontWeight={400} lineHeight={1.1} margin={0}>
                                    {item.description}
                                </Text>
                            </Flex>
                            {item.misc()}
                        </HeroCircleGlassCardWrapper>
                    );
                })}
            </Box>
        </>
    );
};
