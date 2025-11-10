import React from "react";


export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white text-center py-6 transition-colors duration-500">
      {/* Copyright */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Dilmi Wickramasinghe. All rights reserved.
      </p>
    </footer>
  );
}


