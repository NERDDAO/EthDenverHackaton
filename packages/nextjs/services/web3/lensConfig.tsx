import { LensConfig, staging } from "@lens-protocol/react";
import { localStorage } from "@lens-protocol/react/web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

export const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: staging,
  storage: localStorage(),
};
