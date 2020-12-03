import React from 'react';
import { Box } from 'rebass/styled-components';
import { Divider } from '@material-ui/core';

export const BoxContentMobile = ({ children, withBorder, ...rest }) => (
    <Box width={1} className="visible-xs" py={2}>
        <Box {...rest} px={3}>
            {children}
        </Box>
        {withBorder && (
            <Box mx={2}>
                <Divider />
            </Box>
        )}
    </Box>
);

export const BoxContent = ({ children, withBorder, ...rest }) => (
    <Box {...rest}>
        <Box px={[3, 4, 5]}>{children}</Box>
        {withBorder && (
            <Box mx={[2, 4]}>
                <Divider />
            </Box>
        )}
    </Box>
);
