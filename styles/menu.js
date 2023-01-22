import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
    button: {},
    list: {
        p: '4',
        borderRadius: '24px',
        border: '2px solid var(--chakra-colors-brand-tertiary)',
        bg: 'selectBG.foreground',
    },
    item: {
        color: 'gray.200',
        bg: 'selectBG.foreground',
        borderRadius: '24px',
        _hover: {
            bg: 'selectBG.500',
        },
        _focus: {
            bg: 'selectBG.500',
        },
    },
    groupTitle: {},
    command: {},
    divider: {},
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
