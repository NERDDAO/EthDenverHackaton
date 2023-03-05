import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo.png";
import { FaucetButton } from "~~/components/scaffold-eth";
import RainbowKitCustomConnectButton from "~~/components/scaffold-eth/RainbowKitCustomConnectButton";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useOutsideClick } from "~~/hooks/scaffold-eth";
import { useActiveProfile } from "@lens-protocol/react";
import { LoginButton } from "~~/components/auth/LoginButton";

const ConfettiNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const { data: profile } = useActiveProfile();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const spread = 100; // Set the spread distance in pixels

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = event.clientX + getRandomInt(-spread, spread) + "px";
      confetti.style.top = event.clientY + getRandomInt(-spread, spread) + "px";
      confetti.style.backgroundColor = getRandomColor();
      document.body.appendChild(confetti);
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  // Helper function to get a random integer between two values
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getRandomColor = () => {
    const colors = [
      "#e53935", // red
      "#43a047", // green
      "#1e88e5", // blue
      "#fdd835", // yellow
      "#6d4c41", // brown
      "#8e24aa", // purple
      "#00acc1", // cyan
      "#ff8f00", // orange
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Link
      href={href}
      passHref
      onClick={handleClick}
      className={`${
        isActive ? "bg-secondary shadow-md" : ""
      } hover:bg-secondary hover:shadow-md focus:bg-secondary py-2 px-3 text-sm rounded-full gap-2`}
    >
      {children}
    </Link>
  );
};

/**
 * Site header
 */
export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  const navLinks = (
    <>
      <li>
        <ConfettiNavLink href="/">Research Feed</ConfettiNavLink>
      </li>
      <li>
        <ConfettiNavLink href="/example-ui">Sumbit Research</ConfettiNavLink>
      </li>
      <li>
        <ConfettiNavLink href="/debug">Respond to Review</ConfettiNavLink>
      </li>
      <li>
        <ConfettiNavLink href="/profilePage">Researcher Profile</ConfettiNavLink>
      </li>
    </>
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md lg:shadow-none shadow-secondary">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <button
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </button>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              {navLinks}
            </ul>
          )}
        </div>
        <div className="hidden lg:flex items-center gap-2 mx-4">
          <Link href="/" passHref className="flex relative w-10 h-10">
            <Image alt="SE2 logo" className="cursor-pointer" fill src="/logo.svg" />
          </Link>
          <div className="flex flex-col">
            <span className="font-bold">Scaffold-eth</span>
            <span className="text-xs">Forkable Ethereum dev stack</span>
          </div>
        </div>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
        <LoginButton />
      </div>
    </div>
  );
}
