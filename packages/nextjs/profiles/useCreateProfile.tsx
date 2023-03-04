import { useCreateProfile, useProfile } from "@lens-protocol/react";
import { useState } from "react";
import { ErrorMessage } from "../components/error/ErrorMessage";
import { never } from "../utils";
import { ProfileCard } from "./components/ProfileCard";

function ShowProfile({ handle }: { handle: string }) {
  const { data: profile, error, loading } = useProfile({ handle: `${handle}.test` });

  if (loading) return null;

  if (error) return <ErrorMessage error={error} />;

  return <ProfileCard profile={profile} />;
}

export function UseCreateProfile() {
  const [newProfileHandle, setNewProfileHandle] = useState<string | null>(null);

  const { execute: create, error, isPending } = useCreateProfile();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setNewProfileHandle(null);

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const handle = (formData.get("handle") as string) ?? never();

    const result = await create(handle);

    if (result.isSuccess()) {
      setNewProfileHandle(handle);
    }
  };

  return (
    <div>
      <div>Connected as:{newProfileHandle && <ShowProfile handle={newProfileHandle} />}</div>
      <form
        onSubmit={onSubmit}
        style={{
          border: "3px solid black",
          maxWidth: "64vw",
          margin: "auto",
          borderRadius: "41px 25px 25px 0px",
          boxShadow: "12px 12px 14px #888888",
          marginBottom: "5vh",
        }}
      >
        <fieldset style={{ padding: "1.5vh" }}>
          <label>
            Enter a profile handle:
            <br />
            <input
              style={{ marginBottom: "1.5vh", border: "1px solid lightgrey" }}
              name="handle"
              minLength={5}
              maxLength={31}
              required
              type="text"
              disabled={isPending}
            />
          </label>
          <br />
          <button style={{ marginBottom: "1vh" }} disabled={isPending}>
            {isPending ? "Creating..." : "Create profile"}
          </button>
        </fieldset>

        {error && <p>{error.message}</p>}
      </form>
    </div>
  );
}
