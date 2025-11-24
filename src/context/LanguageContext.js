"use client";

import { createContext, useContext, useState } from "react";
import { navigationData } from "@/data/navigation";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("vi"); // Default language

  const switchLanguage = (code) => {
    setLang(code);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        switchLanguage,
        navigation: navigationData[lang], // Automatically provides the correct array
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);