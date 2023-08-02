# Checracker 프론트

- 중요 - 긴급으로 구분되는 4분면으로 이슈를 관리하는 TODO 앱입니다.

## 기획

- https://docs.google.com/presentation/d/1mQHKbqwMLqHFKKyLOzCkXuFYecCh30j15E6AIAkz9eg/edit?usp=sharing

## 실행 방법

```bash
npm install
npm run dev
```

## 빌드 및 실행

```bash
npm install
npm run build
npm run start
```

## 기술 스택

- Next.js
- Typescript
- mui, emotion

## 폴더 구조

```
.
├── components
│   └── ui // 공통 ui
├── app // app > page.tsx : / 경로
│   ├── board/[boardId]/page.tsx : /board/[boardId] 경로
├── hooks
├── constants // 상수
├── public
├── styles
├── models
└── utils
```
