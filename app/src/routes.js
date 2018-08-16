import { createStackNavigator } from 'react-navigation';

import Login from './pages/login'
import Main from './pages/main'
import Todo from './pages/todo'

const Routes = createStackNavigator({
    Login,
    Main,
    Todo
})

export default Routes;