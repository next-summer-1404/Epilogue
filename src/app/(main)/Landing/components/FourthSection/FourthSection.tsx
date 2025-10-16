import React from 'react'
import FileContainer from '../SecondSection/FileContainer'

const FourthSection = () => {
    return (
        <div className='w-full flex flex-col py-[80px] rounded-b-[64px] gap-6 bg-[#232323]'>
            {/* متن‌های بالا */}
            <div className='flex flex-col gap-6 items-center justify-center text-center px-4'>
                <p className='text-[#8CFF45] text-[16px]'>درباره ما</p>
                <p className='text-[#FFFFFF] text-[32px]'>دلتا رو بیشتر بشناس !</p>
                <p className='text-[#FFFFFF] text-[16px] max-w-[600px] leading-relaxed'>
                    تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد.
                </p>
            </div>

            {/* کارت‌ها */}
            <div className='flex flex-col md:flex-row gap-6 px-4 justify-center'>
                {/* ستون سمت چپ */}
                <div className='flex flex-col gap-5 md:w-[425px] w-full'>
                    <FileContainer
                        background={""}
                        radius="md"
                        size="md"
                        label={""}
                        labelHeight="40px"
                        labelWidth="150px"
                        tagHeight="40px"
                        width="100%"
                        height="190px"
                        classNames={{
                            base: "bg-[#393939] transition-all duration-300 rounded-[16px]",
                            innerLabel: "",
                            wrapperLabel: "bg-[#393939]",
                        }}
                    >
                        <div className="w-full h-full flex justify-center items-center pb-5 px-4">
                            <FileContainer
                                background={"#444444"}
                                radius="md"
                                size="md"
                                label={""}
                                labelHeight="30px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="421px"
                                height="150px"
                                classNames={{
                                    base: "bg-[#444444] transition-all duration-300 rounded-[12px]",
                                    innerLabel: "flex justify-center items-center",
                                    wrapperLabel: "",
                                }}
                            >
                                <div className="flex flex-col gap-5 text-[#FFFFFF] px-6 text-[18px]">
                                    <div className='w-10 h-10 rounded-[12px] bg-amber-50'></div>
                                    <div className='flex flex-col gap-2.5'>
                                        <p>+ 12000 خونه فعال</p>
                                        <p>خانه هایی که نظافت و امنیت شان تامین شده !</p>
                                    </div>
                                </div>
                            </FileContainer>
                        </div>
                    </FileContainer>

                    <FileContainer
                        background={""}
                        radius="md"
                        size="md"
                        label={""}
                        labelHeight="40px"
                        labelWidth="150px"
                        tagHeight="40px"
                        width="100%"
                        height="190px"
                        classNames={{
                            base: "bg-[#393939] transition-all duration-300 rounded-[16px]",
                            innerLabel: "",
                            wrapperLabel: "bg-[#393939]",
                        }}
                    >
                        <div className="w-full h-full flex justify-center items-center pb-5 px-4">
                            <FileContainer
                                background={"#232323"}
                                radius="md"
                                size="md"
                                label={""}
                                labelHeight="30px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="421px"
                                height="150px"
                                classNames={{
                                    base: "bg-[#232323] transition-all duration-300 rounded-[12px]",
                                    innerLabel: "flex justify-center items-center",
                                    wrapperLabel: "",
                                }}
                            >
                                <div className="flex flex-col gap-5 text-[#FFFFFF] px-6 text-[18px]">
                                    <div className='w-10 h-10 rounded-[12px] bg-amber-50'></div>
                                    <div className='flex flex-col gap-2.5'>
                                        <p>+ 12000 خونه فعال</p>
                                        <p>خانه هایی که نظافت و امنیت شان تامین شده !</p>
                                    </div>
                                </div>
                            </FileContainer>
                        </div>
                    </FileContainer>
                </div>

                {/* ستون وسط بزرگ */}
                <FileContainer
                    background={""}
                    radius="md"
                    size="md"
                    label={""}
                    labelHeight="40px"
                    labelWidth="150px"
                    tagHeight="40px"
                    width="100%"
                    height="450px"
                    classNames={{
                        base: "bg-[#393939] transition-all duration-300 rounded-[16px]",
                        innerLabel: "",
                        wrapperLabel: "bg-[#393939]",
                    }}
                >
                    <div className="w-full h-full flex justify-center items-center pb-5 px-4">
                        <FileContainer
                            background={"#7569FF"}
                            radius="md"
                            size="md"
                            label={""}
                            labelHeight="30px"
                            labelWidth="120px"
                            tagHeight="40px"
                            width="412px"
                            height="400px"
                            classNames={{
                                base: "bg-[#7569FF] transition-all duration-300 rounded-[12px]",
                                innerLabel: "flex justify-center items-center",
                                wrapperLabel: "",
                            }}
                        >
                            <div className="flex flex-col gap-5 text-[#FFFFFF] px-6 text-[18px]">
                                <div className='py-14 h-[360px] gap-2.5 text-center'>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو د...</p>
                                </div>
                            </div>
                        </FileContainer>
                    </div>
                </FileContainer>

                {/* ستون سمت راست */}
                <div className='flex flex-col gap-5 md:w-[425px] w-full'>
                    <FileContainer
                        background={""}
                        radius="md"
                        size="md"
                        label={""}
                        labelHeight="40px"
                        labelWidth="150px"
                        tagHeight="40px"
                        width="100%"
                        height="190px"
                        classNames={{
                            base: "bg-[#393939] transition-all duration-300 rounded-[16px]",
                            innerLabel: "",
                            wrapperLabel: "bg-[#393939]",
                        }}
                    >
                        <div className="w-full h-full flex justify-center items-center pb-5 px-4">
                            <FileContainer
                                background={"#444444"}
                                radius="md"
                                size="md"
                                label={""}
                                labelHeight="30px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="421px"
                                height="150px"
                                classNames={{
                                    base: "bg-[#444444] transition-all duration-300 rounded-[12px]",
                                    innerLabel: "flex justify-center items-center",
                                    wrapperLabel: "",
                                }}
                            >
                                <div className="flex flex-col gap-5 text-[#FFFFFF] px-6 text-[18px]">
                                    <div className='w-10 h-10 rounded-[12px] bg-amber-50'></div>
                                    <div className='flex flex-col gap-2.5'>
                                        <p>+ 12000 خونه فعال</p>
                                        <p>خانه هایی که نظافت و امنیت شان تامین شده !</p>
                                    </div>
                                </div>
                            </FileContainer>
                        </div>
                    </FileContainer>

                    <FileContainer
                        background={""}
                        radius="md"
                        size="md"
                        label={""}
                        labelHeight="40px"
                        labelWidth="150px"
                        tagHeight="40px"
                        width="100%"
                        height="190px"
                        classNames={{
                            base: "bg-[#393939] transition-all duration-300 rounded-[16px]",
                            innerLabel: "",
                            wrapperLabel: "bg-[#393939]",
                        }}
                    >
                        <div className="w-full h-full flex justify-center items-center pb-5 px-4">
                            <FileContainer
                                background={"#232323"}
                                radius="md"
                                size="md"
                                label={""}
                                labelHeight="30px"
                                labelWidth="120px"
                                tagHeight="40px"
                                width="421px"
                                height="150px"
                                classNames={{
                                    base: "bg-[#232323] transition-all duration-300 rounded-[12px]",
                                    innerLabel: "flex justify-center items-center",
                                    wrapperLabel: "",
                                }}
                            >
                                <div className="flex flex-col gap-5 text-[#FFFFFF] px-6 text-[18px]">
                                    <div className='w-10 h-10 rounded-[12px] bg-amber-50'></div>
                                    <div className='flex flex-col gap-2.5'>
                                        <p>+ 12000 خونه فعال</p>
                                        <p>خانه هایی که نظافت و امنیت شان تامین شده !</p>
                                    </div>
                                </div>
                            </FileContainer>
                        </div>
                    </FileContainer>
                </div>
            </div>
        </div>
    )
}

export default FourthSection
