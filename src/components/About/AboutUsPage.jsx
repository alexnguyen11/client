"use client";

import { AboutAcademy, InstructorTeam, TeachingMethod } from ".";

const AboutUsPage = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* <div className="h-20" /> */}
      <AboutAcademy />
      <InstructorTeam />
      <TeachingMethod />
    </main>
  );
};

export default AboutUsPage;
