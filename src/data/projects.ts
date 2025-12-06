import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "sanghwi-portfolio",
    title: "진상휘 포트폴리오",
    description:
      "Next.js와 TypeScript로 제작한 개인 포트폴리오 사이트입니다. 다크모드, 반응형 디자인, 프로젝트 필터링 기능을 구현했습니다.",
    thumbnail: "/images/projects/portfolio-thumb.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2024-12", // 정렬용
    period: "2024.12 - 현재", // 화면 표시용
    order: 1, // 추천순 1번
    githubUrl: "https://github.com/JinWorkBench/sanghwi-portfolio",
    liveUrl: "https://sanghwi-portfolio.vercel.app",
  },
  {
    id: "devbrew-blog",
    title: "DevBrew 기술 블로그",
    description:
      "개발 지식을 공유하는 기술 블로그입니다. Markdown 기반 포스팅, 태그 시스템, 검색 기능을 제공합니다.",
    thumbnail: "/images/projects/devbrew-thumb.jpg",
    tags: ["React", "Gatsby", "GraphQL", "Markdown"],
    date: "2024-06", // 정렬용
    period: "2024.06 - 2024.09", // 화면 표시용
    order: 2, // 추천순 2번
    liveUrl: "https://devbrew.tistory.com",
  },
  {
    id: "quick-project",
    title: "단기 프로젝트",
    description: "한 달 안에 완성한 작은 프로젝트입니다.",
    thumbnail: "/images/projects/quick-thumb.jpg",
    tags: ["React", "Firebase"],
    date: "2024-08", // 정렬용
    period: "2024.08", // 화면 표시용
    order: 3, // 추천순 3번
  },
];
