import "normalize.css";
import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/global.css";

// Lazy loading 방식 (동적 import)
const LazyApp = lazy(() => import("./App.jsx"));
const LazyLogin = lazy(() => import("./Login.jsx"));
const LazySignup = lazy(() => import("./Signup.jsx"));

createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <Routes>
   <Route
    path="/"
    element={
     <Suspense fallback={<div>메인 페이지 로딩 중...</div>}>
      <LazyApp />
     </Suspense>
    }
   />
   <Route
    path="/login"
    element={
     <Suspense fallback={<div>로그인 페이지 로딩 중...</div>}>
      <LazyLogin />
     </Suspense>
    }
   />
   <Route
    path="/signup"
    element={
     <Suspense fallback={<div>회원가입 페이지 로딩 중...</div>}>
      <LazySignup />
     </Suspense>
    }
   />
   <Route path="*" element={<div>404 Not Found 잘못된 경로로 접근하였습니다!</div>} />
  </Routes>
 </BrowserRouter>
);
