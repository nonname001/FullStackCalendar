import Image from 'next/image'
import CalendarView from './calendarview'

export default function Home() {
  return (
    <div className="justify-center items-stretch bg-white flex flex-col">
      <nav className="bg-zinc-300 top-0 flex min-h-[97px] w-full sticky max-md:max-w-full z-50" />
      <CalendarView />
    </div>
  );
}
