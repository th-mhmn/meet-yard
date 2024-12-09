//@ts-nocheck

'use client'

import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { motion } from 'motion/react'
const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={'/'} className="flex items-center gap-1">
        <svg
          width="40"
          height="40"
          viewBox="0 0 25 24"
          fill="#0e78f9"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2391 7C15.5625 6.49485 15.75 5.89432 15.75 5.25C15.75 3.45507 14.2949 2 12.5 2C11.3108 2 10.2709 2.63866 9.70433 3.59168C9.23578 3.22117 8.64372 3 8 3C6.48122 3 5.25 4.23122 5.25 5.75C5.25 6.20011 5.35814 6.62497 5.54985 7H4.75C3.50736 7 2.5 8.00736 2.5 9.25V17.25C2.5 18.4926 3.50736 19.5 4.75 19.5H16.25C17.4926 19.5 18.5 18.4926 18.5 17.25V16.9224L20.5663 18.2724C21.3977 18.8155 22.5 18.219 22.5 17.2259V9.27417C22.5 8.28106 21.3977 7.68453 20.5663 8.22769L18.5 9.57763V9.25C18.5 8.00736 17.4926 7 16.25 7H15.2391ZM10.75 5.25C10.75 4.2835 11.5335 3.5 12.5 3.5C13.4665 3.5 14.25 4.2835 14.25 5.25C14.25 6.2165 13.4665 7 12.5 7C11.5335 7 10.75 6.2165 10.75 5.25ZM18.5 11.3694V15.1307L21 16.764V9.73611L18.5 11.3694ZM9.25 5.75C9.25 6.44036 8.69036 7 8 7C7.30964 7 6.75 6.44036 6.75 5.75C6.75 5.05964 7.30964 4.5 8 4.5C8.69036 4.5 9.25 5.05964 9.25 5.75ZM4.75 8.5H16.25C16.6642 8.5 17 8.83579 17 9.25V17.25C17 17.6642 16.6642 18 16.25 18H4.75C4.33579 18 4 17.6642 4 17.25V9.25C4 8.83579 4.33579 8.5 4.75 8.5Z"
            fill="transparent"
            stroke="#0e78f9"
            strokeWidth="1"
          />
        </svg>

        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          MeetYard
        </p>
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
