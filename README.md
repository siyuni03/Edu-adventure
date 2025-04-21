# MinguDialog - 지식의 섬 말풍선 컴포넌트

민규가 말하는 말풍선 컴포넌트입니다.  
타이핑 애니메이션과 자동 전환, 클릭 진행 기능이 포함되어 있습니다.

## 기능
- 타이핑 효과로 텍스트 출력
- 3초 후 자동 전환
- 클릭 시 즉시 다음으로 진행 가능

## 사용 방법

```tsx
import MinguDialog from './components/MinguDialog';

function App() {
  return (
    <div className="relative">
      <MinguDialog />
    </div>
  );
}
```

## 커스터마이징
- `fullText`: 대사 내용 변경 가능
- `setTimeout`, `typing 속도` 조절로 타이밍 변경 가능