import { useState } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "a", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErros, setFormErrors] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.name);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  //バリデーションチェック
  const validate = (values) => {};

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              name="username"
              placeholder="ユーザー名"
              value={formValues.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              name="mailaddress"
              placeholder="メールアドレス"
              value={formValues.mailAddress}
            />
          </div>
          <div className="formField">
            <label>パスワード</label>

            <input
              type="text"
              name="password"
              placeholder="パスワード"
              value={formValues.password}
            />
          </div>
          <button className="submitButton">登録</button>
        </div>
      </form>
    </div>
  );
}

export default App;
