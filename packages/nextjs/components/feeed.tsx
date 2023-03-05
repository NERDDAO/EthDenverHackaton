import { FeedEventItemType, isPostPublication, useFeed } from "@lens-protocol/react";
import { useState } from "react";

import { ErrorMessage } from "../components/error/ErrorMessage";
import { Loading } from "../components/loading/Loading";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { PublicationCard } from "../publications/components/PublicationCard";

const allFeedEventTypes = [
  FeedEventItemType.Comment,
  FeedEventItemType.Post,
  FeedEventItemType.Mirror,
  FeedEventItemType.CollectComment,
  FeedEventItemType.CollectPost,
];

export function Feed() {
  const [restrictEventTypesTo, setRestrictEventTypesTo] = useState<FeedEventItemType[]>([FeedEventItemType.Post]);
  const { data, error, loading, hasMore, observeRef } = useInfiniteScroll(
    useFeed({
      profileId: "0x70b2",
      restrictEventTypesTo,
    }),
  );

  return (
    <div>
      {/* edit css inline here for the checkboxes */}
      <fieldset style={{ paddingBottom: "5vh", fontSize: "4px" }}>
        <legend>Filters</legend>
        {allFeedEventTypes.map(value => (
          <label key={value}>
            <input
              type="checkbox"
              checked={restrictEventTypesTo.includes(value)}
              name="restrictEventTypesTo"
              value={value}
              onChange={e => {
                if (e.target.checked) {
                  setRestrictEventTypesTo([...restrictEventTypesTo, value]);
                } else {
                  setRestrictEventTypesTo(restrictEventTypesTo.filter(i => i !== value));
                }
              }}
            />
            &nbsp;{value}
          </label>
        ))}
      </fieldset>

      {data?.length === 0 && <p>No items</p>}

      {loading && <Loading />}

      {error && <ErrorMessage error={error} />}

      {data
        ?.filter(i => isPostPublication(i.root))
        .map((item, i) => (
          <div
            style={{
              margin: "0 8vw 5vw 8vw",
              border: "3px solid black",
              borderRadius: "41px 25px 25px 0px",
              boxShadow: "12px 12px 14px #888888",
              padding: "8px",
              maxWidth: "500px",
            }}
            key={`${item.root.id}-${i}`}
          >
            <PublicationCard publication={item.root} />
          </div>
        ))}
      {hasMore && <p ref={observeRef}>Loading more...</p>}
    </div>
  );
}
