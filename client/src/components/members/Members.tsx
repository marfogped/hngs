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
    <section className="min-h-min w-full xs:p-0 sm:p-0 p-6 xs:mb-20 sm:mb-20">
      { members
        ? members.map((membersArr, membersArrIdx) => (
            <div 
            className={`${membersArr.members.length === 4 ? `grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4` : `grid xs:grid-cols-1 sm:grid-cols-2 xs:w-full sm:w-full md:w-1/2`} gap-x-[5px] mb-8`}
            key={membersArrIdx}
            >
              {
                membersArr.members.length ? (
                  membersArr.members.map((member, memberIdx) => (
                  <motion.article
                    key={memberIdx} 
                    variants={staggerVariants}
                    initial="hidden"
                    animate="visible"
                    className="h-[65vh]"
                  >
                    <div className="h-[85%]">
                      <img
                        className="h-full w-full flex object-cover bg-gradient-to-br from-gray-100 to-gray-300"
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
                ) : ("")
              }  
            </div>

          ))
        : ""}
    </section>
  );
};

export default Members;
