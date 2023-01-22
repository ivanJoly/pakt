import { accordionAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
    container: {
        borderColor: 'rgb(255 255 255 / 10%)',
    },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
