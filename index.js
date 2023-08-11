/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/typescript_demo/context/basic/App';
import {name as appName} from './app.json';
import App from './src/typescript_demo/useref/App';
// import App from './src/typescript_demo/context/futurevalue/App';

AppRegistry.registerComponent(appName, () => App);
