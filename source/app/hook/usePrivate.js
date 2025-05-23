import { useContext } from 'react';

import { RouteContext } from '../hoc/RouteProvider';

function usePrivate() {
  return useContext(RouteContext);
}

export default usePrivate;