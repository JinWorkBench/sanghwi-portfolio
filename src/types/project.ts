export interface Project {
  id: string; // 고유 ID (URL)
  title: string; // 프로젝트 제목
  description: string; // 프로젝트 설명
  thumbnail: string; // 썸네일 이미지 경로
  tags: string[]; // 기술 스택
  date: string; // 시작 날짜 (YYYY-MM) - 정렬 기준
  period: string; // 표시 기간
  order: number; // 추천순 정렬 번호 (낮을수록 위)
  githubUrl?: string; // 깃허브 링크
  liveUrl?: string; // 배포 링크
}
