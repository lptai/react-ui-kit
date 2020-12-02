import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Box } from 'rebass/styled-components';
import styled from 'styled-components';

import transactionsIcon from 'assets/images/account_details/payments-statement.svg';

const Icon = styled.img`
    height: 72px;
    opacity: 1;
`;

export default ({ tryAgain }) => (
    <Box p={4} className="text-center">
        <Box p={2} className="error-text font-medium">
            We couldn't load your transaction history at this time. <br />
            Please try again.
        </Box>
        <Box p={2}>
            <Icon src={transactionsIcon} alt="Error" />
        </Box>
        <Box p={2}>
            <Button onClick={tryAgain}>Try again</Button>
        </Box>
    </Box>
);
