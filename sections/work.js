import { Container, Stack, Flex, Box, Heading, Text, Image, Button, Grid } from '@chakra-ui/react';
import GlassCard from '../components/glassCard';

export default function Work() {
    return (
        <Container maxW="container.xl">
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_WORK</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'/_'}Do you have an eye for bugs?
                    </Text>
                    <br />
                </Heading>
                <Grid position={'relative'} padding={32} gap={8} gridTemplateColumns={'repeat(4, 1fr)'} gridTemplateRows={'repeat(3, 1fr)'} columnGap={6} rowGap={6}>
                    <Box width={'full'} height={'150px'} gridArea={'1 / 1 / 2 / 3'}>
                        <Stack>
                            <Heading as="h5" size="lg" fontWeight={600}>
                                Whitehat hackers prepare!
                            </Heading>
                            <Text as={'span'} textStyle={'base'}>
                                Whitehat hackers are the essential, unsung heroes of Ethereum projects. As Ethereum evolves, so do the potential threats that it could face
                            </Text>
                        </Stack>
                    </Box>
                    <Box width={'full'} height={'320px'} alignSelf={'self-end'} gridArea={'1 / 4 / 3 / 5'}>
                        <Box position={'relative'} height={'inherit'}>
                            <GlassCard width={'150px'} height={'125px'} position={'absolute'} top={'-5%'} left={'50%'} transform={'translateX(-50%)'} zIndex={2}>
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
                                    <Box textAlign={'center'}>
                                        <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./chart_network.svg'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'}>
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
                                >
                                    <Stack textAlign={'center'} gap={1}>
                                        <Heading as="h6" size="sm" fontWeight={600}>
                                            Better pay than the rest
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            PAKT offers better pay, for you to focus on providing quality work and secure protocols.
                                        </Text>
                                    </Stack>
                                </Box>
                            </GlassCard>
                        </Box>
                    </Box>
                    <Box width={'full'} height={'180px'} gridArea={'2 / 2 / 3 / 4'} transform={'translateY(-10px)'}>
                        <Box flex={'0 1 50%'} height={'inherit'} position={'relative'}>
                            <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'10%'} left={'5%'} transform={'translateX(-50%)'} zIndex={3}>
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
                                    <Box textAlign={'center'}>
                                        <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./house.svg'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                                <Flex direction={'row'} height={'inherit'}>
                                    <Box flex={'0 1 25%'}></Box>
                                    <Stack flex={'0 1 75%'} justifyContent={'center'} paddingRight={12}>
                                        <Heading as="h5" size="sm" fontWeight={600}>
                                            Save users from theft
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            Help protect users' funds at risk. Our rigorous automated review system provides an extra layer of security.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </GlassCard>
                        </Box>
                    </Box>
                    <Box width={'full'} height={'180px'} gridArea={'3 / 1 / 4 / 3'}>
                        <Stack height={'full'} justifyContent={'flex-end'} alignItems={'flex-start'} gap={4}>
                            <Flex gap={2} alignItems={'center'}>
                                <Box height={'15px'}>
                                    <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./email.svg'} />
                                </Box>
                                <Heading as="h6" size="sm" fontWeight={400}>
                                    Or send us an email
                                </Heading>
                            </Flex>
                            <Box width={'full'} height={'48px'} maxW={'350px'} background={'rgba(255, 255, 255, 0.2)'} borderRadius={'25px'}>
                                <Flex justifyContent={'space-between'} alignItems={'center'} height={'inherit'} paddingX={6}>
                                    <Text textStyle={'base'}>ouremail@gmail.com</Text>
                                    <Button bgColor={'brand.tertiary'} width={'32px'} height={'32px'}></Button>
                                </Flex>
                            </Box>
                        </Stack>
                    </Box>
                    <Box width={'full'} height={'180px'} gridArea={'3 / 3 / 4 / 5'}>
                        <Box flex={'0 1 50%'} height={'inherit'} position={'relative'}>
                            <GlassCard width={'150px'} height={'120px'} position={'absolute'} top={'10%'} left={'95%'} transform={'translateX(-50%)'} zIndex={3}>
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
                                    <Box textAlign={'center'}>
                                        <Box position={'relative'} height={'80px'} width={'full'} overflow={'hidden'}>
                                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./house.svg'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </GlassCard>
                            <GlassCard width={'full'} height={'full'} position={'relative'} zIndex={2}>
                                <Flex direction={'row'} height={'inherit'}>
                                    <Stack flex={'0 1 75%'} justifyContent={'center'} paddingLeft={12}>
                                        <Heading as="h5" size="sm" fontWeight={600}>
                                            Work on an innovative company
                                        </Heading>
                                        <Text as={'span'} textStyle={'base'} fontSize={'sm'}>
                                            Working on an innovative company like PAKT is essential to ensure Ethereum projects stay secure and safe.
                                        </Text>
                                    </Stack>
                                </Flex>
                            </GlassCard>
                        </Box>
                    </Box>
                </Grid>
            </Stack>
        </Container>
    );
}
