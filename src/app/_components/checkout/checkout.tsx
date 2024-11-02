import { BackgroundUpdate } from "../background-update";
import { StaleMessage } from "../stale-message";
import { Uptodate } from "../uptodate";

export const Checkout = ({ isFetching, isStale, refetch }: any) => {
  if (isFetching) return <BackgroundUpdate />;
  if (isStale) return <StaleMessage refetch={refetch} />;

  return <Uptodate />;
};
