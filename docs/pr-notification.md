# PR 알림 받기

## 참고

- https://docs.github.com/ko/github-ae@latest/actions/using-workflows/events-that-trigger-workflows#running-a-workflow-when-a-pull-request-is-approved

## 절차

- slack webhook url을 설정한다.
  - slack -> apps -> incoming webhooks -> add to slack
- github secrets에 slack webhook url을 등록한다.
- github workflow를 작성한다.
  - .github/workflows/pr-approved.yml
