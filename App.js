import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/Views/Login/Login'
import HomeScreen from './src/Views/HomeScreen/HomeScreen'
import Logo from './src/Views/Logo'
import CreateAd from './src/Views/Ad/CreateAd'
import TagsList from './src/Views/Tags/TagsList'
import _Date from './src/Views/Date_Time/_Date'
import _Time from './src/Views/Date_Time/_Time'
import SignUpForm from './src/Views/SignUp/SignUpForm'
import HotJobs from './src/Views/Swip/Jobs/HotJobs'

const Routes = StackNavigator(
  {
    Login:      { screen: Login },
    HomeScreen: { screen: HomeScreen },
    Logo:       { screen: Logo },
    Ad:         { screen: CreateAd },
    TagsList:   { screen: TagsList },
    _Date:   { screen: _Date },
    _Time:   { screen: _Time },
    SignUpForm:  { screen: SignUpForm },
	HotJobs: { screen: HotJobs },
  },
  { initialRouteName: 'Login'}
);

export default Routes;

