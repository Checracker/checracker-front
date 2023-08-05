# git hook 설정

- git hook은 git의 특정 이벤트가 발생했을 때, 자동으로 실행되는 스크립트이다.
- https://git-scm.com/docs/githooks

## 설치

- node 진영에서 주로 사용하는 패키지는 husky이다.
  - https://www.npmjs.com/package/husky

```bash
npm install husky --save-dev
npm pkg set scripts.prepare="husky install"
npm run prepare
```

- 이후 package.json의 prepare 스크립트는 더 이상 사용하지 않으므로 삭제해도 된다

## 설정

```bash
npx husky add .husky/pre-commit "npm test"
```

- npm 메인 페이지에 있는 예제 명령어로 pre-commit hook을 추가하면 .husky/pre-commit 파일이 생성된다.
  - 이를 통해 알 수 있는 것은 원하는 깃훅(pre-commit)에 원하는 스크립트(npm test)를 추가할 수 있다는 것이다.
