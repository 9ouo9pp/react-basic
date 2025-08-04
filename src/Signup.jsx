import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "./components/button/Button";
import "./styles/app.css";

function Signup() {
 const [email, setEmail] = useState("");
 const [domain, setDomain] = useState("naver.com");
 const [password, setPassword] = useState("");
 const [nickname, setNickname] = useState("");
 const [phone, setPhone] = useState("");
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
 // 닉네임 작성
 const handleNicknameChange = (e) => {
  const newNickname = e.target.value;
  setNickname(newNickname);

  // 닉네임을 입력하면 에러 제거
  if (errors.nicknameError && nickname.trim()) {
   const newErrors = { ...errors };
   delete newErrors.nicknameError;
   setErrors(newErrors);
  }
 };
 // 전화번호 작성
 const handlePhoneChange = (e) => {
  const newPhone = e.target.value;
  setPhone(newPhone);

  // 전화번호를 입력하면 에러 제거
  if (errors.phoneError && newPhone.trim()) {
   const newErrors = { ...errors };
   delete newErrors.phoneError;
   setErrors(newErrors);
  }
 };

 // 회원가입 버튼 클릭 시
 const handleSignup = () => {
  // 이메일 입력 시 에러
  if (!email?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    emailError: "이메일을 입력해주세요!",
   });

   return;
  }
  // 패스워드 입력 시 에러
  if (!password?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    passwordError: "비밀번호를 입력해주세요!",
   });

   return;
  }
  // 닉네임 입력 시 에러
  if (!nickname?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    nicknameError: "닉네임을 입력해주세요!",
   });

   return;
  }
  // 전화번호 입력 시 에러
  if (!phone?.trim()) {
   setErrors({
    // 불변성 유지를 위해 기존의 속성 복사
    ...errors,
    phoneError: "전화번호를 입력해주세요!",
   });

   return;
  }

  console.log(userId, password);
 };

 return (
  <div className="wrap">
   <h1>회원가입 페이지</h1>

   {/* 이메일 입력 */}
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
    {/* 비밀번호 입력 */}
    <div>
     <input type="password" onChange={handlePasswordChange} />
    </div>
    {/* 비밀번호 에러 메세지 */}
    <div>{errors.passwordError && <span>{errors.passwordError}</span>}</div>

    {/* 닉네임 입력 */}
    <div>
     <input type="text" onChange={handleNicknameChange} />
    </div>
    {/* 닉네임 에러 메세지 */}
    <div>{errors.nicknameError && <span>{errors.nicknameError}</span>}</div>

    {/* 전화번호 입력 */}
    <div>
     <input type="text" onChange={handlePhoneChange} />
    </div>
    {/* 전화번호 에러 메세지 */}
    <div>{errors.phoneError && <span>{errors.phoneError}</span>}</div>

    <Button label="로그인" handleClick={() => navigate("/login")} />
    <Button label="회원가입" handleClick={handleSignup} />
   </div>
  </div>
 );
}

export default Signup;
