import {
    Box,
    Button,
    Image,
    Container,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Card,
    Stack,
    CardBody,
    Heading,
    CardFooter,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export function TenqCard({ title, intro, link }) {


    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                _hover={{
                    bg: '#66D489',
                    color: 'white',
                }}
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{title}</Heading>

                        <Text py='2'>
                            {intro}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Link href={link}>
                            <Button variant='solid' colorScheme='blue'>
                                Read More
                            </Button>
                        </Link>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    );
}

