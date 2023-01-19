import Head from 'next/head';
import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';
import EmptyState from '../components/EmptyState';

const Home = () => {
  const { user, signUpWithGoogle, signOut } = useAuth();

  if (!user) {

  }

  return (
    <Flex as='main' direction='column'>
      <Head>
        <title>Fast Feedback</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {user && (
        <EmptyState />
      )}
      <Text>
        Current user: <Code>{user ? user.email : 'unauthenticated'}</Code>
      </Text>
      {user ? (
        <Button onClick={() => signOut()}>signOut</Button>
      ) : (
        <Button onClick={() => signUpWithGoogle()}>signup</Button>
      )}
    </Flex>
  );
};

export default Home;
