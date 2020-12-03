import React, { Fragment, useState } from 'react';
import { Box, Flex } from 'rebass/styled-components';
import Button from 'react-bootstrap/lib/Button';
import { formatToSouthAfricaDateTime } from 'utils/format';

import Empty from './TransactionEmpty';
import Error from './TransactionError';
import Loading from './TransactionSkeleton';
import { MonthlyTransactions } from './MonthlyTransactions';
import { BoxContent } from './BoxContent';

const EndingSection = ({ isShowLoadMore, loadMore }) => (
    <Flex p={3} justifyContent="center">
        {isShowLoadMore ? <Button onClick={loadMore}>Load more transactions</Button> : 'End of history.'}
    </Flex>
);

const mapTransactionByMonth = ({ transactions, field }) =>
    transactions.reduce((acc, item) => {
        const month = formatToSouthAfricaDateTime(item[field], 'YYYY-MM');
        acc[month] = (acc[month] || []).concat(item);
        return acc;
    }, {});

export const TransactionContent = ({
    loading,
    error,
    tryAgain,
    transactions,
    columns,
    customRow,
    maxItemPerPage = 10,
    onSelectTransaction,
    transactionsEmptyText,
    groupBy,
}) => {
    const [nbOfItems, setNbOfItems] = useState(maxItemPerPage);
    if (loading) {
        return <Loading columns={columns} />;
    }

    if (error) {
        return <Error tryAgain={tryAgain} />;
    }

    if (transactions.length === 0) {
        return <Empty transactionsEmptyText={transactionsEmptyText} />;
    }

    const transactionByMonth = mapTransactionByMonth({
        transactions: transactions.slice(0, nbOfItems),
        field: groupBy,
    });

    const isShowLoadMore = nbOfItems < transactions.length;

    return (
        <Fragment>
            {Object.keys(transactionByMonth).map(month => (
                <MonthlyTransactions
                    key={month}
                    month={month}
                    columns={columns}
                    customRow={customRow}
                    transactions={transactionByMonth[month]}
                    loading={loading}
                    onSelectTransaction={onSelectTransaction}
                />
            ))}
            <EndingSection
                isShowLoadMore={isShowLoadMore}
                loadMore={() => setNbOfItems(nbOfItems + maxItemPerPage)}
            />
        </Fragment>
    );
};

export const Header = ({ columns }) => (
    <Flex fontSize={['14px', '16px']} py={3} className="font-bold">
        {columns.map(col => (
            <Box key={col.key} width={col.width}>
                {typeof col.Header === 'function' ? col.Header() : col.Header}
            </Box>
        ))}
    </Flex>
);

const TransactionTable = ({
    columns,
    customRow,
    loading,
    error,
    tryAgain,
    transactions,
    maxItemPerPage,
    onSelectTransaction,
    transactionsEmptyText,
    groupBy
}) => (
    <Fragment>
        <BoxContent className="hidden-xs">
            <Header columns={columns} />
        </BoxContent>
        <Box fontSize={['14px', '16px']} minHeight="200px">
            <TransactionContent
                loading={loading}
                error={error}
                columns={columns}
                customRow={customRow}
                transactions={transactions}
                maxItemPerPage={maxItemPerPage}
                onSelectTransaction={onSelectTransaction}
                tryAgain={tryAgain}
                transactionsEmptyText={transactionsEmptyText}
                groupBy={groupBy}
            />
        </Box>
    </Fragment>
);

export default TransactionTable;
