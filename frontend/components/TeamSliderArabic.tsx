"use client";

import Image from "next/image";

interface TeamMember {
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  experience: string;
  experienceEn: string;
  qualification: string;
  qualificationEn: string;
  about: string;
  aboutEn: string;
  image: string | null;
}

interface Props {
  teamMembers: TeamMember[];
}

export default function TeamSliderArabic({ teamMembers }: Props) {
  return (
    <div className="relative overflow-hidden group">
      <div className="team-slider-ar">
        {/* First set */}
        {teamMembers.map((member, index) => (
          <div key={`first-${index}`} className="team-card-wrapper">
            <div className="flex-shrink-0 w-[280px] sm:w-[240px] md:w-[260px] lg:w-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer relative flex flex-col min-h-[320px] transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.03]">
              <div className="absolute top-2 right-2 w-8 h-8 bg-light-blue/20 rounded-full blur-sm z-10" />
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-pink/20 rounded-full blur-sm z-10" />

              <div className="relative h-36 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-center"
                    unoptimized
                  />
                ) : (
                  <Image
                    src="/images/dafault-person.webp"
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                )}
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-xs font-bold text-royal-blue mb-1 text-center line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-light-blue font-semibold text-[10px] mb-1.5 text-center line-clamp-1">
                  {member.role}
                </p>
                <div className="space-y-0.5 mb-1.5">
                  <p className="text-royal-blue/70 text-[10px] text-center">
                    <span className="font-semibold">الخبرة:</span> {member.experience}
                  </p>
                  <p className="text-royal-blue/70 text-[10px] text-center line-clamp-1">
                    <span className="font-semibold">المؤهل:</span> {member.qualification}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-1.5 mt-auto">
                  <p className="text-royal-blue/80 text-[10px] italic leading-relaxed line-clamp-2 text-center">
                    &quot;{member.about}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Second set (duplicate for seamless loop) */}
        {teamMembers.map((member, index) => (
          <div key={`second-${index}`} className="team-card-wrapper">
            <div className="flex-shrink-0 w-[280px] sm:w-[240px] md:w-[260px] lg:w-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer relative flex flex-col min-h-[320px] transition-transform duration-200 hover:-translate-y-2 hover:scale-[1.03]">
              <div className="absolute top-2 right-2 w-8 h-8 bg-light-blue/20 rounded-full blur-sm z-10" />
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-pink/20 rounded-full blur-sm z-10" />

              <div className="relative h-36 overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain object-center"
                    unoptimized
                  />
                ) : (
                  <Image
                    src="/images/dafault-person.webp"
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    unoptimized
                  />
                )}
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-xs font-bold text-royal-blue mb-1 text-center line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-light-blue font-semibold text-[10px] mb-1.5 text-center line-clamp-1">
                  {member.role}
                </p>
                <div className="space-y-0.5 mb-1.5">
                  <p className="text-royal-blue/70 text-[10px] text-center">
                    <span className="font-semibold">الخبرة:</span> {member.experience}
                  </p>
                  <p className="text-royal-blue/70 text-[10px] text-center line-clamp-1">
                    <span className="font-semibold">المؤهل:</span> {member.qualification}
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-1.5 mt-auto">
                  <p className="text-royal-blue/80 text-[10px] italic leading-relaxed line-clamp-2 text-center">
                    &quot;{member.about}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-slider-ar {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scrollArabic 50s linear infinite;
        }

        .team-card-wrapper {
          flex-shrink: 0;
        }

        @keyframes scrollArabic {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }

        .group:hover .team-slider-ar {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
