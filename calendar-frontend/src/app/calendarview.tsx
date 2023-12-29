import { useState } from 'react'

/**
 * 
 * @param label The label representing the time.
 * @returns The text with the label.
 */

function TimeLabel({ label }: { label: string }) {
  return (
    <div className="text-stone-800 text-center text-xs grow whitespace-nowrap">
      {label}
    </div>
  );
}

/**
 * 
 * @param label The label representing the time.
 * @returns The label next to a horizontal line.
 */

function HourUnit({ label }: { label: string }) {
  return (
    <div className="items-stretch flex justify-between gap-0 mt-8 max-md:max-w-full max-md:flex-wrap">
      <TimeLabel label={label} />
      <div className="bg-stone-600 self-center w-[948px] shrink-0 max-w-full h-px my-auto" />
    </div>
  );
}

/**
 * 
 * @returns A box representing an event on the calendar.
 */

function EventBox() {
  return (<div className="bg-amber-700 flex w-[609px] shrink-0 max-w-full h-[26px] flex-col ml-3 mt-1 self-start" />);
}

/**
 * 
 * @param hour The hour to be converted into a string.
 * @returns The civil time represented by the hour.
 */

function IntTimeToString(hour: number) {
  let hour_num = hour % 12;
  let hour_num_str = hour_num === 0 ? "12" : hour_num.toString();
  hour_num_str = hour_num_str.concat(hour >= 12 ? ":00 PM" : ":00 AM");
  return hour_num_str;
}

/**
 * 
 * @param lower The earliest hour to be displayed.
 * @param upper The latest hour to be displayed.
 * @throws Throws error if lower or upper bounds are not between 0 and 24, or if lower bound is greater than or equal to upper bound.
 * @returns A list of `HourUnit` components in the given range.
 */

function TimeLabelList({ lower, upper }: { lower: number, upper: number }) {
  if (lower < 0 || lower >= 24) {
    throw new Error("Lower bound for calendar must be between 0:00 and 23:59!");
  }
  if (upper <= 0 || upper > 24) {
    throw new Error("Upper bound for calendar must be between 0:01 and 0:00!");
  }
  if (lower >= upper) {
    throw new Error("Lower bound must be strictly less than upper bound!");
  }

  const times_num = Array.from({ length: upper - lower + 1 }, (v, i) => lower + i);
  const tllist = times_num.map((hour) => <HourUnit label={IntTimeToString(hour)} />);
  return tllist;
}

/**
 * 
 * @returns The view of the calendar content.
 */

export default function CalendarView() {
  return (
    <div className="justify-end items-stretch bg-yellow-50 flex w-full flex-col max-md:max-w-full">
      <div className="justify-center text-stone-800 text-center text-8xl font-bold mix-blend-multiply w-full items-stretch bg-yellow-50 px-5 max-md:max-w-full max-md:text-4xl h-auto py-2">
        <p>DECEMBER 17, 2023</p>
      </div>
      <div className="bg-orange-300 self-center flex w-full max-w-[1096px] flex-col items-stretch pl-6 pr-14 pt-12 pb-5 rounded-[29px] max-md:max-w-full max-md:px-5">
        <TimeLabelList lower={0} upper={24} />
      </div>
    </div>
  );
}