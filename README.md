# 개발자 웹 이력서

HTML, CSS, JavaScript, TailwindCSS를 사용하여 만든 반응형 개발자 웹 이력서입니다.

## 🚀 기능

- ✅ 반응형 웹 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 스크롤 네비게이션
- ✅ 모바일 햄버거 메뉴
- ✅ SNS 링크 섹션 (GitHub, YouTube, Instagram, LinkedIn, Email)
- ✅ 다크모드 지원
- ✅ 접근성 고려 (ARIA 라벨, 시맨틱 HTML)

## 📁 폴더 구조

```
claude-code-mastery/
├── index.html           # 메인 HTML 파일
├── styles/
│   └── style.css       # 커스텀 CSS 스타일
├── scripts/
│   └── main.js         # JavaScript 기능
├── assets/
│   ├── images/         # 이미지 폴더
│   └── icons/          # 아이콘 폴더
├── ROADMAP.md          # 개발 로드맵
├── CLAUDE.md           # Claude Code 가이드
├── README.md           # 이 파일
└── .gitignore          # Git 무시 파일
```

## 🛠️ 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - TailwindCSS 유틸리티 클래스
- **JavaScript (Vanilla)** - 상호작용 기능
- **Git** - 버전 관리

## 🎨 섹션

### 1. 네비게이션
- 고정 네비게이션 바
- 데스크톱 메뉴 (숨김 모바일에서 자동 표시)
- 모바일 햄버거 메뉴

### 2. Hero Section
- 프로필 사진
- 이름 및 직책
- 한줄 소개

### 3. 소개 (About)
- 개인 소개 텍스트

### 4. 경력 (Experience)
- 경력 정보 (직책, 회사, 기간)
- 업무 설명

### 5. 기술 스택 (Skills)
- 프론트엔드 기술
- 백엔드 기술
- 도구 & 플랫폼

### 6. 프로젝트 (Projects)
- 프로젝트 카드
- 프로젝트 설명
- 기술 태그
- GitHub/데모 링크

### 7. SNS 링크
- GitHub
- YouTube
- Instagram
- LinkedIn
- Email

### 8. 연락처 (Contact)
- 이메일
- LinkedIn
- GitHub

### 9. Footer
- 저작권 정보
- 제작 기술 정보

## 📱 반응형 디자인

- **모바일**: < 640px - 스택 레이아웃, 햄버거 메뉴
- **태블릿**: 640px - 1024px - 2열 그리드
- **데스크톱**: > 1024px - 풀 레이아웃

## 🚀 시작하기

### 브라우저에서 열기
```bash
# 간단히 index.html을 브라우저에서 열면 됩니다
open index.html
```

### Live Server (VS Code)
VS Code 확장 프로그램 "Live Server"를 사용하면 실시간 미리보기가 가능합니다.

### Python 간단한 서버
```bash
python -m http.server 8000
# http://localhost:8000 방문
```

### Node.js http-server
```bash
npx http-server
# http://localhost:8080 방문
```

## 📝 커스터마이징

### 개인 정보 수정
`index.html` 파일에서 다음 부분을 수정하세요:
- 이름, 직책
- 프로필 사진 (`assets/images/profile.jpg`)
- 소개 텍스트
- 경력 정보
- 기술 스택
- 프로젝트 정보
- SNS 링크

### 색상 변경
TailwindCSS 색상을 사용합니다. `index.html`의 클래스명에서:
- `bg-blue-600` → `bg-green-600` 등으로 변경 가능
- 기본 색상: blue, green, purple, orange, red, pink 등

### 폰트 변경
`index.html` head 부분의 Google Fonts 링크를 수정하세요.

## 🌙 다크모드

시스템 설정 또는 브라우저 설정에서 다크모드를 활성화하면 자동으로 적용됩니다.

## ♿ 접근성

- 시맨틱 HTML 태그 사용 (header, nav, main, section, footer)
- ARIA 라벨 포함
- 적절한 색상 대비
- 키보드 네비게이션 지원

## 📊 개발 로드맵

자세한 개발 계획은 [ROADMAP.md](ROADMAP.md)를 참고하세요.

## 📄 라이선스

개인 포트폴리오용으로 자유롭게 사용하실 수 있습니다.

## 🤝 기여

개선 사항이 있으면 이슈를 제출하거나 풀 리퀘스트를 보내주세요!

---

**마지막 업데이트**: 2024년 5월
