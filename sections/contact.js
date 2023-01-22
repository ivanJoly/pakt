import { useForm } from 'react-hook-form';
import { Container, Stack, Flex, Box, Heading, Text, Button, FormErrorMessage, FormLabel, FormControl, Input, Textarea, Image } from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
export const ContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                resolve();
            }, 3000);
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack width={'full'} gap={4}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel textStyle={'base'} htmlFor="name">
                        Name
                    </FormLabel>
                    <Input
                        id="name"
                        placeholder="Your name"
                        {...register('name', {
                            required: 'This is required',
                            minLength: { value: 4, message: 'Minimum length should be 4' },
                        })}
                    />
                    <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.mail}>
                    <FormLabel htmlFor="mail">Email</FormLabel>
                    <Input
                        id="mail"
                        placeholder="Your mail"
                        {...register('mail', {
                            required: 'This is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    <FormErrorMessage>{errors.mail && errors.mail.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.reason}>
                    <FormLabel htmlFor="reason">Reason to contact us</FormLabel>
                    <Select
                        id="reason"
                        selectedOptionColor="selectBG"
                        options={[
                            {
                                label: 'First Option',
                                value: 'First Option',
                            },
                            {
                                label: 'Second Option',
                                value: 'Second Option',
                            },
                            {
                                label: 'Third Option',
                                value: 'Third Option',
                            },
                            {
                                label: 'Fourth Option',
                                value: 'Fourth Option',
                            },
                        ]}
                        placeholder="Select your reason to contact us"
                    />
                    <FormErrorMessage>{errors.reason && errors.reason.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.message}>
                    <FormLabel htmlFor="message">Message</FormLabel>
                    <Textarea
                        placeholder="Type your message ..."
                        id="message"
                        {...register('message', {
                            required: 'This is required',
                        })}
                    />
                    <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Submit
                </Button>
            </Stack>
        </form>
    );
};

export default function ContactUs() {
    return (
        <Container maxW="container.xl" py={{ base: 20, md: 28 }}>
            <Stack spacing={{ base: 8, md: 10 }} py={{ base: 16 }}>
                <Box color={'brand.tertiary'} display={'flex'} gap={4}>
                    <Text as={'span'}>_REACH OUT</Text>
                </Box>
                <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }} spacing={0}>
                    <Text as={'span'} position={'relative'}>
                        {'/:'}Contact us
                    </Text>
                </Heading>
            </Stack>
            <Flex direction={{ base: 'column', lg: 'row' }} paddingX={{ base: 0, lg: 18, xl: 32 }} gap={16}>
                <Flex flex={{ base: 1, lg: '0 1 50%' }}>
                    <Stack gap={4} width={'full'}>
                        <Flex gap={2} alignItems={'center'}>
                            <Box height={'15px'}>
                                <Image alt={'Hero Image'} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={'./email.svg'} />
                            </Box>
                            <Heading as="h6" size="md" fontWeight={400}>
                                Fill up the form
                            </Heading>
                        </Flex>
                        <ContactForm />
                    </Stack>
                </Flex>
                <Flex flex={{ base: 1, lg: '0 1 50%' }} paddingLeft={{ base: 0, lg: 20 }} alignItems={'flex-start'}>
                    <Stack gap={8} height={'full'}>
                        <Text flex={1} as={'span'} textStyle={'base'}>
                            Are you looking for a reliable Ethereum code audit service that can help your project stay secure? At PAKT, we offer an extensive code audit process that prioritizes both
                            security and efficiency.
                        </Text>
                        <Stack flex={1} height={'full'} justifyContent={'flex-end'} gap={16}>
                            <Stack height={'full'} justifyContent={{ base: 'center', lg: 'flex-end' }} alignItems={'flex-start'} gap={4}>
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
                            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }} spacing={0}>
                                <Text as={'span'} position={'relative'}>
                                    More questions? Reach us
                                </Text>
                                <br />
                            </Heading>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
    );
}
