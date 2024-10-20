import { NavigationAction } from '@react-navigation/native';
import React, { MutableRefObject } from 'react';

const navigatorRef = React.useRef<any | MutableRefObject<any>>();
const isReadyRef = React.useRef<any>();
const routeNameRef = React.useRef<any>();

function goBack() {
  if (isReadyRef.current && navigatorRef.current) {
    navigatorRef.current?.goBack();
  }
}
function navigate(name: any, params?: any) {
  if (isReadyRef.current && navigatorRef.current) {
    navigatorRef.current?.navigate(name, params);
  }
}
function dispatch(action: NavigationAction) {
  navigatorRef.current?.dispatch(action);
}
function currentRoute() {
  if (navigatorRef.current) {
    return navigatorRef?.current;
  }
}
export const navigationService = {
  navigatorRef,
  goBack,
  navigate,
  dispatch,
  currentRoute,
  isReadyRef,
  routeNameRef,
};
