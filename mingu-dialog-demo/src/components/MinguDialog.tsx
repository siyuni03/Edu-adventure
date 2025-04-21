import { useEffect, useState } from "react";

export default function MinguDialog() {
  const fullText = "우리가 탐험할 곳은 미적분 섬이야. 이곳은 극한의 숲부터 가야되네. 같이 가보자!";
  const [displayText, setDisplayText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [showDialog, setShowDialog] = useState(true);

  useEffect(() => {
    if (!showDialog) return;

    let index = 0;
    const typing = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typing);
        setIsTypingDone(true);
        setTimeout(() => {
          goToNextScene();
        }, 3000);
      }
    }, 40);
    return () => clearInterval(typing);
  }, [showDialog]);

  const goToNextScene = () => {
    console.log("다음 연출로 넘어갑니다 (민규 윙크 → 지도 사라짐)");
    setShowDialog(false);
    // 여기에 화면 전환 함수 연결
  };

  const handleClick = () => {
    if (!isTypingDone) {
      setDisplayText(fullText);
      setIsTypingDone(true);
      setTimeout(() => goToNextScene(), 3000);
    } else {
      goToNextScene();
    }
  };

  if (!showDialog) return null;

  return (
    <div
      onClick={handleClick}
      className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-2xl shadow-lg px-6 py-4 max-w-lg cursor-pointer animate-fade-in"
    >
      <p className="text-lg leading-relaxed">{displayText}</p>
      {isTypingDone && <p className="text-sm text-right text-gray-400">[클릭해서 계속]</p>}
    </div>
  );
}