import { useMoreFetch } from 'hooks/useMoreFetch';

import { Strings } from 'support/Constants';

import DataView from 'components/DataView';
import { UserCard } from 'components/Card';

const Newest = ({ lang }) => {
  const { loading, moreLoading, noData, items } = useMoreFetch({ method: 'users' })

  return (
    <DataView
      data={items}
      noData={noData}
      loading={loading}
      moreLoading={moreLoading}
      card={UserCard}
      noDataMessage={Strings.noUsersYet[lang]}
      errorMessage={Strings.unableToDisplayUsers[lang]}
    />
  )
}

export default Newest;
