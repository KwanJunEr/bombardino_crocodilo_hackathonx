import React from "react";
import { Fish, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Fish className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Pekan Hooked
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-justify">
              Your gateway to Pekan&apos;s incredible fishing tourism
              experiences. Connecting anglers with Malaysia&apos;s royal fishing
              heritage.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Fishing Tourism</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Fishing Spots
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Tourism Packages
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Local Guides
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Conservation
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">
                Accommodation Booking
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Boat Rental
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Equipment Shop
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Restaurant Guide
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>info@pekanhooked.com</li>
              <li>+60 9-422 1234</li>
              <li>Pekan, Pahang, Malaysia</li>
              <li className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Royal Town Tourism</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-9 pt-5 text-center text-gray-400">
          <p>
            &copy; 2024 Pekan Hooked. All rights reserved. Promoting sustainable
            fishing tourism in Malaysia&apos;s royal town.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
