import { DrawerNavigator} from 'react-navigation';

import Finder from '../screens/Finder'
import Filter from '../screens/Filter'
import Scheduler from '../screens/Scheduler'

export const MainStack = DrawerNavigator({
  Finder: {
    screen: Finder,
    navigationOptions: {
      header: null,
    },
  },
  Filter: { 
    screen: Filter,
    navigationOptions: {
      header: null,
    },
  },
  Scheduler: {
    screen: Scheduler,
    navigationOptions: {
      header: null,
    },
  },
});