import { ContentFocus, ProfileOwnedByMeFragment, useCreatePost } from "@lens-protocol/react";

import { upload } from "../../upload";
import { never } from "../../utils";

export type PostComposerProps = {
  publisher: ProfileOwnedByMeFragment;
};

export function PostComposer({ publisher }: PostComposerProps) {
  const { execute: create, error, isPending } = useCreatePost({ publisher, upload });

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const abstract = (form.elements.namedItem("abstract") as HTMLTextAreaElement).value;
    const research = (form.elements.namedItem("research") as HTMLTextAreaElement).value;
    const references = (form.elements.namedItem("references") as HTMLTextAreaElement).value;

    const content = `${abstract}\n\n${research}\n\n${references}`;

    await create({
      content,
      contentFocus: ContentFocus.TEXT,
      locale: "en",
    });

    form.reset();
  };

  return (
    <div>
      <form onSubmit={submit}>
        <fieldset>
          <textarea
            name="abstract"
            minLength={1}
            required
            rows={3}
            placeholder="Place your abstract here."
            style={{
              marginTop: "2vh",
              borderRadius: "8px",
              resize: "none",
              width: "70%",
              height: "20vh",
              border: "1px solid lightgrey",
              marginBottom: "2vh",
            }}
            disabled={isPending}
          ></textarea>
          <br />

          <textarea
            name="research"
            minLength={1}
            required
            rows={3}
            placeholder="Place your research here."
            style={{
              borderRadius: "8px",
              resize: "none",
              width: "70%",
              height: "20vh",
              border: "1px solid lightgrey",
              marginBottom: "2vh",
            }}
            disabled={isPending}
          ></textarea>
          <br />

          <textarea
            name="references"
            minLength={1}
            required
            rows={3}
            placeholder="List your references here."
            style={{
              borderRadius: "8px",
              resize: "none",
              width: "70%",
              height: "20vh",
              border: "1px solid lightgrey",
              marginBottom: "2vh",
            }}
            disabled={isPending}
          ></textarea>
          <br />

          <button disabled={isPending}>Post</button>

          {error && <pre>{error.message}</pre>}
        </fieldset>
      </form>
    </div>
  );
}
