import "./Button.css";
type ByttonProps = {
  text: string;
  variant?: "primary" | "danger";
  onClick?: () => void;
  disabled?: boolean;
};
// void 공통=통합적으로
// 위에 variant는 css와 연결됨 추가로 import할것
// 위에 텍스트가 스트링이라는 규칙을 아래에 받아온다는 것({ text }: ByttonProps 이부분)
export default function Button({ text, variant = "primary", onClick, disabled = false }: ByttonProps) {
  return (
    <button className={`button ${variant}`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
