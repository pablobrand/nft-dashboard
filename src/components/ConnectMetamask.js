import React, { useState } from "react";
import { ethers } from 'ethers';

const ConnectMetamask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect to Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
        window.ethereum.request({method:'eth_requestAccounts'})
        .then(result => {
            accountChangeHandler(result[0]);
            setConnButtonText('wallet connected');
        })
    } else {
      setErrorMessage("Please install metamask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
  }
  return (
    <div>
      <h3>{}</h3>
      <button onClick={connectWalletHandler}>{connButtonText}</button>
      <h3>Address: {defaultAccount} </h3>

      {errorMessage}
    </div>
  );
};

export default ConnectMetamask;
