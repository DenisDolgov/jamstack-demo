import React, { PropsWithChildren } from 'react';
import {
  Flex,
  Stack,
  Link,
  Avatar,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Container,
} from '@chakra-ui/react';
import { NotAllowedIcon } from '@chakra-ui/icons';
import { useAuth } from 'hooks/auth';

const DashboardShell = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();

  return (
    <Flex direction="column" minH="100%">
      <Flex
        backgroundColor="white"
        alignItems="center"
        justifyContent="space-between"
        p={4}
      >
        <Stack spacing={4} isInline alignItems="center">
          <NotAllowedIcon />
          <Link>Feedback</Link>
          <Link>Sites</Link>
        </Stack>
        <Stack spacing={4} isInline alignItems="center">
          <Link>Account</Link>
          <Avatar size="sm" src={user?.photoURL ?? undefined} />
        </Stack>
      </Flex>
      <Box backgroundColor="gray.100" p={4} flexGrow={1}>
        <Container maxW={800}>
          <Breadcrumb color="gray.700" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink>Lorem Ipsum</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading mb={4}>Heading title</Heading>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardShell;
