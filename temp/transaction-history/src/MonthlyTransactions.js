import React, { Fragment } from 'react';
import moment from 'moment';
import { Flex, Box } from 'rebass/styled-components';
import { BoxContent } from './BoxContent';

const Cell = ({ col, item }) =>
    typeof col.Cell === 'function' ? col.Cell(item[col.accessor] || item) : item[col.accessor];

const TransactionRow = ({ columns, item }) => (
    <Flex py={3}>
        {columns.map(col => (
            <Box key={col.key} width={col.width}>
                <Cell item={item} col={col} />
            </Box>
        ))}
    </Flex>
);

export const MonthlyTransactions = ({
    month,
    transactions,
    columns,
    customRow,
    onSelectTransaction,
}) => (
    <Fragment key={month}>
        <Box py={1} backgroundColor="#d8d8d8">
            <BoxContent>
                <Box className="font-bold">{moment(month).format('MMMM YYYY')}</Box>
            </BoxContent>
        </Box>
        {transactions.map((transaction, idx, arr) => {
            const key = `monthly-trans-${idx}`;
            const defaultRow = (
                <BoxContent className="hidden-xs" withBorder={idx !== arr.length - 1}>
                    <TransactionRow columns={columns} item={transaction} />
                </BoxContent>
            );

            return (
                <div
                    onClick={() => onSelectTransaction(transaction)}
                    onKeyDown={() => {}}
                    role="button"
                    tabIndex={0}
                    key={key}>
                    {customRow
                        ? customRow({ transaction, idx, monthlyArr: arr, defaultRow })
                        : defaultRow}
                </div>
            );
        })}
    </Fragment>
);
