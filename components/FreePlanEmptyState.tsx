import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import DashboardShell from './DashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box
      backgroundColor="white"
      textAlign="center"
    >
      <Heading as="h2" color="black" size="md">
        Get feedback on your site instantly.
      </Heading>
      <Text color="black">Start today, then grow with us.</Text>
      <Button>Upgrade to Starter</Button>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
