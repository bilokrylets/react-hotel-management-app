import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

type Props = {
  bookings:
    | { created_at: string; totalPrice: number; extrasPrice: number }[]
    | undefined;
  confirmedStays:
    | {
        numNights: number;
      }[]
    | undefined;
  numDays: number;
  cabinCount: number | undefined;
};

function Stats({ bookings, confirmedStays, numDays, cabinCount }: Props) {
  const numBookings = bookings?.length;
  const sales = bookings?.reduce(
    (acc, cur) => acc + (cur ? cur.totalPrice : 0),
    0,
  );
  const checkIns = confirmedStays?.length;
  const occupation = confirmedStays
    ? confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
      (numDays * (cabinCount ? cabinCount : 1))
    : 0;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  );
}
export default Stats;
