import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const outline = defineStyle({
    border: '1px',
    borderColor: 'brand.primary',
    borderRadius: 20,
    lineHeight: '32px',
    letterSpacing: '0.1px',
    fontWeight: '300',
    boxShadow: '0 0 0 1px var(--chakra-colors-brand-primary)',
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
});

export const textareaTheme = defineStyleConfig({
    variants: { outline },
});
