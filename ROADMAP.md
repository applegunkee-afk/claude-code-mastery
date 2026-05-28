# 개발자 웹 이력서 개발 로드맵

## 프로젝트 개요
HTML, CSS, JavaScript, TailwindCSS를 사용하여 반응형 개발자 웹 이력서를 구축합니다.

## 기술 스택
- **HTML5** - 구조
- **CSS3 / TailwindCSS** - 스타일링
- **JavaScript (Vanilla)** - 상호작용
- **Git** - 버전 관리

## Phase 1: 프로젝트 초기화 (1-2시간)
- [ ] 프로젝트 폴더 구조 생성
  - `index.html`
  - `assets/` 폴더 (이미지, 아이콘)
  - `styles/` 폴더
  - `scripts/` 폴더
- [ ] Git 저장소 초기화
- [ ] TailwindCSS 설정 및 연결
- [ ] 기본 HTML 템플릿 작성

## Phase 2: 레이아웃 및 구조 (2-3시간)
### 2.1 헤더/네비게이션
- [ ] 상단 네비게이션 바 구현
- [ ] 이름/직책 섹션
- [ ] 네비게이션 메뉴 (About, Experience, Skills, Projects, Contact)
- [ ] 모바일 반응형 메뉴 (햄버거 메뉴)

### 2.2 섹션 레이아웃
- [ ] Hero Section (프로필, 한줄 소개)
- [ ] About Section (자기소개)
- [ ] Experience Section (경력/인턴십)
- [ ] Skills Section (기술 스택)
- [ ] Projects Section (포트폴리오)
- [ ] Contact Section (연락처)
- [ ] Footer

## Phase 3: 콘텐츠 작성 (1-2시간)
### 3.1 개인 정보
- [ ] 이름, 직책, 프로필 사진
- [ ] 한줄 소개 (3-4줄)
- [ ] SNS/링크 (GitHub, LinkedIn, Email)

### 3.2 경력 정보
- [ ] 회사명, 직책, 기간
- [ ] 업무 설명 (2-3개 항목 per 직책)
- [ ] 최소 2-3개 경력 정보

### 3.3 기술 스택
- [ ] 프론트엔드 기술 (HTML, CSS, JavaScript, React 등)
- [ ] 백엔드 기술
- [ ] 도구 및 플랫폼 (Git, Docker, AWS 등)
- [ ] 기술별 숙련도 레벨 표시

### 3.4 프로젝트
- [ ] 프로젝트 제목, 설명
- [ ] 사용 기술 태그
- [ ] 프로젝트 링크 (GitHub, Demo)
- [ ] 최소 3-4개 프로젝트

## Phase 4: 스타일링 (2-3시간)
### 4.1 색상 및 디자인
- [ ] 색상 팔레트 정의 (primary, secondary, accent)
- [ ] 폰트 설정 (Google Fonts)
- [ ] 다크모드 지원 (선택사항)

### 4.2 TailwindCSS 적용
- [ ] 레이아웃 스타일 (flex, grid)
- [ ] 타이포그래피
- [ ] 버튼 및 카드 스타일
- [ ] 호버 및 상호작용 효과

### 4.3 반응형 디자인
- [ ] 모바일 (< 640px)
- [ ] 태블릿 (640px - 1024px)
- [ ] 데스크톱 (> 1024px)
- [ ] Tailwind breakpoints 활용

## Phase 5: 상호작용 기능 (1-2시간)
### 5.1 JavaScript 기능
- [ ] 스무드 스크롤 네비게이션
- [ ] 모바일 메뉴 토글
- [ ] 활성 섹션 하이라이트
- [ ] 스크롤 애니메이션 (선택사항)

### 5.2 사용자 경험
- [ ] 키보드 네비게이션 지원
- [ ] 접근성 개선 (ARIA labels)
- [ ] 로딩 상태 처리

## Phase 6: 테스트 및 최적화 (1시간)
- [ ] 크로스 브라우저 테스트
- [ ] 반응형 테스트 (DevTools)
- [ ] 성능 최적화 (이미지 압축)
- [ ] SEO 최적화 (메타 태그)
- [ ] 접근성 검사 (WCAG)

## Phase 7: 배포 (1시간)
- [ ] 배포 플랫폼 선택 (Vercel, Netlify, GitHub Pages)
- [ ] 도메인 설정 (선택사항)
- [ ] 배포 구성
- [ ] 배포 및 검증

## 파일 구조 (최종)
```
project-root/
├── index.html
├── styles/
│   └── style.css (TailwindCSS)
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   │   └── profile.jpg
│   └── icons/
├── README.md
└── ROADMAP.md
```

## 주요 마일스톤
- **Milestone 1**: 레이아웃 및 기본 구조 완성 (Phase 1-2)
- **Milestone 2**: 콘텐츠 및 스타일링 완성 (Phase 3-4)
- **Milestone 3**: 상호작용 및 최적화 완성 (Phase 5-6)
- **Milestone 4**: 배포 (Phase 7)

## 예상 총 소요 시간
- **총 8-12시간**
- 일일 2-3시간 투자 시 4-6일 완성 가능

## 참고사항
- TailwindCSS CDN 또는 빌드 프로세스 선택
- 프로필 사진은 최소 200x200px 권장
- 프로젝트 링크는 GitHub 또는 라이브 데모 포함
- 다크모드는 선택사항 (나중에 추가 가능)
