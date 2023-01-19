import { useAuth } from 'hooks/auth';
import EmptyState from 'components/EmptyState';

const Dashboard = () => {
  const { user, signUpWithGoogle, signOut } = useAuth();

  if (!user) {
    return 'Loading...';
  }

  return <EmptyState />;
};

export default Dashboard;
