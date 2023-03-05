import type { NextPage } from "next";
import { Timeline, UseCreatePost } from "../publications/pooost";
import { ProfileByHandle } from "../profiles/UseProfileByHandle";
import { UseUpdateProfileDetails } from "../profiles/UseUpdateProfileDetails";
import { redirect } from "next/dist/server/api-utils";

const ProfilePage: NextPage = () => {
  return (
    <>
      <header>
        <h1>LenScholar</h1>
      </header>
      <main style={{ textAlign: "center" }}>
        <h1 style={{ backgroundColor: "#f0f0f000", textAlign: "center" }}>Researcher Profile</h1>
        <div>
          <UseUpdateProfileDetails />
        </div>
        <p>
          ****Before you sign in with OrcID, please updated your OrcID Bio to include Lens-connected Wallet Address***
        </p>
        <p>This is so we can verify on chain that you are the owner of your scholarly credentials~</p>
        <button
          style={{
            marginTop: "2vh",
            textAlign: "center",
            color: "black",
            padding: "15px 32px",
          }}
        >
          Sign with Orcid Id
        </button>
      </main>
    </>
  );
};

/*
<header>
        <h1>LenScholar</h1>
      </header>
      <main style={{ margin: "auto" }}>
        <Feed />
      </main>
*/
export default ProfilePage;
