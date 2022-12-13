import React from 'react';

import { Tabs as MuiTabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import {
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

export const Tabs = () => {
  const routeMatch = useRouteMatch(['/exercise1', '/exercise2', '/exercise3']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <MuiTabs value={currentTab}>
      <Tab label="Exercise 1" value="/exercise1" to="/exercise1" component={Link} />
      <Tab label="Exercise 2" value="/exercise2" to="/exercise2" component={Link} />
      <Tab label="Exercise 3" value="/exercise3" to="/exercise3" component={Link} />
    </MuiTabs>
  );
}
