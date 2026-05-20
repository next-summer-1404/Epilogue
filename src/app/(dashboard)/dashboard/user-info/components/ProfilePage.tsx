'use client';

import React, { useState } from "react";
import ProfileImageSection from "./ProfileImageSection";
import PersonalInfoSection from "./PersonalInfoSection";
import SecuritySection from "./SecuritySection";
import ProfileModal from "./ProfileModal";

export default function ProfilePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-[19px] overflow-x-auto bg-white p-4 rounded-lg shadow 
">
            <ProfileImageSection onEdit={() => setIsModalOpen(true)} />

          <div className='w-[100%] flex items-center justify-center  mt-[40px] border border-dashed border-[#88888842]'></div>


            <PersonalInfoSection />

          <div className='w-[100%] flex items-center justify-center  mt-[40px] border border-dashed border-[#88888842]'></div>


            <SecuritySection />

            <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
