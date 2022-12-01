import {useState} from 'react'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
} from '@chakra-ui/react';


export function Card(props) {

    const [clicked, setClicked] = useState(false)

    const onClickButton = ()=> {
        setClicked(!clicked);
    }

    return (
        <Center py={6}>
            <Box
                maxW={clicked ? '25vw': '270px'}
                w={'full'}
                bg={clicked ? 'purple': 'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        `https://picsum.photos/seed/200/200`
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={
                            `https://picsum.photos/seed/${props.user.name}/200/200`
                        }
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {props.user.name}
                        </Heading>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        onClick={onClickButton}
                        display={"flex"}
                        w={'full'}
                        mt={8}
                        bg={"purple.700"}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Follow
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}