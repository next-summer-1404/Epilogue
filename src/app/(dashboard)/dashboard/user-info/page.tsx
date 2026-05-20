'use client';

import Container from "../../components/common/Container";
import DashboardLayout from "../../DashboardLayout";
import ProfilePage from "./components/ProfilePage";

export default function UserInfoPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="p-4 space-y-4">
          <ProfilePage />
        </div>
      </Container>
    </DashboardLayout>
  );
}
