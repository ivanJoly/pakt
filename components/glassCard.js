import { forwardRef, Box } from '@chakra-ui/react';

const GlassCard = forwardRef((props, ref) => {
    const { children, width, height, isOnHoverActive = false } = props;

    return (
        <Box
            className="glassCard"
            ref={ref}
            position={'relative'}
            borderRadius={'16px'}
            overflow={'hidden'}
            width={width}
            height={height}
            transition={'0.35s all'}
            _hover={
                isOnHoverActive
                    ? {
                          transform: 'rotate(0deg)',
                      }
                    : ''
            }
            {...props}
        >
            <Box
                className="glassCardEffect"
                layerStyle="glass"
                position={'absolute'}
                top={'50%'}
                left={'50%'}
                transform={'translate(-50%, -50%)'}
                zIndex={0}
                width={'inherit'}
                height={'inherit'}
            ></Box>
            <Box className="glassCardWrapperChildren" zIndex={1} position={'relative'} width={'inherit'} height={'inherit'}>
                {children}
            </Box>
        </Box>
    );
});

export default GlassCard;
