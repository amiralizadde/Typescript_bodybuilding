import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "../../shared/types";
import { motion } from "framer-motion";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import ActionButton from "../../shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State Of The Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectu autem voluptates",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectu autem voluptates",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectu autem voluptates",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto m-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
         className=" md:my-5 md:w-3/5 "
        initial="hidden"
        whileInView="visible"
        viewport={{once:true , amount:0.5}}
        transition={{duration:0.5}}
        variants={{
          hidden:{opacity:0 , x:-50},
          visible:{opacity:1 , x:0}
        }}
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            autem voluptates fugiat velit qui est ut, dolorum eum labore,
            accusantium asperiores illum quia neque explicabo?
          </p>
        </motion.div>
        {/* Benefits */}

        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics & description */}
        <div className="mt-16 flex items-center justify-between gap-20  md:mt-28 md:flex">
          {/* Graphic */}
          <img src={BenefitsPageGraphic} className="mx-auto" alt="" />
          {/* Description */}
          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20  before:z-[1] before:content-abstractwaves">
                <motion.div
                  className=" md:my-5 md:w-3/5 "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once:true , amount:0.5}}
                  transition={{duration:0.5}}
                  variants={{
                    hidden:{opacity:0 , x:50},
                    visible:{opacity:1 , x:0}
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT.</span>
                  </HText> 
                </motion.div>
              </div>
            </div>
            {/* description */}

            <motion.div
              className=" md:my-5 md:w-3/5 "
              initial="hidden"
              whileInView="visible"
              viewport={{once:true , amount:0.5}}
              transition={{delay:0.2, duration:0.5}}
              variants={{
                hidden:{opacity:0 , x:50},
                visible:{opacity:1 , x:0}
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consectetur non fugit deserunt pariatur facere excepturi. Quia
                voluptate sit dignissimos rem? Repellat voluptatibus, ipsa
                cupiditate tempora, quia debitis nihil, perferendis ut suscipit
                id recusandae reprehenderit quo beatae quisquam quasi officiis
                culpa.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus nihil adipisci doloribus ducimus aut totam unde
                quasi aspernatur ex, ut reiciendis, magnam, harum atque suscipit
                nostrum perferendis. Ullam iure itaque unde, culpa, delectus
                labore velit asperiores alias nihil consequuntur aliquid.
              </p>
            </motion.div>

            {/* button */}
            <div className="relative mt-16 ">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}></ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
