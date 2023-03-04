import type { NextPage } from "next";
import { Timeline, UseCreatePost } from "../publications/pooost";
import { UseCreateProfile } from "../profiles/useCreateProfile";

const ExampleUI: NextPage = () => {
  return (
    <>
      <header>
        <h1>LenScholar</h1>
      </header>
      <main style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "2vh",
            margin: "auto",
            backgroundColor: "#f0f0f000",
            textAlign: "center",
            padding: "16px",
          }}
        >
          Submit Research
        </h1>
        <UseCreateProfile />
        <UseCreatePost />
      </main>
    </>
  );
};

export default ExampleUI;
