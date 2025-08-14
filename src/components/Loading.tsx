import { motion, type Variants } from 'motion/react'
import { Spinner } from './Spinner'
import { Section } from './styled/Wrappers'

const dotVariants = {
  hidden: { opacity: 0.2, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: -5,
    transition: {
      delay: i * 0.2,
      repeat: Infinity,
      repeatType: 'loop',
      duration: 0.6,
      repeatDelay: 0.4,
    }
  })
} satisfies Variants as Variants

export const Loading = () => <Section className='flex flex-col gap-4'>
    <Spinner />
    <h1>Loading
      { [0, 1, 2].map(i => <motion.span key={i} custom={i} variants={dotVariants} initial='hidden' animate='visible'>.</motion.span>) }
    </h1>
</Section>