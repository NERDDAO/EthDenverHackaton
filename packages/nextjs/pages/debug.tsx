import { useProfile } from "@lens-protocol/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ContractUI } from "~~/components/scaffold-eth";
import { useDeployedContractNames } from "~~/hooks/scaffold-eth/useDeployedContractNames";
import { PostComposer } from "~~/publications/components/PostComposer";
import { UseUpdateProfileDetails } from "../profiles/UseUpdateProfileDetails";

const Debug: NextPage = () => {
  const contractNames = useDeployedContractNames();
  const [selectedContract, setSelectedContract] = useState<string>();

  useEffect(() => {
    if (!selectedContract && contractNames.length) {
      setSelectedContract(contractNames[0]);
    }
  }, [contractNames, selectedContract]);

  return (
    <>
      <header>
        <h1>LenScholar</h1>
      </header>
      <h1 style={{ backgroundColor: "#f0f0f000", marginTop: "2vh", marginBottom: "2vh", fontSize: "4rem" }}>
        Your Peer Reviews
      </h1>
      <UseUpdateProfileDetails />
      <p
        style={{
          textAlign: "center",
          margin: "auto",
          marginTop: "2vh",
          border: "1px solid black",
          maxWidth: "64vw",
          borderRadius: "10px 5px 5px 0px",
          boxShadow: "12px 12px 14px #888888",
          marginBottom: "5vh",
        }}
      >
        Reivew the following Peer Reviews your research has recieved:
      </p>
      <div
        placeholder="Feed Will Display Here"
        style={{
          border: "3px solid black",
          borderRadius: "21px 25px 25px 0px",
          boxShadow: "12px 12px 14px #888888",
          padding: "8px",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        Feed Will Display Here
      </div>
    </>
  );
};

export default Debug;
