'use client';

export default function ProfileImageSection({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="relative flex items-center p-4 rounded-2xl">
      {/* بخش راست - عنوان و توضیح */}
      <div className="flex flex-col gap-2 text-right">
        <h2 className="text-lg font-semibold">عکس نمایه شما</h2>
        <p className="text-sm text-gray-500">می‌توانید عکس نمایه خود را تغییر دهید</p>
      </div>

      {/* دکمه وسط */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <button
          onClick={onEdit}
          className="w-[120px] h-[120px] rounded-full text-sm bg-[#D9D9D9] flex justify-center items-center hover:bg-[#c8c8c8] transition"
        >
          تغییر عکس
        </button>
      </div>

    </div>
  );
}
