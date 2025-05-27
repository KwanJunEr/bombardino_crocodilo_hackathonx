import React from 'react'
import Link from 'next/link'
import { Phone, Mail, BarChart3 } from 'lucide-react'

const ManageFooter = () => {
  return (
      <footer className="w-full border-t bg-background">
        <div className="container px-8">
          <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">PekanHooked Manage</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The complete tourism management platform for modern businesses. Streamline operations, boost revenue,
                and deliver exceptional customer experiences.
              </p>
           
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Tour Operators
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Travel Agencies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Hotels & Resorts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Activity Providers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-muted-foreground">+1 (555) 987-6543</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-muted-foreground">support@tourismpro.com</span>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Training Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} TourismPro. All rights reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
  )
}

export default ManageFooter
