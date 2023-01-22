import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const base = definePartsStyle({
    field: {
        border: '1px solid',
        borderColor: 'brand.primary',
        backgroundColor: 'transparent',
        borderRadius: '24px',
        lineHeight: '32px',
        letterSpacing: '0.1px',
        fontWeight: '300',
        _placeholder: {
            color: 'gray.400',
        },
        _disabled: {
            borderColor: 'grey',
            boxShadow: '0 0 0 1px grey',
        },
        _hover: {
            borderColor: 'brand.primary',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
        },
        _focus: {
            borderColor: 'brand.tertiary',
            boxShadow: '0 0 0 1px var(--chakra-colors-brand-tertiary)',
        },
        _after: {
            padding: '8px !important',
        },
    },
});

export const inputTheme = defineMultiStyleConfig({
    variants: { base },
    defaultProps: {
        variant: 'base',
    },
});
