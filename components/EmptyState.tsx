import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteDialog from './AddSiteDialog';

const EmptyState = () => (
  <DashboardShell>
    <Box
      backgroundColor="white"
      textAlign="center"
      borderRadius={8}
      p={16}
    >
      <Heading as="h2" size="md" mb={2}>You haven`t added any sites.</Heading>
      <Text mb={4}>Welcome. Let`s get started.</Text>
      <AddSiteDialog />
    </Box>
  </DashboardShell>
);

export default EmptyState;
