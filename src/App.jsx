import React from 'react'
import { motion, useScroll } from "motion/react"

const App = () => {
  // const scrollYProgress = useScroll().scrollYProgress
  const {scrollYProgress} = useScroll()

  console.log(scrollYProgress)

  return (
    <div className='p-20 text-center text-white font-mono'>

      {/* <motion.div 
      className="box"
      drag
      whileDrag={{
        scale: 0.8,
        rotate: 360,
        cursor: "pointer",
        backgroundColor: "green"
      }}
      whileHover={{
        backgroundColor: "green"
      }}
      dragConstraints={{
        left: 0,
        right: 1000,
        top: 0,
        bottom: 300
      }}
      dragDirectionLock= "true"
      >
      </motion.div> */}

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

      {/* ************************ Scroll Effect Animation *********************** */}
      <motion.div 
      style={{scaleX: scrollYProgress}}
      className='bg-red-500 origin-left w-full h-3 fixed top-0 left-0'
      >

      </motion.div>
      <h2 className='font-bold text-4xl mb-8'>Aftab Ahmed Soomro</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse praesentium corrupti impedit atque eos adipisci inventore, nostrum quidem iure repudiandae corporis nemo quasi reiciendis veritatis, numquam explicabo expedita similique sit ad, dolores non. Et officiis asperiores, accusamus soluta pariatur velit numquam saepe debitis assumenda animi totam consectetur dolorem temporibus qui dolore non explicabo cumque veritatis eveniet commodi minus quas doloribus. Ipsam maiores autem, illo voluptate quam corporis, ipsum enim explicabo dolorem possimus quae labore optio minus, ullam nam corrupti facere perferendis cupiditate sequi. Temporibus at aliquid incidunt eveniet rerum provident maxime beatae molestias omnis rem magni odit hic, et vero? <br /><br /><br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, vel deserunt facilis totam similique harum mollitia hic eos atque. Ab, saepe quia! Qui, repudiandae unde veritatis eius id rerum repellat distinctio itaque sapiente laborum perferendis soluta, quia cupiditate doloremque est eum nisi earum neque placeat molestiae dolor? Cum reiciendis et ipsa mollitia at error accusantium doloremque, molestiae asperiores quo ipsum iusto quos quis non rerum cumque repellat exercitationem perspiciatis culpa similique qui ea impedit? Vero ipsum fugiat nam quasi saepe repudiandae enim minus expedita voluptatibus dolorem commodi facilis officia, et nisi cumque harum delectus corrupti, est quas. Doloremque cum enim modi quia consequatur cumque architecto perspiciatis numquam esse. In quae aliquid repudiandae delectus ipsa mollitia quasi. Sed, doloribus saepe. Adipisci, nobis nostrum tempora sit dolor molestias error dolore quod iusto qui, dicta illo, ratione at dolorum provident! Sed quibusdam totam veniam nesciunt? Debitis doloribus doloremque modi. Explicabo corporis modi quisquam est, dolor blanditiis distinctio sint, aperiam recusandae animi repudiandae! Magni vitae dolores cumque deleniti non! Reprehenderit omnis placeat labore dolorem, culpa similique molestias voluptatum porro, sunt fugit in quisquam, autem ducimus illum adipisci. Tempore doloribus recusandae explicabo incidunt quas voluptatem optio veniam veritatis, animi, maiores aspernatur minus. Laboriosam, expedita similique. <br /><br /><br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut dolorem magni et repudiandae officia, placeat adipisci deleniti ad aliquid pariatur harum ex amet explicabo minima, quos, delectus voluptate nisi exercitationem beatae! Magnam minima quisquam dignissimos unde laborum accusantium velit voluptate alias in incidunt. Minus minima, ratione vel libero quia dolorum explicabo quibusdam. Aperiam esse ducimus quos expedita quaerat obcaecati asperiores non commodi? Eius, itaque qui? Porro ex doloremque iusto minus odit atque consequatur, quibusdam laboriosam eveniet? Illo optio error esse ipsam voluptates, dolorem culpa libero expedita doloribus laboriosam earum amet quod iste laborum. Facilis totam aspernatur ut voluptas at quam, sunt nihil iure saepe placeat, voluptates atque! Doloremque et reprehenderit maiores quis doloribus sapiente, provident corporis, sed placeat ab beatae ex assumenda ea laborum. Quia accusantium assumenda repudiandae eius aliquam, aspernatur vero dolore nobis? Ab quo quis aliquid reiciendis nemo qui aspernatur, perferendis voluptatem sed minus porro sapiente placeat beatae fugiat at ducimus dolores hic culpa sit vitae voluptatum eaque deserunt quia labore? Corrupti molestias vel, impedit voluptate voluptas vitae ratione assumenda neque dolorum accusantium! Assumenda cumque laboriosam dolorem ullam facilis illo velit commodi illum, quis natus dolor quia. Nostrum fugiat corrupti voluptates, explicabo nemo quasi similique velit unde quos natus, eveniet aut eos ab porro nihil incidunt facere libero fugit eaque quaerat esse? Ut facere recusandae ducimus ad culpa iste temporibus laudantium, architecto earum quasi molestias accusantium, debitis libero fuga quod, suscipit excepturi delectus itaque. Quibusdam deleniti ullam, adipisci quod.</p>
    </div>
  )
}

export default App
