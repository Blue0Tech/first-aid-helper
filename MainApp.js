import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './menu';
import CPR from './pages/cpr';
import CPRAdults from './pages/cprAdults';
import CPRChildren from './pages/cprChildren';
import HeavyBleeding from './pages/stopHeavyBleeding';
import Seizures from './pages/seizures';
import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default createAppContainer(createSwitchNavigator(
  {
    Menu : Menu,
    CPR : CPR,
    CPRAdults : CPRAdults,
    CPRChildren : CPRChildren,
    HeavyBleeding : HeavyBleeding,
    Seizures : Seizures
  },
  {
    initialRouteName : 'Menu'
  }
));