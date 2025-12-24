//use client 쓸것 안하면 페이지 안뜸 ✔ 버튼 클릭,✔ input 입력✔ 모달 열기✔ 토글✔ 애니메이션✔ 상태 관리 필요할때 
"use client"
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col py-40 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>홈페이지</h1>
      <div>
        <Button text="확인" onClick={() => alert("확인 버튼")} />
        <Button text="취소" variant="danger" />
        <Button text="비활성 버튼" disabled/>
      </div>
    </div>
  );
}
