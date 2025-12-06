import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow">
      {/* 썸네일 영역 */}
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          {project.thumbnail}
        </p>
      </div>

      {/* 프로젝트 정보 */}
      <div className="p-6">
        {/* 제목 */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* 설명 */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 날짜 */}
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {project.period}
        </p>
      </div>
    </article>
  );
}
