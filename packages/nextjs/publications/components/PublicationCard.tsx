import {
  CommentFragment,
  MirrorFragment,
  PostFragment,
  PendingPostFragment,
  CollectState,
  isMirrorPublication,
  ContentPublicationFragment,
  AnyCriterion,
  DecryptionCriteriaType,
} from "@lens-protocol/react";
import { ReactNode } from "react";

import { ProfilePicture } from "../../profiles/components/ProfilePicture";
import { formatAmount } from "../../utils";

function formatDecryptionCriterion(criterion: AnyCriterion): string {
  switch (criterion.type) {
    case DecryptionCriteriaType.NFT_OWNERSHIP:
      return `own NFT ${criterion.contractAddress}`;

    case DecryptionCriteriaType.ERC20_OWNERSHIP:
      return `have ERC20 ${formatAmount(criterion.amount)}`;

    case DecryptionCriteriaType.ADDRESS_OWNERSHIP:
      return `own address ${criterion.address}`;

    case DecryptionCriteriaType.PROFILE_OWNERSHIP:
      return `own profile: ${criterion.profileId}`;

    case DecryptionCriteriaType.FOLLOW_PROFILE:
      return `follow profile ${criterion.profileId}`;

    case DecryptionCriteriaType.COLLECT_PUBLICATION:
      return `have collected ${criterion.publicationId}`;

    case DecryptionCriteriaType.COLLECT_THIS_PUBLICATION:
      return `have collected this publication`;

    case DecryptionCriteriaType.OR:
      return criterion.or.map(formatDecryptionCriterion).join(", ");

    case DecryptionCriteriaType.AND:
      return criterion.and.map(formatDecryptionCriterion).join(", ");
  }
}

type ContentProps = {
  publication: ContentPublicationFragment;
};

function Content({ publication }: ContentProps) {
  if (publication.hidden) {
    return <p>This publication has been hidden</p>;
  }

  if (publication.isGated) {
    if (publication.decryptionCriteria === null) {
      return (
        <p>
          <i>Encrypted content, it is currently not possible to determine the decryption criteria</i>
        </p>
      );
    }

    return (
      <p>
        <i>
          To decrypt this publication you need to:&nbsp;
          <b>{formatDecryptionCriterion(publication.decryptionCriteria)}</b>
        </i>
      </p>
    );
  }

  return <p>{publication.metadata.content}</p>;
}

type PublicationCardProps = {
  publication: PostFragment | CommentFragment | MirrorFragment | PendingPostFragment;
};

export function PublicationCard({ publication }: PublicationCardProps) {
  if (publication.__typename === "PendingPost") {
    return (
      <article style={{ border: "10px solid black" }}>
        <ProfilePicture picture={publication.profile.picture} />
        <p>{publication.profile.name ?? `@${publication.profile.handle}`}</p>
        <p>{publication.content}</p>
      </article>
    );
  }

  return (
    <article>
      <div
        style={{
          border: "3px solid black",
          maxWidth: "64vw",
          padding: "2vh 0 2vh 2vh",
          margin: "auto",
          marginBottom: "4vh",
          borderRadius: "41px 25px 25px 0px",
          boxShadow: "12px 12px 14px #888888",
        }}
      >
        <ProfilePicture picture={publication.profile.picture} />
        <p>{publication.profile.name ?? `@${publication.profile.handle}`}</p>
        <p>
          <Content publication={isMirrorPublication(publication) ? publication.mirrorOf : publication} />
        </p>
      </div>
    </article>
  );
}

type CollectablePublicationCardProps = {
  publication: PostFragment | CommentFragment;
  collectButton: ReactNode;
};

export function CollectablePublicationCard({ publication, collectButton }: CollectablePublicationCardProps) {
  const cardStyles = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    backgroundColor: "white",
    padding: "10px",
    borderRadius: "20px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const profilePictureStyles = {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
    marginRight: "10px",
    alignItems: "center",
  };

  const usernameStyles = {
    color: "#657786",
    fontSize: "14px",
  };

  const contentStyles = {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "400",
  };

  const collectStatsStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10px",
  };

  const collectLimitReachedStyles = {
    color: "#f45d22",
    fontWeight: "600",
    fontSize: "14px",
  };

  const collectTimeExpiredStyles = {
    color: "#657786",
    fontSize: "14px",
  };

  return (
    <article style={cardStyles}>
      <ProfilePicture picture={publication.profile.picture} />
      <div>
        <p>
          <b>{publication.profile.name ?? `@${publication.profile.handle}`}</b>&nbsp;
          <span style={usernameStyles}>@{publication.profile.handle}</span>
        </p>
        <p style={contentStyles}>
          {publication.hidden ? "This publication has been hidden" : publication.metadata.content}
        </p>
        {collectButton}
        {publication.collectPolicy.state === CollectState.COLLECT_LIMIT_REACHED && (
          <p style={collectLimitReachedStyles}>
            {publication.stats.totalAmountOfCollects}/{publication.collectPolicy.collectLimit} collected
          </p>
        )}
        {publication.collectPolicy.state === CollectState.COLLECT_TIME_EXPIRED && (
          <p style={collectTimeExpiredStyles}>Collectable until: {publication.collectPolicy.endTimestamp}</p>
        )}
      </div>
    </article>
  );
}
