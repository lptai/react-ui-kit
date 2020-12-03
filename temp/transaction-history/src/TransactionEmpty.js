import React from 'react';
import { Box } from 'rebass/styled-components';

import transactionsIcon from 'assets/images/account_details/payments-statement.svg';

export default ({ transactionsEmptyText }) => (
    <Box p={4} className="text-center">
        <Box mb={4}>{transactionsEmptyText || 'No transaction made yet'}</Box>
        <img src={transactionsIcon} alt="Empty" style={{ width: '48px', opacity: 0.5 }} />
    </Box>
);
