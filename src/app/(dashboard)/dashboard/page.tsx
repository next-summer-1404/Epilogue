'use client';
import DashboardLayout from '../DashboardLayout';
import Container from '../components/common/Container';
import DashboardCards from './components/DashboardCards';
import DashboardStats from './components/DashboardStats';
import ProfileStatus from './components/ProfileStatus';
import RecentReservationsTable from './components/RecentReservationsTable';

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
          <DashboardCards cards={["کل املاک ها", "رزروهای فعال", "رزرو های در انتظار", "بازدید های امروز"]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <DashboardStats />
            <ProfileStatus />
          </div>
          <RecentReservationsTable reservations={sampleCourses} />
        </div>
      </Container>
    </DashboardLayout>
  );
}
