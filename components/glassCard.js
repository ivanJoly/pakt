import { forwardRef, Box } from '@chakra-ui/react';

const GlassCard = forwardRef(({ children, ref, ...props }) => {
    return (
        <Box layerStyle="glass" overflow={'hidden'} position={'relative'} ref={ref} {...props}>
            {children}
        </Box>
    );
});

export default GlassCard;
