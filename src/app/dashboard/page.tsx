"use client";
import CardStatusDistribution from "@/components/cardStatusDistribution";
import GreetingBar from "@/components/greetingBar";
import Analytics from "@/components/analytics";
import MonthlyIssuanceChart from "@/components/monthlyIssuance";
import QuickAccess from "@/components/quickAccess";
import RecentCardRequests from "@/components/recentCardRequests";
import WeekIncome from "@/components/weekIncome";

export default function Dashboard() {
  return (
    <div className="p-4">
      <GreetingBar />
      <QuickAccess />
      <span className="my-4 flex gap-x-2 items-center">
        <span className="font-bold text-lg">Analytics</span>
        <hr className="flex-1" />
      </span>
      <Analytics />
      <div className="grid grid-cols-2 grid-rows-12 gap-4 my-4">
        <MonthlyIssuanceChart />
        <RecentCardRequests />
        <CardStatusDistribution />
        <WeekIncome />
      </div>
    </div>
  );
}
