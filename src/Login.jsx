import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./components/button/Button";
import "./styles/app.css";

function Login() {
 const [count, setCount] = useState(0);
 const [email, setEmail] = useState("");
 const [domain, setDomain] = useState("naver.com");
 const [password, setPassword] = useState("");
 const [errors, setErrors] = useState({});

 const navigate = useNavigate();

 // 이메일 도메인 리스트
 const domainList = ["naver.com", "google.com", "daum.net", "kakao.com"];
 // 유저 아이디 (이메일 + 도메인)
 const userId = domain === "" ? email : `${email}@${domain}`;

 // 이메일 작성
 const handleEmailChange = (e) => {
  const newEmail = e.target.value;
  setEmail(newEmail);

  // 이메일을 입력하면 에러 제거
  if (errors.emailError && newEmail.trim()) {
   const newErrors = { ...errors };
   delete newErrors.emailError;
   setErrors(newErrors);
  }
 };
 //  이메일 도메인 바꾸기
 const handleDomainChange = (e) => {
  setDomain(e.target.value);
 };
 // 패스워드 작성
 const handlePasswordChange = (e) => {
  const newPassword = e.target.value;
  setPassword(newPassword);

  // 비밀번호를 입력하면 에러 제거
  if (errors.passwordError && newPassword.trim()) {
   const newErrors = { ...errors };
   delete newErrors.passwordError;
   setErrors(newErrors);
  }
 };
 // 로그인 버튼 클릭 시
 const handleLogin = () => {
  if (!email?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    emailError: "이메일을 입력해주세요!",
   });

   return;
  }

  if (!password?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    passwordError: "비밀번호를 입력해주세요!",
   });

   return;
  }

  console.log(userId, password);
 };

 return (
  <div className="wrap">
   <h1>로그인 페이지</h1>
   <div>
    카운트: <span>{count}</span>
   </div>
   <Button label="+" handleClick={() => setCount(count + 1)} />

   <div>
    <input type="text" onChange={handleEmailChange} />

    {/* 삼항연산자 사용하기*/}
    {domain === "" ? null : <span>@</span>}
    <select value={domain} onChange={handleDomainChange}>
     {/* 반복문 map() 사용하기 */}
     {domainList.map((item) => {
      return (
       <option key={item} value={item}>
        {item}
       </option>
      );
     })}
     <option value="">직접입력</option>
    </select>
   </div>
   {/* 이메일 에러 메세지 */}
   <div>{errors.emailError && <span>{errors.emailError}</span>}</div>
   <div>
    <div>
     <input type="password" onChange={handlePasswordChange} />
    </div>
    {/* 비밀번호 에러 메세지 */}
    <div>{errors.passwordError && <span>{errors.passwordError}</span>}</div>
    <Button label="로그인" handleClick={handleLogin} />
    <Button label="회원가입" handleClick={() => navigate("/signup")} />
   </div>
  </div>
 );
}

export default Login;
