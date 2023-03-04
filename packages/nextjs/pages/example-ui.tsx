import type { NextPage } from "next";
import { Timeline, UseCreatePost } from "../publications/pooost";
import { UseCreateProfile } from "../profiles/useCreateProfile";

const ExampleUI: NextPage = () => {
  return (
    <>
      <main style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "2vh",
            margin: "auto",
            backgroundColor: "rgb(171, 254, 44)",
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
