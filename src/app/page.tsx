import Link from "next/link"
import { Input } from "@/components/ui/input"

import { ModeToggle } from '@/components/ui/toggle-mode'
import { UserNav } from '@/components/user-nav'
import DashboardPage from '@/components/dashboard-page'

export default function Home() {
  return (

    <div className="flex flex-col">
      {/* <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-accent/30 px-6 justify-between">
        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                placeholder="Search invoice"
                type="search"
              />
            </div>
          </form>
        </div>
        <div className='flex gap-3 items-center'>
          <ModeToggle />
          <UserNav />
        </div>
      </header> */}
      <DashboardPage />
    </div>

  )
}



