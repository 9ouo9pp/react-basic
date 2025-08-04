import { Link } from "react-router";
import "./styles/app.css";

function App() {
 return (
  <div className="wrap">
   <h1>카운터 앱</h1>
   {/* a태그 대신 리액트에서는 react-router가 제공하는 Link 컴포넌트를 사용함 */}
   <Link to="/login">로그인</Link>
   <Link to="/signup">회원가입</Link>
  </div>
 );
}

export default App;
