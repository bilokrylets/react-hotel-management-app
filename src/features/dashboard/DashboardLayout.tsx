import styled from 'styled-components';
import { useRecentStays } from './hooks/useRecentStays';
import Spinner from '../../ui/Spinner';
import { useRecentBookings } from './hooks/useRecentBookings';
import Stats from './Stats';
import { useCabins } from '../cabins/hooks/useCabins';
import SalesChart from './SalesChart';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoadingStay,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoading || isLoadingStay || isLoadingCabins) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length || 0}
      />
      <div>Today's Activity </div>
      <div>chart stay </div>
      <SalesChart bookings={bookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
