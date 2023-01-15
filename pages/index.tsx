import Head from 'next/head'
import { Button, Heading, Text, Code } from '@chakra-ui/react';
import { useAuth } from 'hooks/auth';

export default function Home() {
  const { user, signUpWithGoogle, signOut } = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Heading as="h1">Fast Feedback</Heading>
        <Text>
          Current user: <Code>{user ? user.email : 'unauthenticated'}</Code>
        </Text>
        {user ? (
          <Button onClick={() => signOut()}>signOut</Button>
        ) : (
          <Button onClick={() => signUpWithGoogle()}>signup</Button>
        )}
      </main>
    </>
  )
}
