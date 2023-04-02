import { Flex, Heading, Skeleton, Stack } from "@chakra-ui/react";
import React, { ReactNode } from 'react';

export const SkeletonLoader = ({ loading = false, children }: { loading: boolean, children: ReactNode }) => (
    <Stack padding={4} spacing={1}>
        <Skeleton height='40px' isLoaded={loading}>
        </Skeleton>
        <Skeleton
            height='40px'
            isLoaded={loading}
            bg='green.500'
            color='white'
            fadeDuration={1}
        >
            {children}
        </Skeleton>
        <Skeleton
            height='40px'
            isLoaded={loading}
            fadeDuration={4}
            bg='blue.500'
            color='white'
        >
        </Skeleton>
    </Stack>
);

