import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

interface GlobalContextInterface {
  expandPortfolio: boolean;
  setExpandPortfolio: Dispatch<SetStateAction<boolean>>;
  expandArticle: boolean;
  setExpandArticle: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextInterface>({
  expandPortfolio: false,
  setExpandPortfolio: () => undefined,
  expandArticle: false,
  setExpandArticle: () => undefined,
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [expandPortfolio, setExpandPortfolio] = useState<boolean>(false);
  const [expandArticle, setExpandArticle] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        expandPortfolio,
        setExpandPortfolio,
        expandArticle,
        setExpandArticle
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
