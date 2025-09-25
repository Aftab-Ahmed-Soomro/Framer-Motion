import React from 'react'
import { motion } from "motion/react"

const App = () => {
  return (
    <div>

      <motion.div 
      className="box"
      drag
      whileDrag={{
        scale: 0.8
      }}>
      
      </motion.div>

      {/* <motion.div 
      className='box'
      // initial={{
      //   x: 0,
      //   y: 0
      // }}

      // animate={{
      //   x: [0, 800, 800, 0, 0],
      //   y: [0, 0, 300, 300, 0],
      //   rotate: [0, 360, 0, -360, 0]
      // }}

      // transition={{
      //   duration: 3,
      //   delay: 1
      // }}

      whileHover={{
        backgroundColor: "green",
        cursor: 'pointer'
      }}

      whileTap={{
        scale: 0.8
      }}
      >

      </motion.div> */}

      {/* <motion.img 
      animate={{
        x: 1000,
        rotate: 360
      }}
      transition={{
        duration: 2,
        delay: 1,
        repeat: Infinity,
        ease: "anticipate"
      }}
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgnid74-e506cf25-aad2-42d7-8a26-2b0739ab66fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85Njc2ODM5My1iNWVmLTRlY2QtYjM5Yy02ZWY5YzEyZWY2MWEvZGduaWQ3NC1lNTA2Y2YyNS1hYWQyLTQyZDctOGEyNi0yYjA3MzlhYjY2ZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0VpPby_D6muunwkaiSLfEVVm15_Y5S-354SrQS36Q4I" alt="" /> */}

      {/* <motion.div 
      className='box'
      initial={{
        x: 0  
      }}
      animate={{
        x: 1000,
        rotate: 360,
      }}
      transition={{
        duration: 3,
        delay: 1,
        repeat: Infinity,
        ease: "anticipate"
      }}>
      </motion.div> */}

      {/* <motion.h1 
      animate={{
        x: 1000,
        // rotate: 180,
        scale: 2
      }}
      transition={{
        duration: 3,
        delay: 1
      }}>HELLO</motion.h1> */}

      {/* <motion.div 
      className='circle'
      animate={{
        x: 1000,
        y: 200,
      }}>
      </motion.div> */}
    </div>
  )
}

export default App
