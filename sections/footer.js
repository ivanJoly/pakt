import { Container, Stack, Box, Image, Flex } from '@chakra-ui/react';

const ICONS = ['gh-white', 'telegram-white', 'medium-white'];

const IconList = ({ image }) => {
    return (
        <Box display={'inline-block'} position={'relative'} height={'40px'} width={'40px'}>
            <Image alt={`${image}`} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${image}.svg`} />
        </Box>
    );
};

export default function Footer() {
    return (
        <Box width={'100%'} bgColor={'brand.primary'}>
            <Container>
                <Stack spacing={{ base: 8, md: 10 }} py={{ base: 8, md: 8 }} alignItems={'center'} justifyContent={'center'}>
                    <Box display={'inline-block'} position={'relative'} height={'80px'} width={'80px'}>
                        <Image alt={``} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./logo-white.svg`} />
                    </Box>
                    <Flex marginTop={6} gap={6} flexWrap={'wrap'} maxW={250}>
                        {ICONS.map((item) => {
                            return <IconList key={item} image={item} />;
                        })}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}
