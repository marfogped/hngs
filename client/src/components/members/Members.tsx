import { AllMembersInt } from "../../constants/types";
import { motion } from "framer-motion";

const staggerVariants = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};

const Members = ({ members }: AllMembersInt) => {
  return (
    <section className="min-h-min w-full xs:p-0 sm:p-0 p-6 xs:mt-20 sm:mt-20">
      {/* <div className="flex items-center ml-20 mb-20 xs:mt-12 sm:mt-12">
          <div className="title-line mr-6" />
          <h2 className="xs:text-3xl sm:text-3xl md:text-6xl">Members</h2>
        </div> */}
      <div className="grid xs:grid-cols-1 gap-y-8 gap-x-[5px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members
          ? members.map((member, projectIdx) => (
              <motion.article
                custom={projectIdx}
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                key={projectIdx}
                className="xs:h-[90vh] sm:h-[90vh] md:h-[80vh]"
              >
                <div className="xs:h-5/6 sm:h-5/6 md:h-[90%]">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={`${member.fullName} image`}
                  />
                </div>
                <div className="xs:h-1/6 sm:h-1/6 md:h-[10%] xs:pt-3 xs:pl-3 sm:pt-3 sm:pl-3">
                  <span className="block font-medium text-black lg:text-xl">
                    {member.fullName}
                  </span>
                  <span className="block font-normal text-stone-600">
                    {member.position}
                  </span>
                </div>
              </motion.article>
            ))
          : ""}
      </div>
    </section>
  );
};

export default Members;
