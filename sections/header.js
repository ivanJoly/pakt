import { Container, Flex, Button, Image } from '@chakra-ui/react';

export default function Header() {
    return (
        <Container maxW="container.xl">
            <Flex alignItems="center" justifyContent={'space-between'} py={2} borderBottom={'1px solid'} borderBottomColor="brand.primary">
                <Flex alignItems="center" gap="4">
                    <Image alt={'Pakt Logo'} fit={'fill'} align={'center'} w={'100%'} h={'100%'} src={'/pakt_logo.svg'} boxSize="35px" />
                    <Image alt={'Pakt Logo'} fit={'fill'} align={'center'} w={'100%'} h={'100%'} src={'/pakt_iso.svg'} boxSize="65px" />
                </Flex>
                <Flex gap={2}>
                    <Button display={{ base: 'none', md: 'block' }} size="sm" variant="outline">
                        LAUNCH APP
                    </Button>
                    <Button size="sm">GET IN TOUCH</Button>
                </Flex>
            </Flex>
        </Container>
    );
}
