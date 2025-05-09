import React from "react";

const AdminFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="px-5 py-3">
        <div className="justify-between flex">
          <div>
            <h3 className="text-xl font-bold">Pekan Tourism Analytics</h3>
            <p className="text-gray-400">
              Empowering tourism growth through AI-powered analytics and
              insights.
            </p>
          </div>
          <div>
            <p>
              © {new Date().getFullYear()} Pekan Tourism Analytics. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AdminFooter;
