import React from 'react'
import Link from 'next/link'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 body-font">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <p className="flex flex-col text-white sm:py-2">
            <span className="text-xs">
              Copyright © {new Date().getFullYear()} yuuu. All Rights Reserved.
            </span>
          </p>
          <span className="inline-flex flex-col sm:ml-auto justify-end">
            <Link href="/admin/signin">
              <a className="text-sm text-white text-right">Signin</a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
