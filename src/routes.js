import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
// -----------------------------------------------------------------------------
import Confirm from './pages/Confirm';
import ContactCreate from './pages/Contacts/ContactCreatePage';
import ContactEdit from './pages/Contacts/ContactEditPage';
import ContactTasks from './pages/Contacts/ContactTasksPage';
import Follow from './pages/Contacts/FollowPage';
import WorkerPage from './pages/WorkerPage';

import MessagesConversationPage from './pages/Messages/MessagesConversationPage/index';

import Settings from '~/pages/Settings';
import SignInPhone from './pages/SignInPhone';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import TabRoutes from '~/components/TabRoutes';
// import TestPage from './pages/TestPage';
import TaskCreate from './pages/Tasks/TaskCreatePage';
import TaskEdit from './pages/Tasks/TaskEditPage';

import UpdateProfile from './pages/UpdateProfile';
// import UpdateProfilePhoto from './pages/UpdateProfilePhoto';

import HeaderView from './components/HeaderRoutesView'
// -----------------------------------------------------------------------------
const Stack = createStackNavigator();
const headerBackVisible = false;
const headerHeight = 42;
const headerBackFontSize = 12;
// -----------------------------------------------------------------------------
export default function App() {
  const signed = useSelector(state => state.auth.signed);
  // console.log(signed)
  // -----------------------------------------------------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={signed === true ? 'Home' : 'SignIn'}
        // initialRouteName={'SignIn'}
        screenOptions={{
          headerTitleAlign: "center",
          ...TransitionPresets.ModalTransition,
        }}
      >
      <Stack.Screen name="SignInPhone" component={SignInPhone}
        options={{
          title: 'Entrar',
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignIn" component={SignIn}
        options={{
          title: 'Entrar',
          headerShown: false,
        }}
      />
      <Stack.Screen name="SignUp" component={SignUp}
        options={{
          headerTitle: (() => (<HeaderView data={'Sign Up'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      {/* <Stack.Screen name="TestPage" component={TestPage}
        options={{
          title: 'Entrar',
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TaskCreate"
        component={TaskCreate}
        options={{
          headerTitle: (() => (<HeaderView data={'Create Task'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="TaskEdit"
        component={TaskEdit}
        options={{
          headerTitle: (() => (<HeaderView data={'Edit Task'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{
          headerTitle: (() => (<HeaderView data={'Confirm Task'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: (() => (<HeaderView data={'Settings'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="Follow"
        component={Follow}
        options={{
          headerTitle: (() => (<HeaderView data={'Followers'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="WorkerPage"
        component={WorkerPage}
        options={{
          headerTitle: (() => (<HeaderView data={'WorkerPage'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="ContactCreate"
        component={ContactCreate}
        options={{
          headerTitle: (() => (<HeaderView data={'Adicionar um contato'}/>)),
            headerShown: true,
            headerStyle: {
              height: headerHeight,
              backgroundColor: '#fff',
            },
            headerBackTitleVisible: headerBackVisible,
            headerBackTitle: "Back",
            headerBackTitleStyle: {
              fontSize: headerBackFontSize,
              marginLeft: 8,
              color: '#4433ee',
            },
          }}
        />
      <Stack.Screen
        name="ContactEdit"
        component={ContactEdit}
        options={{
          headerTitle: (() => (<HeaderView data={'Editar contato'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="ContactTasks"
        component={ContactTasks}
        options={{
          headerTitle: (() => (<HeaderView data={'Tarefas do contato'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="MessagesConversationPage"
        component={MessagesConversationPage}
        options={{
          headerTitle: (() => (<HeaderView data={'Chat'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          headerTitle: (() => (<HeaderView data={'Edit Profile'}/>)),
          headerShown: true,
          headerStyle: {
            height: headerHeight,
            backgroundColor: '#fff',
          },
          headerBackTitleVisible: headerBackVisible,
          headerBackTitle: "Back",
          headerBackTitleStyle: {
            fontSize: headerBackFontSize,
            marginLeft: 8,
            color: '#4433ee',
          },
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
