import type { NextPage } from "next";
import { Timeline, UseCreatePost } from "../publications/pooost";
import { UseCreateProfile } from "../profiles/useCreateProfile";

const ExampleUI: NextPage = () => {
  return (
    <>
      <main>
        <h1>Example UI</h1>
        <UseCreateProfile />
        <UseCreatePost />
      </main>
    </>
  );
};

export default ExampleUI;
