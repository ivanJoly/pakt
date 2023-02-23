import * as React from 'react';
import lottie from 'lottie-web';
import animationData from '../public/lottie.json';
import { Container, Stack, Flex, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const ITEMS = [
    {
        number: 1,
        subtitle: 'Step one',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
    {
        number: 2,
        subtitle: 'Step two',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
    {
        number: 3,
        subtitle: 'Step third',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
    {
        number: 4,
        subtitle: 'Step fourth',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
    {
        number: 5,
        subtitle: 'Step fifth',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
    {
        number: 6,
        subtitle: 'Step sixth',
        description: 'Upgrade Hub will automatically interprete the code diferences on your new update',
    },
];

const LottieControl = ({ scroll }) => {
    const lottieRef = React.useRef(null);

    React.useEffect(() => {
        const anim = lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,

            animationData,
        });

        function animatebodymovin() {
            const scrollPosition = scroll;
            const maxFrames = anim.totalFrames;
            const frame = Math.round((scrollPosition * maxFrames) / 100);

            anim.goToAndStop(frame, true);
        }

        animatebodymovin();

        return () => {
            anim.destroy();
        };
    }, [scroll]);

    return (
        <Box
            position={{ base: 'relative', sm: 'absolute' }}
            pointerEvents={'none'}
            width={'full'}
            height={'inherit'}
            maxW={'500px'}
            backgroundColor={'main.background'}
            left={{ base: 0, sm: '50%' }}
            top={{ base: 0, sm: '50%' }}
            transform={{ base: '', sm: 'translate(-50%, -50%)' }}
            ref={lottieRef}
        ></Box>
    );
};

const Item = ({ number, subtitle, description }) => {
    const isFirst = number == 1;
    const isLast = number == ITEMS.length;
    console.log(isLast);
    return (
        <Flex
            width={'full'}
            marginTop={{ base: 0, md: isFirst ? 20 : 0 }}
            marginLeft={{ base: isFirst ? 8 : 0, md: 0 }}
            minW={{ base: '250px', md: 'unset' }}
            marginRight={{ base: isLast ? '50px !important' : 0, sm: 'unset' }}
        >
            <Box flex={'0'} marginRight={'10px'} minW={{ base: 'unset', md: '50px' }}>
                <Box position={'relative'} display={{ base: 'none', md: 'block' }} width={' 14px'} height={' 14px'} background={'#8bc89a'} borderRadius={'50%'} marginTop={' 6px'}>
                    <Box position={'absolute'} width={'45px'} height={'4px'} left={0} top={'50%'} transform={'translateY(-50%)'} background={'#8bc89a'}></Box>
                </Box>
                {!isLast && (
                    <Box
                        display={{ base: 'none', md: 'block' }}
                        width={'28px'}
                        height={'full'}
                        backgroundImage="url('/circle_glass.svg')"
                        backgroundSize={'28px 28px'}
                        backgroundRepeat={'repeat-y'}
                        backgroundPosition={'center'}
                        position={'relative'}
                        left={'-50%'}
                        transform={'translate(50%, -2px)'}
                        marginLeft={'4px'}
                    ></Box>
                )}
            </Box>
            <Box flex={'2'}>
                <Stack transform={{ base: '', md: 'translateY(-41%)' }} marginBottom={24}>
                    <Text as={'span'} fontSize={60} fontWeight={'bold'} lineHeight={1}>
                        {number}
                    </Text>
                    <Text as={'span'} textStyle={'base'} fontWeight={'medium'} fontStyle={'italic'} color={'grey'}>
                        {subtitle}
                    </Text>
                    <Text textStyle={'base'}>{description}</Text>
                </Stack>
            </Box>
            <Box flex={{ base: 0, md: 1 }}></Box>
        </Flex>
    );
};

export default function How() {
    const isMobile = useBreakpointValue(
        {
            base: true,
            md: false,
        },
        {
            fallback: false,
        }
    );

    const [scroll, setScroll] = React.useState(null);

    const handleScroll = async (event, isMobile) => {
        const { scrollHeight, scrollTop, clientHeight, scrollLeft, scrollWidth, clientWidth } = event.target;
        let scrollPositionPercentage;

        if (!isMobile) {
            const totalScrollHeight = scrollHeight - clientHeight;
            scrollPositionPercentage = Math.round((scrollTop * 100) / totalScrollHeight);
        }

        if (isMobile) {
            const totalScrollWidth = scrollWidth - clientWidth;
            scrollPositionPercentage = Math.round((scrollLeft * 100) / totalScrollWidth);
        }

        setScroll(scrollPositionPercentage);
    };

    return (
        <Container maxW="container.xl" minH={'100vh'}>
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 8, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_HOW DOES IT WORK</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'>'}Technical process
                    </Text>
                    <br />
                </Heading>
            </Stack>
            <Stack position={'relative'} overflow={'hidden'}>
                <Box
                    position={'absolute'}
                    top={0}
                    left={0}
                    width={{ base: '50px', sm: '100%' }}
                    height={{ base: 'full', sm: '120px' }}
                    background={{
                        base: 'linear-gradient(90deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)',
                        sm: 'linear-gradient(180deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)',
                    }}
                    pointerEvents={'none'}
                    zIndex={3}
                ></Box>
                <Box width={{ base: 'full', md: '50%' }} height={{ base: '250px', md: 'full' }} position={{ base: 'relative', md: 'absolute' }}>
                    <LottieControl scroll={scroll} />
                </Box>
                <Flex
                    height={{ base: 'full', md: '650px' }}
                    overflowX={{ base: 'scroll', md: 'unset' }}
                    overflowY={{ base: 'unset', md: 'scroll' }}
                    onScroll={(e) => handleScroll(e, isMobile)}
                    boxSizing="content-box"
                    py={{ base: 0, md: 4 }}
                    marginRight={'-17px !important'}
                >
                    <Flex flex={'0 1 50%'}></Flex>
                    <Flex flex={'0 1 50%'} py={{ base: 4, md: 20 }} position={'relative'}>
                        <Stack direction={{ base: 'row', md: 'column' }} gap={{ base: 16, md: 0 }} scrollBehavior={'smooth'}>
                            {ITEMS.map((item) => {
                                return <Item key={item.number} number={item.number} subtitle={item.subtitle} description={item.description} />;
                            })}
                        </Stack>
                    </Flex>
                </Flex>
                <Box
                    position={'absolute'}
                    bottom={0}
                    left={{ base: 'unset', sm: 0 }}
                    right={{ base: 0, sm: 'unset' }}
                    width={{ base: '50px', sm: '100%' }}
                    height={{ base: 'full', sm: '120px' }}
                    background={{
                        base: 'linear-gradient(270deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)',
                        sm: 'linear-gradient(0deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)',
                    }}
                    pointerEvents={'none'}
                    zIndex={3}
                ></Box>
            </Stack>
        </Container>
    );
}
