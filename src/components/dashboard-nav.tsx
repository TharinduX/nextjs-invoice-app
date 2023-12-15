"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Dispatch, SetStateAction } from "react";
import { LogOut, HelpCircle } from 'lucide-react';

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <div className='flex flex-col justify-between h-full'>
      <nav className="grid items-start gap-2">
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <Link
                key={index}
                href={item.disabled ? "/" : item.href}
                onClick={() => {
                  if (setOpen) setOpen(false);
                }}
              >
                <span
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-md font-medium hover:bg-accent hover:text-accent-foreground",
                    path === item.href ? "bg-accent" : "transparent",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </span>
              </Link>
            )
          );
        })}
      </nav>
      <div>
        <Link
          href='/auth/logout'
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
        >
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-md font-medium hover:bg-accent hover:text-accent-foreground",
              path === '/auth/logout' ? "bg-accent" : "transparent"
            )}
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help</span>
          </span>
        </Link>
        <Link
          href='/auth/logout'
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
        >
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-md font-medium hover:bg-accent hover:text-accent-foreground",
              path === '/auth/logout' ? "bg-accent" : "transparent"
            )}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </span>
        </Link>
        <p className='text-xs mt-5 px-3 text-muted-foreground'>
          v1.0.0 - Github Repo - MIT License
        </p>
      </div>
    </div>
  );
}