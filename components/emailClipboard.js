import * as React from 'react';
import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';

const CopyButton = ({ icon }) => {
    return (
        <Box display={'inline-block'} position={'relative'} height={'15px'} width={'15px'}>
            <Image alt={`${icon}`} fit={'contain'} align={'center'} w={'100%'} h={'100%'} src={`./${icon}.svg`} />
        </Box>
    );
};

const EmailClipboard = ({ fistText = 'ouremail@gmail.com', secondText = 'Text copy to clipboard' }) => {
    const [active, setActive] = React.useState(false);
    let holdTimeOut = 0;

    const onClipboard = () => {
        if (active) return;

        setActive(true);
        navigator.clipboard.writeText(fistText);

        holdTimeOut = setTimeout(() => {
            setActive(false);
            clearTime(holdTimeOut);
        }, 2000);
    };

    const clearTime = (holdTimeOut) => {
        clearTimeout(holdTimeOut);
        holdTimeOut = 0;
    };

    return (
        <Box width={'full'} height={'48px'} maxW={'350px'} background={!active ? 'main.foreground' : 'brand.tertiary'} borderRadius={'25px'} transition={'0.5s all'}>
            <Flex justifyContent={'space-between'} alignItems={'center'} height={'inherit'} paddingX={4}>
                <Text textStyle={'base'} color={!active ? 'main.secondary' : 'main.background'}>
                    {!active ? fistText : secondText}
                </Text>
                <IconButton
                    onClick={onClipboard}
                    size={'sm'}
                    height={'32px'}
                    icon={<CopyButton icon={!active ? 'copy_outline' : 'check-black'} transition={'0.5s all'} />}
                    variant={!active ? 'secondary' : 'light'}
                />
            </Flex>
        </Box>
    );
};

export default EmailClipboard;
