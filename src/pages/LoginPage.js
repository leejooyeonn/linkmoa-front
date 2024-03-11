import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

function LoginPage() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
    //const navigate = useNavigate();

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onClickLogin = () => {
        console.log("login 버튼을 클릭함.");
    };

    // const onClickJoin = () => {
    //     navigate("/Register");
    // };

    // const onNaverLogin = () => {
    //     window.location.href = "http://localhost:8080/login/oauth2/code/naver";
    // };
    // const onGoogleLogin = () => {
    //     window.location.href = "http://localhost:8080/login/oauth2/code/google";
    // };

    // const handleGoogleLoginSuccess = () =>{
    //     setIsLoggedIn(true);
    // }

    // const getData = () => {
    //     fetch("http://localhost:8080/my", {
    //     method: "GET",
    //     credentials: "include",
    //     })
    //     .then((res) => {
    //         if (!res.ok) {
    //         throw new Error("Network response was not ok");
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         alert(data);
    //     })
    //     .catch((error) => alert(error));
    // };

    return (
        <div>
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
                }}
            >
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={onClickLogin}
            >
            <h2>로그인</h2>
            <label>UserName</label>
            <input type="text" value={inputId} onChange={handleInputId} />
            <label>Password</label>
            <input type="password" value={inputPw} onChange={handleInputPw} />
            <br />
            <button type="submit">Login</button>
            {/* <Link to="/register">회원가입</Link>
            <button type="button" onClick={onClickJoin}>
                회원가입
            </button>
            <br />
            <br />
            <a href="https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code">
                카카오로그인
            </a>
            <button onClick={onNaverLogin}>NAVER LOGIN</button>
            <button onClick={onGoogleLogin}>GOOGLE LOGIN</button>
            <button type = "button" onClick={getData}>Get Data</button> */}
            </form>
        </div>
        </div>
    );
}

export default LoginPage;