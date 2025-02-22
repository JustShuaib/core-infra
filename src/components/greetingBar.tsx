import CalendarIcon from "@/icons/calendar";
import formatDate from "@/utils/getTodaysDate";
export default function GreetingBar() {
  const userName = "Nasser";

  return (
    <div>
      <div className="flex items-center justify-between -mt-2 mb-2">
        <p className="text-[#121212] text-lg font-bold">
          Hi {userName}, what would you like to do today?
        </p>

        <div className="flex items-center text-sm gap-x-1 border border-[#D0D5DD] rounded-md p-2">
          <CalendarIcon /> Today
          <span className="text-gray-300">|</span>
          <span>{formatDate()}</span>
        </div>
      </div>
      <p className="text-sm">
        <span className="font-bold">Last login:</span> 26/11/2024 14:39:58
      </p>
    </div>
  );
}
