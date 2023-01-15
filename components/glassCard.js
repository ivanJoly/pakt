import { forwardRef, Box } from '@chakra-ui/react';

const GlassCard = forwardRef(({ children, ref, width, height, ...props }) => {
    return (
        <Box position={'relative'} borderRadius={'16px'} overflow={'hidden'} width={width} height={height} ref={ref} {...props}>
            <Box layerStyle="glass" position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} zIndex={0} width={'inherit'} height={'inherit'}></Box>
            <Box zIndex={1} position={'relative'} width={'inherit'} height={'inherit'}>
                {children}
            </Box>
        </Box>
    );
});

export default GlassCard;
