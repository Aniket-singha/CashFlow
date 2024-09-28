"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideBar({ user }: SiderbarProps) {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className=" flex mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="CashFlow Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">CashFlow</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              className={cn("sidebar-link", {
                "bg-bank-gradient": isActive,
              })}
              href={item.route}
              key={item.label}
            >
              <div className="relative size-6">
                <Image src={item.imgURL} alt={item.label}
                className={cn(
                    {'brightness-[3] invert-0':isActive}
                )}
                fill />
              </div>
              <p className={cn('sidebar-label',{
                '!text-white':isActive
              })}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}
