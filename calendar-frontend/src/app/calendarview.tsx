import { useState } from 'react'

function TimeLabel({ label }: { label: string }) {
  return (
    <div className="text-stone-800 text-center text-xs grow whitespace-nowrap">
      {label}
    </div>
  );
}

function HourUnit({ label }: { label: string }) {
  return (
    <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
      <TimeLabel label={label} />
      <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
    </div>
  );
}

function EventBox() {
  return (<div className="bg-amber-700 flex w-[609px] shrink-0 max-w-full h-[26px] flex-col ml-3 mt-1 self-start" />);
}

export default function CalendarView() {
  return (
    <div className="justify-end items-stretch bg-yellow-50 flex w-full flex-col max-md:max-w-full">
      <div className="justify-center text-stone-800 text-center text-8xl font-bold mix-blend-multiply w-full items-stretch bg-yellow-50 px-5 max-md:max-w-full max-md:text-4xl h-auto py-2">
        <p>DECEMBER 17, 2023</p>
      </div>
      <div className="bg-orange-300 self-center flex w-full max-w-[1096px] flex-col items-stretch pl-6 pr-14 pt-12 pb-5 rounded-[29px] max-md:max-w-full max-md:px-5">
        <div className="flex justify-between gap-0 items-start max-md:max-w-full max-md:flex-wrap">
          <TimeLabel label="12:00 AM" />
          <div className="flex grow basis-[0%] flex-col items-stretch mt-2 max-md:max-w-full">
            <div className="bg-stone-600 shrink-0 h-px max-md:max-w-full" />
            <div className="bg-amber-700 flex w-[609px] shrink-0 max-w-full h-[26px] flex-col ml-3 mt-1 self-start" />
          </div>
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-2.5 max-md:max-w-full max-md:flex-wrap">
          <TimeLabel label="1:00 AM" />
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <HourUnit label="2:00 AM" />
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            3:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            4:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            5:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            6:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            7:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            8:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            9:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            10:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
        <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-stone-800 text-center text-xs whitespace-nowrap">
            11:00 AM
          </div>
          <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
        </div>
      </div>
    </div>
  );
}