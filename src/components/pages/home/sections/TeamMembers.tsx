import SectionTitle from "@/components/common/components/SectionTitle";
import { useScrollAnimation } from "@/hooks/scroll/useScrollAnimation";
import Image from "next/image";
import { teamMembers } from "@/content/home/team";

const TeamMembers = () => {
  const sectionRef = useScrollAnimation({
    threshold: 0.1,
    staggerDelay: 230,
  });

  return (
    <section
      id="team-members"
      className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="animate-slide absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_50%)] animate-[rotate_30s_linear_infinite]"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <SectionTitle title="チームメンバー" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative flex flex-col overflow-hidden bg-white/5 border border-white/10 rounded-2xl group hover:-translate-y-2 hover:border-primary hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[300px]">
                <Image
                  src={member.imgSrc}
                  alt={`image for ${member.fullName}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Static Name & Position */}
              <div className="relative z-10 flex flex-col p-4">
                <h3 className="text-lg font-semibold text-white">
                  {member.fullName}
                </h3>
                <p className="text-primary">{member.position}</p>
              </div>

              {/* Hover Overlay covering everything */}
              <div className="absolute inset-0 z-20 flex flex-col justify-between bg-[url('/images/team-members/bg-team-member.png')] bg-cover bg-center p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {member.fullName}
                  </h3>
                  <p className="text-primary">{member.position}</p>
                  <div className="mt-8 text-sm text-slate-300">
                    {member.bio.split("\n").map((segment, index) => (
                      <p key={index} className="mb-3">
                        {segment}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
