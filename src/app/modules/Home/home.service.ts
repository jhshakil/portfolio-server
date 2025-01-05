import { prisma } from "../../../shared/prisma";

const getAllHomeData = async () => {
  const profileData = await prisma.profile.findFirst();
  const experienceData = await prisma.experience.findMany();
  const skillData = await prisma.skill.findMany();
  const projectData = await prisma.project.findMany();
  const blogData = await prisma.blog.findMany({
    take: 3,
  });
  const socialData = await prisma.social.findMany();

  const result = {
    profile: profileData,
    experiences: experienceData,
    skills: skillData,
    projects: projectData,
    blogs: blogData,
    socials: socialData,
  };

  return result;
};

export const HomeServices = {
  getAllHomeData,
};
