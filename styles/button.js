export const buttonTheme = {
    baseStyle: {
        background: '#2E56ff',
        color: '#FFFFFF',
        borderRadius: 50,
        lineHeight: 1,
        _hover: {
            background: '#0031FF',
        },
        _active: {
            background: '#0031FF',
        },
        _disabled: {
            background: 'rgba(46, 86, 255, 0.3)',
        },
    },
    sizes: {
        sm: {
            h: '40px',
            fontSize: 'xs',
            px: '40px',
        },
    },
    variants: {
        base: {},
        secondary: {
            backgroundColor: '#A7F0B7',
            color: '#020207',
            _hover: {
                backgroundColor: '#A7F0B7cc',
            },
            _active: {
                backgroundColor: '#A7F0B7cc',
            },
            _disabled: {
                background: '#A7F0B7cc',
            },
        },
        outline: {
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            _hover: {
                backgroundColor: '#d7d7d730',
            },
            _active: {
                backgroundColor: '#d7d7d730',
            },
            _disabled: {
                background: '#d7d7d730',
            },
        },
        light: {
            backgroundColor: '#FFFFFF',
            color: '#020207',
            _hover: {
                backgroundColor: '#d7d7d730',
                color: '#FFFFFF',
            },
            _active: {
                backgroundColor: '#d7d7d730',
                color: '#FFFFFF',
            },
            _disabled: {
                background: '#d7d7d730',
                color: '#FFFFFF',
            },
        },
        IconButtonOutlinePrimary: {
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: 'brand.tertiary',
            color: '#020207',
            '&>svg': { color: 'brand.tertiary' },
            _disabled: {
                backgroundColor: 'transparent',
                borderColor: 'grey',
                '&>svg': { color: 'grey !important' },
            },
            _hover: {
                backgroundColor: '#A7F0B7cc',
                '&>svg': { color: 'black' },
            },
        },
        IconButtonOutlineLight: {
            backgroundColor: 'transparent',
            border: '1px solid',
            borderColor: 'white',
            color: '#020207',
            '&>svg': { color: 'white' },
            _disabled: {
                backgroundColor: 'transparent',
                borderColor: 'grey',
                '&>svg': { color: 'grey !important' },
            },
            _hover: {
                backgroundColor: 'white',
                '&>svg': { color: 'black' },
            },
        },
    },
    defaultProps: {
        variant: 'base',
    },
};
