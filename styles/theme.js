import { extendTheme, theme as base } from '@chakra-ui/react';
import { textareaTheme } from './textArea';
import { inputTheme } from './input';
import { formTheme } from './form';
import { accordionTheme } from './accordion';
import { menuTheme } from './menu';
import { buttonTheme } from './button';

export const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: true,
    components: {
        Button: buttonTheme,
        Accordion: accordionTheme,
        Textarea: textareaTheme,
        Input: inputTheme,
        Form: formTheme,
        Menu: menuTheme,
    },
    colors: {
        main: {
            primary: '#FFFFFF',
            secondary: '#FBFBFB',
            background: '#020207',
            foreground: 'rgba(255, 255, 255, 0.2)',
        },
        brand: {
            primary: '#2E56ff',
            secondary: '#49B7B1',
            tertiary: '#A7F0B7',
            fourth: '#0F1B51',
        },
        selectBG: {
            foreground: '#0d0d0d',
            500: '#191818',
            300: '#191818',
        },
    },
    fonts: {
        heading: `Inter, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    textStyles: {
        base: {
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
            background: 'linear-gradient(153.32deg, rgba(160, 158, 255, 0.3) -65.62%, rgba(153, 150, 255, 0.19375) 13.48%, rgba(146, 143, 255, 0.1) 83.28%)',
            boxShadow: '0px 3.77132px 22.6279px -0.942829px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(6px)',
        },
        heroGlassCard: {},
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
            opacity: '0.15',
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
