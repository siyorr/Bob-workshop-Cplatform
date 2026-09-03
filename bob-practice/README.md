# Bob Practice

이 폴더는 IBM Bob 워크숍의 G0-G5 기능 연습 전용 프로젝트입니다.

G0-G5에서는 Bob IDE에서 이 폴더를 열고 `/init`, Rules, Literate Coding, Modes, context mentions, MCP 설정 템플릿, Rollback, Bob Tips, subagent 연습을 안전하게 확인합니다.

M1-M7 본 실습을 시작할 때는 이 폴더가 아니라 `../workshop-src/` 폴더를 Bob IDE에서 다시 열어야 합니다.

## 사용 방법

1. Bob IDE에서 `bob-practice/` 폴더를 엽니다.
2. Bob 채팅에서 `/init`을 실행합니다.
3. 터미널 확인이 필요하면 아래 명령을 실행합니다.

```powershell
npm test
```

## 폴더 안내

- `src/rollbackPractice.js`: G5 Rollback에서 주석을 추가하고 되돌리는 작은 코드입니다.
- `src/bobTipsPractice.js`: Bob Tips 관찰용으로 일부러 복잡하게 만든 폐기 가능한 훈련용 코드입니다.
- `practice-artifacts/`: G5 subagent가 하나씩 읽고 목적, 담당/진입점, 불확실성을 비교하는 짧은 자료입니다.
- `templates/project-mcp.notion.example.json`: G4에서 `.bob/mcp.json`으로 복사해 볼 수 있는 Notion MCP 템플릿입니다.

이 프로젝트는 외부 의존성, 네트워크 호출, 데이터베이스, Docker, 비밀값을 사용하지 않습니다.
