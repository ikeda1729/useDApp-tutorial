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
  const routeMatch = useRouteMatch(['/task1', '/task2', '/task3']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <MuiTabs value={currentTab}>
      <Tab label="Task 1" value="/task1" to="/task1" component={Link} />
      <Tab label="Task 2" value="/task2" to="/task2" component={Link} />
      <Tab label="Task 3" value="/task3" to="/task3" component={Link} />
    </MuiTabs>
  );
}
