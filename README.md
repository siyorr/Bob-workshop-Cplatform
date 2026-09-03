# IBM Bob 파트너 워크숍 참가자 패키지

이 폴더는 IBM Bob x watsonx Orchestrate 파트너 워크숍 참가자에게 제공할 GitHub 공개용 패키지입니다. 워크숍 handout과 실습용 소스만 포함하며, Bob이 생성하는 로컬 컨텍스트나 내부 참고 자료는 포함하지 않습니다.

## 사용 순서

1. 먼저 `bob-partner-training-2026.html`을 열어 전체 워크숍 흐름을 확인합니다.
2. G0-G5 기능 연습을 진행할 때는 Bob IDE에서 `bob-practice/` 폴더만 엽니다.
3. `bob-practice/`에서 새 Bob 채팅을 시작하고 `/init`을 실행한 뒤 handout의 G0-G5 안내를 따라갑니다.
4. G5를 마친 뒤에는 `bob-practice/`를 닫고 Bob IDE에서 `workshop-src/` 폴더만 새로 엽니다.
5. `workshop-src/`에서 새 Bob 채팅을 시작하고 `/init`을 다시 한 번 실행한 뒤 M1-M7 미션을 진행합니다.

## 사전 조건

Git, Node.js, npm 설치 여부를 확인하지 못해도 워크숍을 계속 진행할 수 있습니다. 선택 실행에서 오류가 나면 Bob IDE 채팅에 `@terminal`, `@problems`, 또는 오류 로그를 붙여넣고 해석을 요청하세요.

## 포함 항목

- `bob-partner-training-2026.html`: 참가자용 handout
- `bob-practice/`: G0-G5 Bob 기능 연습 프로젝트
- `workshop-src/`: M1-M7 코드 읽기와 변경 계획 실습 프로젝트

## 제외 항목

이 패키지는 `node_modules/`, 빌드 산출물, 로그, `.env`, `.bob/`, `AGENTS.md`, IDE 설정, 내부 설계 문서, 참고 원본을 포함하지 않습니다. Notion MCP 예시는 `bob-practice/templates/` 아래 템플릿 파일로만 제공되며, 활성 MCP 설정은 만들지 않습니다.
