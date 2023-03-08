import { useState } from "react";

import { UnauthenticatedFallback } from "../components/UnauthenticatedFallback";
import { WhenLoggedInWithProfile } from "../components/auth/auth";
import { CommentComposer } from "./components/CommentComposer";
import { PublicationComments } from "./components/PublicationComments";

export function UseCreateComment() {
  const [publicationId, setPublicationId] = useState<string>("0x1b-0x0118");

  return (
    <div style={{ margin: "auto", textAlign: "center", alignItems: "center" }}>
      <WhenLoggedInWithProfile>
        {({ profile }) => (
          <>
            <p style={{ textAlign: "center" }}>
              <label htmlFor="publicationId">Publication id</label>
              <input
                id="publicationId"
                value={publicationId}
                onChange={event => setPublicationId(event.target.value)}
              />
            </p>

            {publicationId && (
              <div style={{ margin: "auto" }}>
                <CommentComposer publisher={profile} publicationId={publicationId} />

                <p>Publication comments:</p>
                <PublicationComments publicationId={publicationId} />
              </div>
            )}
          </>
        )}
      </WhenLoggedInWithProfile>
      <UnauthenticatedFallback message="Log in to create a comment." />
    </div>
  );
}
