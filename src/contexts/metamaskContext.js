import React, { createContext, useContext, useState } from 'react';

const MetamaskContext = createContext(null);

const useMetamask = () => {
  const [modalIsOpen, setIsOpen] = useContext(MetamaskContext);
  const handleOpenMetamask = (value) => {
    setIsOpen(value)
  }
  return { metamaskIsOpen: modalIsOpen, openMetamask: handleOpenMetamask }
}

const MetamaskProvider = ({children}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <MetamaskContext.Provider value={[modalIsOpen, setIsOpen]}>
      {children}
    </MetamaskContext.Provider>
  )
}

export { MetamaskProvider, useMetamask };
