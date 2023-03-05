import { useFeed, useRecentPosts } from "@lens-protocol/react";

import { UnauthenticatedFallback } from "../components/UnauthenticatedFallback";
import { WhenLoggedInWithProfile } from "../components/auth/auth";
import { ErrorMessage } from "../components/error/ErrorMessage";
import { Loading } from "../components/loading/Loading";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { PostComposer } from "./components/PostComposer";
import { PublicationCard } from "./components/PublicationCard";

type TimelineProps = {
  profileId: string;
};

export function Timeline({ profileId }: TimelineProps) {
  const recentPosts = useRecentPosts();
  const { data, error, loading, hasMore, observeRef } = useInfiniteScroll(useFeed({ profileId }));

  if (loading) return <Loading />;

  if (error) return <ErrorMessage error={error} />;

  if (data.length === 0) return <p>No items</p>;

  return (
    <div>
      {recentPosts.map((item, i) => (
        <PublicationCard key={`${item.id}-${i}`} publication={item} />
      ))}

      {data.map((item, i) => (
        <PublicationCard key={`${item.root.id}-${i}`} publication={item.root} />
      ))}

      {hasMore && <p ref={observeRef}>Loading more...</p>}
    </div>
  );
}

export function UseCreatePost() {
  return (
    // edit the following style for the post input divbox
    <div
      style={{
        border: "3px solid black",
        maxWidth: "64vw",
        padding: "2vh 0 2vh 2vh",
        margin: "auto",
        borderRadius: "41px 25px 25px 0px",
        boxShadow: "12px 12px 14px #888888",
      }}
    >
      <WhenLoggedInWithProfile>
        {({ profile }) => (
          <>
            <div>{profile.handle}</div>
            <div>profileId: {profile.id}</div>
            <PostComposer publisher={profile} />
          </>
        )}
      </WhenLoggedInWithProfile>
      <UnauthenticatedFallback message="Log in to create a post." />
    </div>
  );
}
