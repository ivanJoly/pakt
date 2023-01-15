import { Container, Stack, Box } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box width={'100%'} bgColor={'brand.primary'}>
            <Container>
                <Stack spacing={{ base: 8, md: 10 }} py={{ base: 8, md: 8 }}></Stack>
            </Container>
        </Box>
    );
}
