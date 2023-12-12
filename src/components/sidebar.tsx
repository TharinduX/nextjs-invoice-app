import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { Button } from './ui/button';
import { Settings } from "lucide-react";
import Link from 'next/link';

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("py-16 border", className)}>
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 h-full">
          <h2 className="mb-5 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="flex flex-col justify-between h-full">
            <DashboardNav items={navItems} />
            <div>
              <Link href='/settings' className='flex mx-auto w-[90%] gap-2 items-center justify-center outline-border outline-1 outline px-2 py-3 rounded-md cursor-pointer hover:bg-accent'>
                <Settings size={15} />
                Settings</Link>
              <p className='text-center text-xs mt-5 text-muted-foreground'>
                v1.0.0 - Github Repo - MIT License
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}