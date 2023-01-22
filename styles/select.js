import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(selectAnatomy.keys);

const base = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'brand.primary',
        backgroundColor: 'transparent',
        borderRadius: '24px',
        padding: '24px',
        margin: '24px',
    },
    icon: {
        color: 'purple.400',
    },
});

export const selectTheme = defineMultiStyleConfig({
    variants: { base },
    defaultProps: {
        variant: 'base',
    },
});
