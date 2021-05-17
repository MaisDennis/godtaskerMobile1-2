import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  BioText, BlockLarge, BlockLargeBoss,
  BlockLargeWorker, BlockSegment, BlockSmallBoss, BlockSmallWorker,
  Container, ContentView,
  DateText,
  FollowersView, FormScrollView,
  Header, HeaderImage, HeaderTabView, HeaderTouchable, HrLine,
  Iicon,
  Label, LabelBold, LabelBoldBoss, LabelBoldBoss2, LabelBoldRed,
  LabelNormal, LabelNormalBoss, LabelNormalWorker,
  LabelSmallBoss, LabelSmallBoss2, LabelSmallRed, LabelSmallWorker, LabelSmallWorker2,
  LabelBoldWorker, LabelBoldWorker2,
  SearchBarTextInput, SpaceView, StatusCircleBoss, StatusCircleRed,
  StatusCircleWorker, StatusView, StatusLineBoss, StatusLineWorker,
  SocialMediaView,
  UserNameText, UserView,
  UserProfileView, UserImageBackgroundView, UserImage,
} from './styles'
import Settings from '~/pages/Settings';
import HeaderView from '~/components/HeaderView'
import logo from '~/assets/detective/detective_remake.png'
import Contacts from '~/components/Contacts'
import api from '~/services/api';

