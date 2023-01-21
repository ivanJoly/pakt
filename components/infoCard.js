import { Stack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import GlassCard from './glassCard';

export const InfoCard = ({ image, title, description }) => {
    return (
        <Flex gap={{ base: 6, md: 12 }} alignItems={'center'}>
            <GlassCard width={{ base: '75px', sm: '100px' }} height={{ base: '75px', sm: '80px' }} position={'relative'} zIndex={2}>
                <Box position={'relative'} overflow={'hidden'} borderRadius={4} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={4}>
                    <Box textAlign={'center'}>
                        <Box position={'relative'} height={'50px'} width={'full'} overflow={'hidden'}>
                            <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${image}.svg`} />
                        </Box>
                    </Box>
                </Box>
            </GlassCard>
            <Stack flex={1} gap={1}>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'sm', sm: 'md', lg: 'lg' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {title}
                    </Text>
                </Heading>
                <Text as={'span'} textStyle={'base'}>
                    {description}
                </Text>
            </Stack>
        </Flex>
    );
};

export default InfoCard;
