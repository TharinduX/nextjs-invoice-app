import { DashboardNav } from "@/components/dashboard-nav";
import { navItems } from "@/constants/data";
import { cn } from "@/lib/utils";


// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export default function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("py-16 border bg-background", className)}>
      <div className="space-y-4 py-4 h-full">
        <div className="px-3 py-2 h-full">
          <h2 className="mb-5 px-4 text-lg font-semibold tracking-tight">
            Overview
          </h2>
          <div className="flex flex-col justify-between h-full">
            <DashboardNav items={navItems} />
          </div>
        </div>
      </div>
    </div>
  );
}