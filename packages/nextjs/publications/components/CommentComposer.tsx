import { CollectPolicyType, ContentFocus, ProfileOwnedByMeFragment, useCreateComment } from "@lens-protocol/react";

import { upload } from "../../upload";
import { never } from "../../utils";

type CommentComposerProps = {
  publisher: ProfileOwnedByMeFragment;
  publicationId: string;
};

export function CommentComposer({ publisher, publicationId }: CommentComposerProps) {
  const { execute: create, error, isPending } = useCreateComment({ publisher, upload });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const formData = new FormData(form);
    const content = (formData.get("content") as string | null) ?? never();

    await create({
      publicationId,
      content,
      contentFocus: ContentFocus.TEXT,
      locale: "en",
      collect: {
        type: CollectPolicyType.NO_COLLECT,
      },
    });

    form.reset();
  };

  return (
    <form onSubmit={submit}>
      <fieldset>
        <textarea
          name="content"
          rows={3}
          required
          placeholder="Say gm...?"
          style={{ resize: "none", margin: "auto" }}
          disabled={isPending}
        ></textarea>

        <button disabled={isPending}>Submit Peer Review</button>

        {error && <pre>{error.message}</pre>}
      </fieldset>
    </form>
  );
}
