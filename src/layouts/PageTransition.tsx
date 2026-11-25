import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import type { ReactNode } from 'react'

type PageTransitionProps = {
children: ReactNode
}

export const PageTransition = ({ children }: PageTransitionProps) => {
const location = useLocation()

return (
    <AnimatePresence mode="wait">
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ height: '100%' }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
)

}