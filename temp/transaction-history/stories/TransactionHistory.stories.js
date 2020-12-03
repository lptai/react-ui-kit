import React, { Fragment } from 'react';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'rebass/styled-components';

import { formatToSouthAfricaDateTime, formatCurrency } from 'utils/format';
import bulkPaymentData from 'components/bulk-payment/stories/bulk-payment-data.json';
import theme from 'utils/theme';

import TransactionHistory from '../TransactionHistory';

export default { title: 'TransactionHistory' };

const columns = [
    {
        Header: 'Date',
        accessor: 'createdTime',
        width: '20%',
        Cell: value => moment(value).format('MMMM YYYY'),
    },
    {
        Header: 'Description',
        accessor: 'description',
        width: '35%',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
        width: '23%',
    },
    {
        Header: 'Status',
        accessor: 'status',
        width: '20%',
    },
];

const Row = ({ transaction, idx, monthlyArr, defaultRow }) => (
    <Fragment>
        {defaultRow}
        <MobileRow withBorder={idx !== monthlyArr.length - 1} item={transaction} />
    </Fragment>
);

const BoxContent = ({ children, withBorder, ...rest }) => (
    <Flex
        {...rest}
        mx={2}
        sx={{
            borderBottom: withBorder ? '1px solid #CCC' : 'none',
        }}>
        <Box px={2}>{children}</Box>
    </Flex>
);

const MobileRow = ({ item, withBorder }) => (
    <BoxContent withBorder={withBorder} py={2} flexDirection="column" className="visible-xs">
        <Flex justifyContent="space-between">
            <Box className="font-medium" minWidth="100px">
                {formatToSouthAfricaDateTime(item.createdTime, 'D MMM Y')}
            </Box>
            <Box textAlign="right">{item.description}</Box>
        </Flex>
        <Flex justifyContent="space-between">
            <Box>
                <span>{formatCurrency(item.amount)}</span>
            </Box>
            <Box textAlign="right">
                <span>{item.status}</span>
            </Box>
        </Flex>
    </BoxContent>
);

export const withLoading = () => (
    <ThemeProvider theme={theme}>
        <TransactionHistory
            name="Bulk payment"
            loading
            transactions={[]}
            columns={columns}
            customRow={Row}
        />
    </ThemeProvider>
);

export const withData = () => (
    <ThemeProvider theme={theme}>
        <TransactionHistory
            name="Bulk payment"
            transactions={bulkPaymentData}
            columns={columns}
            customRow={Row}
        />
    </ThemeProvider>
);

export const withEmptyContent = () => (
    <ThemeProvider theme={theme}>
        <TransactionHistory
            name="Bulk payment"
            transactions={[]}
            columns={columns}
            customRow={Row}
        />
    </ThemeProvider>
);

export const withError = () => (
    <ThemeProvider theme={theme}>
        <TransactionHistory
            name="Bulk payment"
            error
            transactions={[]}
            columns={columns}
            customRow={Row}
        />
    </ThemeProvider>
);
