"use client";
import { Button } from "@/app/components";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Container */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 1 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md border border-blue-100">
              <div className="flex justify-between mb-4 items-center">
                {title && (
                  <h2 className="text-xl font-semibold text-blue-600 mb-4">
                    {title}
                  </h2>
                )}

                <div
                  className="size-8 font-extrabold  rounded-full bg-blue-600 cursor-pointer flex items-center justify-center text-white hover:bg-amber-900 transition"
                  onClick={onClose}
                >
                  x
                </div>
              </div>

              {children}

              <Button className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition">
                Add
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Popup;
