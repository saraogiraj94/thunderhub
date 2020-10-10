import { toast } from 'react-toastify';
import { renderLine } from 'src/components/generic/helpers';
import {
  Card,
  CardWithTitle,
  DarkSubTitle,
  Separation,
  SubTitle,
} from 'src/components/generic/Styled';
import { LoadingCard } from 'src/components/loading/LoadingCard';
import { Price } from 'src/components/price/Price';

import { useGetLnMarketsUserInfoQuery } from 'src/graphql/queries/__generated__/getLnMarketsUserInfo.generated';
import { getErrorContent } from 'src/utils/error';

export const UserInfo = () => {
  const { data, loading } = useGetLnMarketsUserInfoQuery({
    onError: error => toast.error(getErrorContent(error)),
  });

  if (loading) {
    return <LoadingCard title={'LnMarkets'} />;
  }

  if (!data?.getLnMarketsUserInfo) {
    return (
      <CardWithTitle>
        <SubTitle>Account Info</SubTitle>
        <Card>
          <DarkSubTitle>Unable to get user info.</DarkSubTitle>
        </Card>
      </CardWithTitle>
    );
  }

  return (
    <CardWithTitle>
      <SubTitle>Account User</SubTitle>
      <Card>
        {renderLine('Username', data?.getLnMarketsUserInfo?.username)}
        {renderLine(
          'Balance',
          <Price amount={data?.getLnMarketsUserInfo?.balance} />
        )}
        <Separation />
        {renderLine('ID', data?.getLnMarketsUserInfo?.uid)}
        {renderLine('Last IP', data?.getLnMarketsUserInfo?.last_ip)}
        {renderLine(
          'Linking Public Key',
          data?.getLnMarketsUserInfo?.linkingpublickey
        )}
      </Card>
    </CardWithTitle>
  );
};
