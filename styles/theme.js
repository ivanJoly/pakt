import { extendTheme, theme as base } from '@chakra-ui/react';

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: true,
    components: {
        Button: {
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
                // Make a variant, we'll call it `base` here and leave it empty
                base: {
                    // color: 'red',
                },
                secondary: {
                    //...define other variants
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
            },
            defaultProps: {
                variant: 'base',
            },
        },
    },
    colors: {
        main: {
            primary: '#FFFFFF',
            secondary: '#FBFBFB',
            background: '#020207',
        },
        brand: {
            primary: '#2E56ff',
            secondary: '#49B7B1',
            tertiary: '#A7F0B7',
            fourth: '#0F1B51',
        },
    },
    fonts: {
        heading: `Inter, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    textStyles: {
        subtitle: {
            lineHeight: '32px',
            letterSpacing: '0.1px',
            fontWeight: '300',
        },
    },
    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },
        glass: {
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        sphere: {
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(121,240,169,0.85) 0%, rgba(54,111,198,0.85) 54%, rgba(101,84,169,0.5018382352941176) 85%, rgba(23,86,180,0.5) 100%)',
            position: 'absolute',
            top: '25%',
            left: '25%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            zIndex: '1',
            opacity: '0.3',
        },
    },
    styles: {
        global: (props) => ({
            'html, body': {
                background: props.theme.colors.main.background,
                color: 'white',
            },
        }),
    },
});