export default function Dashboard({ navigation }) {
  const user = useSelector(state => state.user.profile);
  const user_id = useSelector(state => state.user.profile.id);
  const user_name = useSelector(state => state.user.profile.user_name);
  const user_photo = useSelector(state => state.user.profile.avatar.url);

  const worker = useSelector(state => state.worker.profile);
  const worker_id = useSelector(state => state.worker.profile.id);

  const [countFollowers, setCountFollowers] = useState();
  const [countFollowing, setCountFollowing] = useState();

  const [userCountSent, setUserCountSent] = useState();
  const [userCountInitiated, setUserCountInitiated] = useState();
  const [userCountFinished, setUserCountFinished] = useState();
  const [userCountCanceled, setUserCountCanceled] = useState();
  const [userCountOverDue, setUserCountOverDue] = useState();
  const [userCountTodayDue, setUserCountTodayDue] = useState();
  const [userCountTomorrowDue, setUserCountTomorrowDue] = useState();
  const [userCountThisWeekDue, setUserCountThisWeekDue] = useState();
  const [workerCountReceived, setWorkerCountReceived] = useState();
  const [workerCountInitiated, setWorkerCountInitiated] = useState();
  const [workerCountFinished, setWorkerCountFinished] = useState();
  const [workerCountCanceled, setWorkerCountCanceled] = useState();
  const [workerCountOverDue, setWorkerCountOverDue] = useState();
  const [workerCountTodayDue, setWorkerCountTodayDue] = useState();
  const [workerCountTomorrowDue, setWorkerCountTomorrowDue] = useState();
  const [workerCountThisWeekDue, setWorkerCountThisWeekDue] = useState();

  useEffect(() => {
    loadData()
  }, [])
  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  // const todayDate = formattedDate(new Date())

  async function loadData() {
    const userResponse = await api.get('/tasks/user/count', {
      params: {
        userID: user_id,
      }
    })

    const workerResponse = await api.get('/tasks/count', {
      params: {
        workerID: worker_id,
      }
    })

    const followingResponse = await api.get(`/users/${user_id}/following/count`)
    const followedResponse = await api.get(`/workers/${worker_id}/followed/count`)

    // console.tron.log(followingResponse.data)
    setCountFollowers(followedResponse.data)
    setCountFollowing(followingResponse.data)
    setUserCountSent(userResponse.data.countSent)
    setUserCountInitiated(userResponse.data.countInitiated)
    setUserCountFinished(userResponse.data.countFinished)
    setUserCountCanceled(userResponse.data.countCanceled)
    setUserCountOverDue(userResponse.data.countOverDue)
    setUserCountTodayDue(userResponse.data.countTodayDue)
    setUserCountTomorrowDue(userResponse.data.countTomorrowDue)
    setUserCountThisWeekDue(userResponse.data.countThisWeekDue)
    setWorkerCountReceived(workerResponse.data.countReceived)
    setWorkerCountInitiated(workerResponse.data.countInitiated)
    setWorkerCountFinished(workerResponse.data.countFinished)
    setWorkerCountCanceled(workerResponse.data.countCanceled)
    setWorkerCountOverDue(workerResponse.data.countOverDue)
    setWorkerCountTodayDue(workerResponse.data.countTodayDue)
    setWorkerCountTomorrowDue(workerResponse.data.countTomorrowDue)
    setWorkerCountThisWeekDue(workerResponse.data.countThisWeekDue)
  }

  function handleFollow() {
    navigation.navigate('Follow')
  }

  function handleSettings() {
    navigation.navigate('Settings');
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <FormScrollView>
        <Header>
          <SpaceView>
            <HeaderImage source={logo}/>
          </SpaceView>
          <SearchBarTextInput placeholder='Search'/>
          <HeaderTouchable>
            <AddIcon name='refresh-cw' size={20}/>
          </HeaderTouchable>
          <HeaderTouchable onPress={handleSettings}>
            <AddIcon name='settings' size={21}/>
          </HeaderTouchable>
        </Header>

        <HeaderTabView>
          <UserNameText>{user_name}</UserNameText>
          <DateText>{formattedDate(new Date())}</DateText>
        </HeaderTabView>

        <UserView>
          <UserProfileView>
            { user_photo === undefined || user_photo === null
              ? (
                <>
                  <UserImageBackgroundView>
                    <UserImage
                      source={require('~/assets/insert_photo-24px.svg')}
                    />
                  </UserImageBackgroundView>
                  {/* <UserText>n/a</UserText> */}
                </>
              )
              : (
                <UserImageBackgroundView>
                  <UserImage
                    source={
                      user_photo
                        ? { uri: user_photo }
                        : insert
                    }
                  />
                </UserImageBackgroundView>
              )
            }
            <FollowersView onPress={handleFollow}>
              <LabelBold>{countFollowers}</LabelBold>
              <LabelNormal>Followers</LabelNormal>
            </FollowersView>
            <FollowersView>
              <LabelBold>{countFollowing}</LabelBold>
              <LabelNormal>Following</LabelNormal>
            </FollowersView>
          </UserProfileView>
        </UserView>

        <ContentView>
          <StatusView>
            <Label>Boss Status:</Label>
          </StatusView>
          <StatusView>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountSent !== 0
                  ? userCountSent
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Sent</LabelNormalBoss>
            </BlockSmallBoss>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountInitiated !== 0
                  ? userCountInitiated
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Open</LabelNormalBoss>
            </BlockSmallBoss>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountFinished !== 0
                  ? userCountFinished
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Finished</LabelNormalBoss>
            </BlockSmallBoss>
            <BlockSmallBoss>
              <LabelBoldBoss>
                { userCountCanceled !== 0
                  ? userCountCanceled
                  : '-'
                }
              </LabelBoldBoss>
              <LabelNormalBoss>Canceled</LabelNormalBoss>
            </BlockSmallBoss>
          </StatusView>

          <StatusView>
            <BlockLargeBoss>
              <BlockSegment>
                <LabelBoldRed>
                  { userCountOverDue !== 0
                    ? userCountOverDue
                    : '-'
                  }
                </LabelBoldRed>
                <LabelBoldBoss2>
                  { userCountTodayDue !== 0
                    ? userCountTodayDue
                    : '-'
                  }
                </LabelBoldBoss2>
                <LabelBoldBoss2>
                  { userCountTomorrowDue !== 0
                    ? userCountTomorrowDue
                    : '-'
                  }
                </LabelBoldBoss2>
                <LabelBoldBoss2>
                  { userCountThisWeekDue !== 0
                    ? userCountThisWeekDue
                    : '-'
                  }
                </LabelBoldBoss2>
                <LabelBoldBoss2>
                  { userCountSent !== 0
                    ? userCountSent
                    : '-'
                  }
                </LabelBoldBoss2>
              </BlockSegment>
              <BlockSegment>
                <StatusCircleRed/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/><StatusLineBoss/>
                <StatusCircleBoss/>
              </BlockSegment>
              <BlockSegment>
                <LabelSmallRed>overdue</LabelSmallRed>
                <LabelSmallBoss2>due today</LabelSmallBoss2>
                <LabelSmallBoss>tomorrow</LabelSmallBoss>
                <LabelSmallBoss>this week</LabelSmallBoss>
                <LabelSmallBoss2>Total</LabelSmallBoss2>

              </BlockSegment>
            </BlockLargeBoss>
          </StatusView>
        </ContentView>
        <ContentView>
          <StatusView>
            <Label>Jobs Status:</Label>
          </StatusView>
          <StatusView>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountReceived !== 0
                  ? workerCountReceived
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Received</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountInitiated !== 0
                  ? workerCountInitiated
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Open</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountFinished !== 0
                  ? workerCountFinished
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Finished</LabelNormalWorker>
            </BlockSmallWorker>
            <BlockSmallWorker>
              <LabelBoldWorker>
                { workerCountCanceled !== 0
                  ? workerCountCanceled
                  : '-'
                }
              </LabelBoldWorker>
              <LabelNormalWorker>Canceled</LabelNormalWorker>
            </BlockSmallWorker>
          </StatusView>

          <StatusView>
            <BlockLargeWorker>
              <BlockSegment>
                <LabelBoldRed>
                  { workerCountOverDue !== 0
                    ? workerCountOverDue
                    : '-'
                  }
                </LabelBoldRed>
                <LabelBoldWorker2>
                  { workerCountTodayDue !== 0
                    ? workerCountTodayDue
                    : '-'
                  }
                </LabelBoldWorker2>
                <LabelBoldWorker2>
                  { workerCountTomorrowDue !== 0
                    ? workerCountTomorrowDue
                    : '-'
                  }
                </LabelBoldWorker2>
                <LabelBoldWorker2>
                  { workerCountThisWeekDue !== 0
                    ? workerCountThisWeekDue
                    : '-'
                  }
                </LabelBoldWorker2>
                <LabelBoldWorker2>
                  { workerCountInitiated !== 0
                    ? workerCountInitiated
                    : '-'
                  }
                </LabelBoldWorker2>
              </BlockSegment>
              <BlockSegment>
                <StatusCircleRed/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/><StatusLineWorker/>
                <StatusCircleWorker/>
              </BlockSegment>
              <BlockSegment>
                <LabelSmallRed>overdue</LabelSmallRed>
                <LabelSmallWorker2>due today</LabelSmallWorker2>
                <LabelSmallWorker>tomorrow</LabelSmallWorker>
                <LabelSmallWorker>this week</LabelSmallWorker>
                <LabelSmallWorker2>Total</LabelSmallWorker2>
              </BlockSegment>
            </BlockLargeWorker>
          </StatusView>
        </ContentView>
        <ContentView>
          <StatusView>
            <Label>Bio:</Label>
          </StatusView>

          <StatusView>
            <BlockLarge>
              <BioText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </BioText>
            </BlockLarge>
          </StatusView>
        </ContentView>
        <ContentView>
          <SocialMediaView>
            <Iicon name='instagram' size={21}/>
            <BioText>@mais.dennis</BioText>
          </SocialMediaView>
          <SocialMediaView>
            <Iicon name='linkedin' size={21}/>
            <BioText>linkedin.com/in/dennisdjlee/</BioText>
          </SocialMediaView>
        </ContentView>
        <ContentView>

        </ContentView>
        <ContentView>

        </ContentView>
        <ContentView>

        </ContentView>
      </FormScrollView>
    </Container>
  )
}
