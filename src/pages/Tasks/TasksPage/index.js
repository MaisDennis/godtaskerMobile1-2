import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import Task from '~/components/Tasks';
import api from '~/services/api';
import HeaderView from '~/components/HeaderView';
import logo from '~/assets/detective/detective_remake.png'
import {
  AddIcon,
  Container,
  List,
  Header, HeaderImage, HeaderTabView, HeaderTouchable,
  SearchBarTextInput, SpaceView,
  Title, TitleNumber,
  UpperTabView, UpperTabText,
} from './styles';
// -----------------------------------------------------------------------------
export default function Dashboard({ navigation }) {
  const [tasks, setTasks] = useState([]);
  const [taskConditionIndex, setTaskConditionIndex] = useState();

  const workerID = useSelector(state => state.worker.profile.id);
  const update_tasks = useSelector(state => state.task.tasks);
  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  const todayDate = formattedDate(new Date())

  useEffect(() => {
    loadTasks();
  }, [ update_tasks ]);

  async function loadTasks() {
    let response = await api.get(`tasks/unfinished`, {
      params: { workerID },
    });
    setTasks(response.data);
    setTaskConditionIndex(1);
  }

  async function loadFinished() {
    let response = await api.get(`tasks/finished`, {
      params: { workerID }
    })
    setTasks(response.data);
    setTaskConditionIndex(2);
  }

  async function loadCanceled() {
    let response = await api.get(`tasks/canceled`, {
      params: { workerID }
    })
    setTasks(response.data);
    setTaskConditionIndex(3);
  }
  // -----------------------------------------------------------------------------
  return (
    <Container>
      <Header>
        <SpaceView>
          <HeaderImage
            source={logo}
          />
        </SpaceView>

        <SearchBarTextInput
          placeholder='Search'
        />
        <HeaderTouchable onPress={() => loadTasks()}>
          <AddIcon name='refresh-cw' size={20}/>
        </HeaderTouchable>
      </Header>

      <HeaderTabView>
        <UpperTabView onPress={() => loadTasks()}>
          <UpperTabText>Open</UpperTabText>
        </UpperTabView>
        <UpperTabView onPress={() => loadFinished()}>
          <UpperTabText>Finished</UpperTabText>
        </UpperTabView>
        <UpperTabView onPress={() => loadCanceled()}>
          <UpperTabText>Canceled</UpperTabText>
        </UpperTabView>
      </HeaderTabView>
      { tasks == ''
        ? (
          <Title>No tasks with this status</Title>
        )
        : (
          <List
            data={tasks}
            keyExtractor={item => String(item.id)}
            renderItem={({ item, index }) => (
              <>
                {/* <TitleNumber>{index+1}</TitleNumber> */}
                <Task
                  key={item.id}
                  data={item}
                  navigation={navigation}
                  // position={index+1}
                  taskConditionIndex={taskConditionIndex}
                />
              </>
            )}
          />
        )
      }
    </Container>
  );
}
