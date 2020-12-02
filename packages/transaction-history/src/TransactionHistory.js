import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';

import { ReactComponent as TransactionIcon } from 'assets/images/account_details/payments-statement.svg';
import TransactionTable from 'components/transaction-history/TransactionTable';
import { Divider } from '@material-ui/core';

import { mediaQueries } from 'utils/theme/index';

const TransactionIconStyle = styled.div`
    & svg {
        margin-right: 8px;
        height: 48px;
        width: 48px;
        ${mediaQueries.tablet`
            margin-right: 32px;
        `}
    }
`;

export const TransactionHistory = ({
    columns,
    name,
    transactions = [],
    customRow,
    error,
    loading,
    onSelectTransaction,
    tryAgain,
    transactionsEmptyText,
    groupBy,
}) => (
    <div className="box">
        <Flex py={3} px={[3, 4, 5]} alignItems="center">
            <TransactionIconStyle>
                <TransactionIcon />
            </TransactionIconStyle>
            <Box
                fontSize={['14px', '16px']}
                className="font-medium">
                {name}
            </Box>
        </Flex>
        <Box mx={[2, 4]} className="hidden-xs">
            <Divider />
        </Box>
        <TransactionTable
            transactions={transactions}
            columns={columns}
            customRow={customRow}
            error={error}
            loading={loading}
            onSelectTransaction={onSelectTransaction}
            tryAgain={tryAgain}
            transactionsEmptyText={transactionsEmptyText}
            groupBy={groupBy}
        />
    </div>
);

TransactionHistory.defaultProps = {
    groupBy: 'createdTime',
}

export default TransactionHistory;
