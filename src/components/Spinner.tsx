import { motion } from 'motion/react'

const size = 64

export const Spinner = () => <motion.div style={{ width: size, height: size, border: '6px solid #e5e7eb', borderTop: '6px solid #3b82f6', borderRadius: '50%', margin: '2rem auto' }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} />