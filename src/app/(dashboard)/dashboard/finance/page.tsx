'use client';
import DashboardLayout from '../../DashboardLayout';
import Container from '../../components/common/Container';
import RecentReservationsTable from './components/RecentReservationsTable';
import DashboardCards from './components/DashboardCards';


const sampleCourses = [
  {
    courseId: 1,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    levelName: "تایید شده",
    tumbImageAddress: "",
  },
  {
    courseId: 2,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    levelName: "تایید شده",
    tumbImageAddress: "",
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="p-4 space-y-4">

          <RecentReservationsTable reservations={sampleCourses} />
        </div>
      </Container>
    </DashboardLayout>
  );
}
