import { Container, Stack, Flex, Box, Heading, Text, Image, Button, Grid } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Stats() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_STATS</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'//: '}Security in Blockhain
                    </Text>
                    <br />
                </Heading>
            </Stack>
            <Grid position={'relative'} paddingX={32} gap={8} gridTemplateColumns={'repeat(12, 1fr)'} gridTemplateRows={'repeat(2, 1fr)'} columnGap={4} rowGap={12}>
                <Box width={'full'} height={'150px'} gridArea={'1 / 2 / 2 / 7'}>
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Stolen
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                $19,990 Millions
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
                <Box width={'full'} height={'150px'} gridArea={'1 / 7 / 2 / 10'} transform={'translateY(32px)'}>
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Vulnerabilities <br /> in each project
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
                <Box width={'full'} height={'150px'} gridArea={'1 / 10 / 2 / 13'} transform={'translateY(32px)'}>
                    <Text as={'p'} textStyle={'base'} fontSize={'sm'} marginTop={'-4px'}>
                        The growth of blockchain and crypto has been inflicted with the largest crypto hacks that have stirred the foundations of trust in blockchain applications.
                    </Text>
                </Box>
                <Box width={'full'} height={'150px'} gridArea={'2 / 5 / 3 / 7'} transform={'translateY(-22px)'}>
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Attacks
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
                <Box width={'full'} height={'150px'} gridArea={'2 / 7 / 3 / 11'}>
                    <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                        <Stack alignItems={'center'} justifyContent={'center'} height={'full'}>
                            <Text as={'span'} textStyle={'base'}>
                                Other Numbers
                            </Text>
                            <Heading as="h5" size="xl" fontWeight={600}>
                                445
                            </Heading>
                        </Stack>
                    </GlassCard>
                </Box>
            </Grid>
        </Container>
    );
}
