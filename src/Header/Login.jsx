import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; 
import i18n from "../i18n";
function Login({ onClose }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const HandlerInput = (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      alert("تمام فیلدها را پر کنید");
      return;
    }
    const fakeToken = "user_secret_token_12345";

    localStorage.setItem("userToken", fakeToken);
    if (onClose) onClose();

      window.location.href = "/"; 
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "fa" : "en";
    i18n.changeLanguage(newLang);
  };

  const isRtl = i18n.language === "fa";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-500/50 min-h-screen fixed justify-center inset-0 flex backdrop-blur-md z-50"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <motion.form
        initial={{ opacity: 0, scale: 0.7, y: -80 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        onSubmit={HandlerInput}
        className="m-auto w-80 h-75 bg-slate-900 flex flex-col justify-center items-center gap-3.5 rounded-lg shadow-xl shadow-pink-600/10"
      >
        <button
          onClick={toggleLanguage}
          className="text-xs border border-e-white hover:bg-purple-700 px-3 py-1 rounded transition flex items-start text-white"
          type="button"
        >
          {t("switchLang")}
        </button>
        <p className="text-2xl text-purple-500">{t("LoginTitle")}</p>
        
        <label className="text-white">{t("emailLabel")}</label>
        <input
          type="text"
          className="border border-purple-500 rounded-xl h-7 px-2 text-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="text-white">{t("passwordLabel")}</label>
        <input
          type="password"
          className="border border-purple-500 rounded-xl h-7 px-2 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-purple-500 w-[90px] h-7 rounded-lg hover:bg-purple-600 hover:scale-105 active:shadow-[0_0_20px_rgba(168,85,247,0.7),0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300"
        >
          {t("btn")}
        </button>
      </motion.form>
    </motion.div>
  );
}
export default Login;