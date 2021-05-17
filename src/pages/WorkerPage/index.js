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
  FirstNameWrapper, FollowButton, FollowText,
  FollowingButton, FollowingText,
  FollowersView, FormScrollView, FollowersWrapper,
  Header, HeaderImage, HeaderTabView, HeaderTouchable, HrLine,
  Iicon,
  Label, LabelBold, LabelBold2, LabelBoldBoss, LabelBoldBoss2, LabelBoldRed,
  LabelNormal, LabelNormalBoss, LabelNormalWorker,
  LabelSmallBoss, LabelSmallBoss2, LabelSmallRed, LabelSmallWorker, LabelSmallWorker2,
  LabelBoldWorker, LabelBoldWorker2,
  SearchBarTextInput, SpaceView, StatusCircleBoss, StatusCircleRed,
  StatusCircleWorker, StatusView, StatusLineBoss, StatusLineWorker,
  SocialMediaView, SocialMediaWrapper,
  UserNameText, UserInfoView,
  UserProfileView, UserImageBackgroundView, UserImage, UserView,
} from './styles'
import Settings from '~/pages/Settings';
import HeaderView from '~/components/HeaderView'
import logo from '~/assets/detective/detective_remake.png'
import Contacts from '~/components/Contacts'
import api from '~/services/api';

export default function WorkerPage({ navigation, route }) {

  const data = route.params;
  const worker_id = data.id;
  const worker_name = data.worker_name;
  const first_name = data.first_name;
  const last_name = data.last_name;
  const worker_photo = data.avatar;

  const [countFollowers, setCountFollowers] = useState();

  useEffect(() => {
    loadData()
    console.log(data)
  }, [])
  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  // const todayDate = formattedDate(new Date())

  async function loadData() {
    // const userResponse = await api.get('/tasks/user/count', {
    //   params: {
    //     userID: user_id,
    //   }
    // })

    // const workerResponse = await api.get('/tasks/count', {
    //   params: {
    //     workerID: worker_id,
    //   }
    // })

    // const followingResponse = await api.get(`/users/${user_id}/following/count`)
    const followedResponse = await api.get(`/workers/${worker_id}/followed/count`)

    // console.tron.log(followingResponse.data)
    setCountFollowers(followedResponse.data)
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
        {/* <Header>
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
        </Header> */}

        <HeaderTabView>
          <UserNameText>{worker_name}</UserNameText>
          {/* <DateText>{formattedDate(new Date())}</DateText> */}
          <FollowButton>
            <FollowText>Follow</FollowText>
          </FollowButton>
          {/* <FollowingButton>
            <FollowingText>Following</FollowingText>
          </FollowingButton> */}
        </HeaderTabView>

        <UserView>
          <UserProfileView>
            { worker_photo === undefined || worker_photo === null
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
                      worker_photo
                        ? { uri: worker_photo }
                        : insert
                    }
                  />
                </UserImageBackgroundView>
              )
            }
            <UserInfoView>
            {/* <UserNameText>{worker_name}</UserNameText> */}
            <FirstNameWrapper>
              <LabelBold2>{first_name}</LabelBold2>
              <LabelBold2>{last_name}</LabelBold2>
            </FirstNameWrapper>

              <FollowersWrapper>
                <FollowersView onPress={handleFollow}>
                  <LabelBold>{countFollowers}</LabelBold>
                  <LabelNormal>Followers</LabelNormal>
                </FollowersView>
                <FollowersView onPress={handleFollow}>
                  <LabelBold>{countFollowers}</LabelBold>
                  <LabelNormal>Followers</LabelNormal>
                </FollowersView>
              </FollowersWrapper>
            </UserInfoView>

          </UserProfileView>
        </UserView>
        <ContentView>
          <SocialMediaWrapper>
            <SocialMediaView>
              <Iicon name='instagram' size={21}/>
              <BioText>@mais.dennis</BioText>
            </SocialMediaView>
            <SocialMediaView>
              <Iicon name='linkedin' size={21}/>
              <BioText>/dennisdjlee/</BioText>
            </SocialMediaView>
          </SocialMediaWrapper>

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
        </ContentView>
        <ContentView>
        </ContentView>
        <ContentView>
        </ContentView>
      </FormScrollView>
    </Container>
  )
}
