import * as React from 'react';
import lottie from 'lottie-web';
import animationData from '../public/lottie.json';
import { Container, Stack, Flex, Box, Heading, Text } from '@chakra-ui/react';

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

            // const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
            const frame = Math.round((scrollPosition * maxFrames) / 100);

            console.log(frame, maxFrames, scroll);

            anim.goToAndStop(frame, true);
        }

        animatebodymovin();

        return () => {
            anim.destroy();
        };
    }, [scroll]);

    return <div style={{ position: 'absolute', maxWidth: '500px', backgroundColor: 'main.background', left: '4%', top: '50%', transform: 'translateY(-50%)' }} ref={lottieRef}></div>;
};

const Item = ({ number, subtitle, description }) => {
    const isFirst = number == 1;

    return (
        <Flex width={'full'} marginTop={isFirst ? 20 : 0}>
            <Box flex={'0'} marginRight={'10px'} minW={'50px'}>
                <Box position={'relative'} width={' 14px'} height={' 14px'} background={'#8bc89a'} borderRadius={'50%'} marginTop={' 6px'}>
                    <Box position={'absolute'} width={'45px'} height={'4px'} left={0} top={'50%'} transform={'translateY(-50%)'} background={'#8bc89a'}></Box>
                </Box>
            </Box>
            <Box flex={'2'}>
                <Stack transform={'translateY(-41%)'} marginBottom={24}>
                    <Text as={'span'} fontSize={60} fontWeight={'bold'} lineHeight={1}>
                        {number}
                    </Text>
                    <Text as={'span'}>{subtitle}</Text>
                    <Text textStyle={'base'}>{description}</Text>
                </Stack>
            </Box>
            <Box flex={'1'}></Box>
        </Flex>
    );
};

export default function How() {
    const [scroll, setScroll] = React.useState(null);

    const handleScroll = async (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target;
        const totalScrollHeight = scrollHeight - clientHeight;
        const scrollPositionPercentage = Math.round((scrollTop * 100) / totalScrollHeight);
        setScroll(scrollPositionPercentage);
    };

    return (
        <Container maxW="container.xl" minH={'100vh'}>
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
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
                    width={'100%'}
                    height={'120px'}
                    background={'linear-gradient(180deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)'}
                    pointerEvents={'none'}
                    zIndex={3}
                ></Box>
                <LottieControl scroll={scroll} />
                <Flex height={'650px'} overflowY={'scroll'} onScroll={handleScroll} boxSizing="content-box" marginRight={'-17px !important'}>
                    <Flex flex={'0 1 50%'}></Flex>
                    <Flex flex={'0 1 50%'} py={20} position={'relative'}>
                        <Stack>
                            {ITEMS.map((item) => {
                                return <Item key={item.number} number={item.number} subtitle={item.subtitle} description={item.description} />;
                            })}
                        </Stack>
                    </Flex>
                </Flex>
                <Box
                    position={'absolute'}
                    bottom={0}
                    left={0}
                    width={'100%'}
                    height={'120px'}
                    background={'linear-gradient(0deg, rgba(2,2,7,1) 0%, rgba(2,2,7,0.700717787114846) 50%, rgba(255,255,255,0) 100%)'}
                    pointerEvents={'none'}
                    zIndex={3}
                ></Box>
            </Stack>
        </Container>
    );
}
