import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/JoinStyle.css";
import Logo from "../components/Logo";


function JoinPage() {
    const [UserName, setUserName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    const HandleInputUserName = (e) => {
        setUserName(e.target.value);
    };
    const HandleInputEmail = (e) => {
        setEmail(e.target.value);
    };
    const HandleInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const HandleInputConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const HandleInputPhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    };

    const onClickSubmit = (e) => {
        e.preventDefault();
        if (Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        } else {
            alert("회원가입 성공!");
            navigate("/");
        }
    };
    return (
        <div>
            <Logo />
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
                style={{
                display: "flex",
                flexDirection: "column",
                }}
                onSubmit={onClickSubmit}
            >
                <h1 style={{ textAlign: "center" }}>회원가입</h1>
                <label class="labelStyle">이름</label>
                <input
                    type="text"
                    value={UserName}
                    onChange={HandleInputUserName}
                    placeholder={"이름을 입력하세요."}
                    class="textStyle"
                />
                <label class="labelStyle">이메일</label>
                <input
                    type="email"
                    value={Email}
                    onChange={HandleInputEmail}
                    placeholder={"이메일을 입력하세요. "}
                    class="emailStyle"
                />
                <label class="labelStyle">비밀번호</label>
                <input
                    type="password"
                    value={Password}
                    onChange={HandleInputPassword}
                    placeholder={"비밀번호를 입력하세요. "}
                    class="passwordStyle"
                />
                <label class="labelStyle">비밀번호 확인</label>
                <input
                    type="password"
                    value={ConfirmPassword}
                    onChange={HandleInputConfirmPassword}
                    placeholder={"비밀번호를 확인하세요. "}
                    class="passwordStyle"
                />
                <label class="labelStyle">전화번호</label>
                <input
                    type="tel"
                    value={PhoneNumber}
                    onChange={HandleInputPhoneNumber}
                    placeholder={"전화번호를 입력하세요. "}
                    class="phoneNumberStyle"
                />
                <br />
                <button type="submit" onChange={onClickSubmit} className="buttonStyle">
                    회원가입
                </button>
            </form>
        </div>
        </div>
    );
}

export default JoinPage;
