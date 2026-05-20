import React, { useState } from "react";

type NotificationModalProps = {
  open: boolean;
  onClose: () => void;
};

const itemsList: string[] = [
  "نوتیفیکیشن رزرو",
  "نوتیفیکیشن پرداخت",
  "نوتیفیکیشن تخفیف",
  "نوتیفیکیشن سیستمی",
];

export default function NotificationModal({
  open,
  onClose,
}: NotificationModalProps): JSX.Element | null {
  if (!open) return null;

  const handleInnerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const [itemsState, setItemsState] = useState(itemsList.map(() => true));

  const toggleItem = (index: number) => {
    setItemsState((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="تنظیمات نوتیفیکیشن"
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[516px] h-[341px] p-[19px] flex flex-col"
        onClick={handleInnerClick}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-[#88888887] border-b border-dashed pb-3">
          <div className="text-lg font-medium">تنظیمات نوتیفیکیشن</div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded-[64px] hover:bg-red-50"
          >
            ✕ <span>بستن</span>
          </button>
        </div>

        {/* List */}
        <div className="flex-1 flex flex-col gap-[19px] mt-4">
          {itemsList.map((label, index) => (
            <div key={index} className="flex items-center justify-between">
              <span>{label}</span>

              {/* Toggle switch */}
              <div
                className="w-16 h-9  bg-gray-300 rounded-full relative cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                {/* فعال = سبز سمت چپ, غیرفعال = سمت راست */}
                <div
                  className={`absolute  top-0.5 w-8 h-8 rounded-full transition-all shadow-md ${
                    itemsState[index]
                      ? "left-1 bg-[#8CFF45]"
                      : "right-1 bg-white"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
