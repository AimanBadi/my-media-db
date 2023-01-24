import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  return (
    <div className="p-4 flex flex-col">
      <div className="self-end">
        <button onClick={() => cycleOpen()}>
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            exit={{ width: 0, transition: { duration: 0.3 } }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial="closed"
              animate="open"
              variants={{
                closed: {
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: -1,
                  },
                },
                open: {
                  transition: {
                    staggerChildren: 0.2,
                    staggerDirection: 1,
                  },
                },
              }}
            >
              <motion.a
                href="#"
                variants={{
                  closed: {
                    opacity: 0,
                  },
                  open: {
                    opacity: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                Sidebar
              </motion.a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
