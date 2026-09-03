# IBM Bob 파트너 워크숍 참가자 패키지

IBM Bob x watsonx Orchestrate 파트너 워크숍에서 사용할 참가자용 자료입니다. 이 패키지는 워크숍 handout, Bob 기능 연습 프로젝트, 코드 읽기와 변경 계획 실습 프로젝트만 담고 있습니다.

워크숍은 두 프로젝트를 차례로 여는 방식으로 진행합니다. 처음에는 `bob-practice/`에서 Bob 사용 흐름을 익히고, 이후 `workshop-src/`로 한 번 전환해 실제 코드 미션을 진행합니다.

## 학습 여정 한눈에 보기

| 순서 | 프로젝트 | 진행 범위 | 목적 |
| --- | --- | --- | --- |
| 1 | `bob-practice/` | G0-G5 | Bob IDE 로그인, `/init`, 컨텍스트 읽기, Rules, Modes, 산출물 작성 흐름 연습 |
| 2 | `workshop-src/` | M1-M7 | 실제 코드베이스 읽기, 변경 계획 작성, diff 리뷰, 실행 기록과 후속 아이디어 정리 |

## 빠른 시작 체크리스트

1. Windows 환경에서 이 패키지 폴더를 준비합니다.
2. `bob-partner-training-2026.html`을 브라우저로 열고 전체 흐름을 확인합니다.
3. Bob IDE에서 `bob-practice/` 폴더만 엽니다.
4. 새 Bob 채팅에서 `/init`을 실행한 뒤 handout의 G0-G5를 진행합니다.
5. G5를 마치면 Bob IDE에서 `bob-practice/`를 닫습니다.
6. Bob IDE에서 `workshop-src/` 폴더만 새로 엽니다. 이 단계가 유일한 프로젝트 폴더 전환입니다.
7. 새 Bob 채팅에서 `/init`을 다시 실행한 뒤 M1-M7 미션을 진행합니다.

> 중요: Bob IDE에서는 한 번에 하나의 프로젝트 폴더만 여세요. `.bob/`와 `AGENTS.md`는 각 프로젝트에서 `/init`을 실행하면 로컬에 생기는 산출물로 다룹니다. 이 패키지에는 포함하지 않습니다.

## 프로젝트 맵

| 경로 | 포함 내용 | 참가자가 하는 일 |
| --- | --- | --- |
| `bob-partner-training-2026.html` | 참가자용 워크숍 handout | 전체 일정, G0-G5, M1-M7 안내를 따라갑니다. |
| `bob-practice/` | 통제된 Bob 기능 연습 자료 | Bob이 만든 컨텍스트를 읽고, Rules와 Modes를 확인하고, 작은 산출물을 작성합니다. |
| `workshop-src/` | `frontend`, `auth-service`, `mock-api`가 포함된 코드 미션 자료 | 코드 구조를 읽고, 제한된 변경 계획과 diff 리뷰 메모를 작성합니다. |

## 선택 확인: Node.js와 npm

Git, Node.js, npm은 워크숍 진행의 필수 조건이 아닙니다. 설치되어 있다면 선택 실행 전에 아래 명령으로 확인할 수 있습니다.

```powershell
node --version
npm --version
```

명령이 실패해도 실습을 계속할 수 있습니다. 실행 오류를 해석해야 할 때는 Bob IDE 채팅에 `@terminal`, `@problems`, 또는 오류 로그를 붙여넣고 도움을 요청하세요.

## 패키지에 포함된 것

| 항목 | 설명 |
| --- | --- |
| `bob-partner-training-2026.html` | 워크숍 참가자가 가장 먼저 읽는 handout |
| `bob-practice/` | G0-G5 Bob 기능 연습 프로젝트 |
| `workshop-src/` | M1-M7 코드 읽기와 변경 계획 실습 프로젝트 |

## 패키지에서 제외된 것

이 패키지는 다음 항목을 포함하지 않습니다.

| 제외 항목 | 이유 |
| --- | --- |
| `.bob/`, `AGENTS.md` | 참가자가 각 프로젝트에서 `/init`을 실행해 로컬로 만드는 산출물입니다. |
| `node_modules/`, 빌드 산출물, 로그 | 개인 실행 환경에서 생기는 파일입니다. |
| `.env`, IDE 설정 | 개인 설정과 환경별 파일입니다. |
| 내부 설계 문서, 참고 원본 | 참가자 실습에 필요한 공개 패키지 범위 밖의 자료입니다. |

Notion MCP 예시는 `bob-practice/templates/` 아래 템플릿 파일로만 제공합니다. 활성 MCP 설정은 만들지 않습니다.
