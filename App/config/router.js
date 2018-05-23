import { createStackNavigator} from 'react-navigation';

import Finder from '../screens/Finder'
import Filter from '../screens/Filter'
import Scheduler from '../screens/Scheduler'

export const MainStack = createStackNavigator({
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
