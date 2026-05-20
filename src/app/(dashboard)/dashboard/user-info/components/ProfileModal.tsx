'use client';

import React from "react";

export default function ProfileModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#2E2E2E] p-6 rounded-2xl w-[90%] max-w-sm text-white relative">
        <h3 className="text-lg font-semibold mb-4">تغییر عکس پروفایل</h3>

        <input type="file" className="block w-full text-sm text-gray-300 mb-4" />

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 rounded-lg text-sm hover:bg-gray-500"
          >
            انصراف
          </button>
          <button className="px-4 py-2 bg-indigo-500 rounded-lg text-sm hover:bg-indigo-600">
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
}
