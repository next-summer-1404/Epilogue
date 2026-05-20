'use client';
import DashboardLayout from '../../DashboardLayout';
import Container from '../../components/common/Container';
import RecentReservationsTable from './components/RecentReservationsTable';

const sampleCourses = [
  {
    courseId: 1,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    passanger: "3",
    levelName: "تایید شده",
    payementStatus: "لغو شده",
    tumbImageAddress: "",
  },
  {
    courseId: 2,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    passanger: "3",
    levelName: "تایید شده",
    payementStatus: "تایید شده",
    tumbImageAddress: "",
  },
  {
    courseId: 1,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    passanger: "3",
    levelName: "تایید شده",
    payementStatus: "لغو شده",
    tumbImageAddress: "",
  },
  {
    courseId: 2,
    termName: "هتل سراوان رانین رشت",
    fullName: "12 مرداد - 1401 / 12:33",
    lastUpdate: "1،800،000تومان",
    passanger: "3",
    levelName: "تایید شده",
    payementStatus: "تایید شده",
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
