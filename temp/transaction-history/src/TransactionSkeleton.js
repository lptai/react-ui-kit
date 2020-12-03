import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Flex, Box } from 'rebass/styled-components';

import { BoxContent, BoxContentMobile } from './BoxContent';

const skeletons = (type) => Array(4)
    .fill(type)
    .map((item, idx) => `${idx}-${item}-skeleton`);

export const TransactionSkeletonMobile = () => (
    <Fragment>
        <Box height="28px" className="visible-xs" py={1} backgroundColor="#d8d8d8">
            <BoxContent />
        </Box>
        {skeletons('mobile').map((item, idx) => (
            <BoxContentMobile key={item} height="53px" py={2} withBorder={skeletons().length - 1 !== idx}>
                <Flex justifyContent="space-between">
                    <Box width="30%">
                        <Skeleton height={10} />
                    </Box>
                    <Box width="40%">
                        <Skeleton height={10} />
                    </Box>
                </Flex>
                <Flex justifyContent="space-between">
                    <Box width="40%">
                        <Skeleton height={10} />
                    </Box>
                    <Box width="30%">
                        <Skeleton height={10} />
                    </Box>
                </Flex>
            </BoxContentMobile>
        ))}
    </Fragment>
);

const CellSkeleton = () => <Skeleton variant="rect" width="60%" height={10} />;

const TransactionSkeleton = ({ columns }) => (
    <Box className="hidden-xs">
        <Box height="30px" py={1} backgroundColor="#d8d8d8">
            <BoxContent />
        </Box>
        {skeletons('desktop').map((item, idx) => (
            <BoxContent key={item} py={2} height="56px" withBorder={skeletons().length - 1 !== idx}>
                <Flex py={2}>
                    {columns.map(col => (
                        <Box key={col.key} width={col.width}>
                            {col.CellLoading ? <col.CellLoading /> : <CellSkeleton />}
                        </Box>
                    ))}
                </Flex>
            </BoxContent>
        ))}
    </Box>
);

export default ({ columns }) => (
    <Fragment>
        <TransactionSkeletonMobile columns={columns} />
        <TransactionSkeleton columns={columns} />
    </Fragment>
);
