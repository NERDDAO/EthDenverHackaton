import type { NextPage } from "next";
import { Timeline, UseCreatePost } from "../publications/pooost";
import { ProfileByHandle } from "../profiles/UseProfileByHandle";
import { UseUpdateProfileDetails } from "../profiles/UseUpdateProfileDetails";

const ProfilePage: NextPage = () => {
  return (
    <>
      <main>
        <div>
          <h1>Researcher Profile</h1>
        </div>
        <div>
          <UseUpdateProfileDetails />
        </div>
        <button>Connect to OrcID</button>
      </main>
    </>
  );
};

export default ProfilePage;
