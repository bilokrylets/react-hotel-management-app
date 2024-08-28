import styled from 'styled-components';
import { useRecentStays } from './hooks/useRecentStays';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './hooks/useRecentBookings';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoadingStay } = useRecentStays();

  if (isLoading && isLoadingStay) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's Activity </div>
      <div>chart stay </div>
      <div></div>
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
