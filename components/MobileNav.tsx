"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
export default function MobileNav({ user }: MobileNavProps) {
  const pathName = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className=" flex cursor-pointer items-center gap-1 px-4"
            >
              <Image
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="CashFlow Logo"
               
              />
              <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">CashFlow</h1>
            </Link>
            <div className="mobilenav-sheet">
                <SheetClose asChild>
                    <nav className="flex flex-col h-full gap-6 pt-16 text-white ">
                    {sidebarLinks.map((item) => {
              const isActive =
                pathName === item.route ||
                pathName.startsWith(`${item.route}/`);
              return (
                <SheetClose asChild key={item.route}>
                     <Link
                  className={cn('mobilenav-sheet_close w-full',{
                    'bg-bank-gradient':isActive
                  })}
                  href={item.route}
                  key={item.label}

                >
                  <div className="relative size-6">
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      className={cn({ "brightness-[3] invert-0": isActive })}
                      width={20}
                      height={20}
                    />
                  </div>
                  <p
                    className={cn("text-26 font-semibold text-black-2", {
                      "text-white": isActive,
                    })}
                  >
                    {item.label}
                  </p>
                </Link>
                </SheetClose>
               
              );
            })}
            
                    </nav>
                </SheetClose>
            </div>
            
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
}
