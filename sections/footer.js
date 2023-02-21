import { Container, Stack, Box, Image, Flex, Link, IconButton } from '@chakra-ui/react';
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

const IconList = ({ icon, link }) => {
    return (
        <Link href={link} isExternal>
            <IconButton variant={'IconButtonOutlineLight'} size="md" icon={<Icon icon={icon} />} />
        </Link>
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
                            return <IconList key={item.id} icon={item.icon} link={item.link} />;
                        })}
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
}
