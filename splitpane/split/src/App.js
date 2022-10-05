import React from "react";
import "./App.css";
import Control from "./Components/Control";
import Design from "./Components/Design";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "./Control/menu/Button";
import Table from "./Control/menu/Table";
import Website from "./Control/menu/Website";
import Contacts from "./Control/menu/Contacts";
import Stage1 from "./Control/Stages/Stage1";
import Stage2 from "./Control/Stages/Stage2";
import Stage3 from "./Control/Stages/Stage3";
import Stage4 from "./Control/Stages/Stage4";
import Footer from "./Footer";
import SplitPanePage from "./Components/SplitPanePage";
import { useTranslation, Trans } from "react-i18next";
import Login from "./Login";
import NoMatch from "./NoMatch";

// const lngs = {
//   en: { nativeName: "English" },
//   de: { nativeName: "Deutsch" },
// };

function App() {
  // const { t, i18n } = useTranslation();
  return (
    <div>
      {/* {Object.keys(lngs).map((lng) => {
        return (
          <button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </button>
        );
      })}
      <Trans i18nKey="description">Edit src/App.js and save to reload</Trans>
      {t("learn")}
      <hr />
      <p>{t("new.key", "this will be added automatically")}</p>
      {t("new.key", "hello added")} */}
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="controls" element={<Control />} />
          <Route path="splitpanepage" element={<SplitPanePage />} />
          <Route path="stage1" element={<Stage1 />} />
          <Route path="stage2" element={<Stage2 />} />
          <Route path="stage3" element={<Stage3 />} />
          <Route path="stage4" element={<Stage4 />} />
          <Route path="design" element={<Design />} />
          <Route path="button" element={<Button />} />
          <Route path="table" element={<Table />} />
          <Route path="website" element={<Website />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
