"use client";
import { Feed, Header, Sidebar } from "@/components";
import { SessionProvider } from "next-auth/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <SessionProvider>
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 50,
        }}
      >
        <div className="flex h-full">
          <div className="flex flex-1 flex-col">
            <Header />
            <Feed />
          </div>
          <Sidebar />
        </div>
      </motion.div>
    </SessionProvider>
  );
}
