import { createStackNavigator } from 'react-navigation';
import PhoneAuth from '../components/phone_auth';
import AuthCode from '../components/code_auth';
import MainTabBar from '../navigation/main_tab_bar';
import LoadNewUser from '../components/load_new_user';
import IntroScreen from '../components/intro';

// console.log(Main);

const AuthStack = createStackNavigator(
  {
    Intro: {
      screen: IntroScreen,
    },
    Phone: {
      screen: PhoneAuth,
    },
    Passcode: {
      screen: AuthCode,
    },
    Load: {
      screen: LoadNewUser,
    },
    Main: {
      screen: MainTabBar,
    },

  },
  {

    mode: 'card',
    headerMode: 'none',

    initialRouteName: 'Intro',
  },
);

export default AuthStack;
