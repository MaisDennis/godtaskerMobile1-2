import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const AddIcon = styled(Icon)`
font-weight: 700;
/* margin: 0 16px; */
color: #000;
`;

export const BioText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  padding: 8px;

`;

export const BlockLarge = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #000;
  margin: 0;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockLargeBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #009966;
  margin: 0;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockLargeWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #334466;
  margin: 0;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockSegment = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  margin: 8px auto;
  /* padding: 8px; */

  /* background-color: #f5f5f5; */
  /* background-color: #ee3; */
`;

export const BlockSmallBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 8px;
  border-width: 1px;
  border-color: #009966;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const BlockSmallWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 8px;
  border-width: 1px;
  border-color: #334466;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  border-radius: 8px;
  margin: 8px auto;
  padding: 0 16px;
  background-color: #000;
`;

export const CheckBoxWrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 12px;
  border-radius: 8px;
  /* border: 1px solid #ccc; */
  background-color: #fff;
  /* background-color: #ee3; */
`;

export const Container = styled.SafeAreaView`
  height: auto;
  /* padding: 12px 0; */
  background-color: #fff;
  background-color: #ee3;
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const DateText = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: auto 20px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const FirstNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 8px;
`;

export const FollowersView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50%;
  margin: 0px 8px;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const FollowersWrapper = styled.View`
    display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormScrollView = styled.ScrollView`
  height: 100%;
  width: 100%;
  /* margin: 12px 0; */
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px; /* maintain in px. */
width: 100%;
background-color: #fff;
/* background-color: #f5f; */
`;

export const HeaderImage = styled.Image`
height: 30px;
width: 32px;
margin: 0 16px;
/* background: #f00; */
`;

export const HeaderTabView = styled.View`
display: flex;
flex-direction: row;
justify-content: flex-end;
width: 100%;
height: auto;
padding: 4px 0;
background-color: #fff;
/* background-color: #f5f; */
`;

export const HeaderTouchable = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  width: 12%;
  /* background-color: #f5f; */
`;

export const HrLine = styled.View`
  width: 80%;
  border: 0.5px #ddd;
  margin: 8px auto;
`;

export const Iicon = styled(Icon)`
  color: #18A0FB;
`;

export const Input = styled.TextInput`
  display: flex;
  font-size: 14px;
  min-height: 44px;
  height: auto;
  width: 100%;
  line-height: 20px;
  padding: 8px 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: #000;
  margin: 8px 0;
  color: #000;
  background-color: #ddd;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 0;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBold = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin: 2px 4px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBold2 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  margin: 2px 4px;
  color: #000;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 10%;
  color: #009966;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss2 = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 22px;
  color: #009966;
  /* background-color: #999; */
`;

export const LabelBoldRed = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 22px;
  color: #F64C75;
  /* background-color: #999; */
`;

export const LabelBoldSocialMedia = styled.Text`
  width: auto;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  margin: 0;
  color: #000;
  /* background-color: #999; */
`;

export const LabelBoldWorker = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 10%;
  color: #334466;
  /* background-color: #4433ee; */
`;

export const LabelBoldWorker2 = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 22px;
  color: #334466;
  /* background-color: #999; */
`;

export const LabelNormal = styled.Text`
  text-align: center;
  font-size: 14px;
  margin: 4px 0;
  color: #000;
  /* background-color: #4ee; */
`;

export const LabelNormalBoss = styled.Text`
  text-align: center;
  font-size: 13px;
  margin: 2px 0;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelNormalSocialMedia = styled.Text`
  text-align: left;
  font-size: 14px;
  width: auto;
  margin: 0;
  color: #000;
  /* background-color: #4ee; */
`;

export const LabelNormalWorker = styled.Text`
  text-align: center;
  font-size: 13px;
  margin: 2px 0;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss2 = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallRed = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #F64C75;
  /* background-color: #4ee; */
`;

export const LabelSmallWorker = styled.Text`
  text-align: center;
  font-size: 12px;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmallWorker2 = styled.Text`
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  width: 60px;
  /* margin: 1px 12px; */
  margin: 0 4px;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LinkedInWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  max-width: 100%;
  margin: 4px 8px;
  /* padding: 12px; */
  align-items: flex-start;
  /* background-color: #ff0; */
`;

export const ModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  margin-bottom: 12px;
  /* padding: 12px; */
  align-items: flex-start;
  /* background-color: #ff0; */
`;

export const SearchBarTextInput = styled.TextInput`
  height: 80%;
  width: 50%;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #ddd;
`;

export const SocialMediaButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  width: auto;
  padding: 8px 4px;
  /* background-color: #f5f; */
`;

export const SocialMediaView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: flex-start; */
  /* justify-content: space-between; */
  height: 100%;
  width: 40%;
  margin: 8px;
  /* background-color: #f5f5f5; */
    /* background-color: #fee; */
`;

export const SocialMediaWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  width: 90%;
  margin: 8px 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 24%;
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const StatusCircleBoss = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #009966;
`;

export const StatusCircleRed = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #F64C75;
`;

export const StatusCircleWorker = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  /* border-width: 0.5px; */
  /* border-color: #000; */
  margin: 0 auto;
  background-color: #334466;
`;

export const StatusLineBoss = styled.View`
  width: 60px;
  border-width: 0.5px;
  border-color: #009966;
  margin: 0 auto;
`;

export const StatusLineWorker = styled.View`
  width: 60px;
  border-width: 0.5px;
  border-color: #334466;
  margin: 0 auto;
`;

export const StatusView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  margin: 4px 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const UserImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
`;
export const UserImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 74px;
  width: 74px;
  border-radius: 74px;
  border-width: 1px;
  border-width: 2px;
  border-color: #009966;
  background-color: #009966;
`;
export const UserInfoView = styled.View`
display: flex;
flex-direction: column;
width: 100%;
padding: 0 12px;
/* background-color: #4433ee; */
`;

export const UserNameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin: auto 8px;
  color: #009966;
`;

export const UserProfileView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: space-between; */
height: auto;
width: auto;
margin: 0 20px;
/* background-color: #f5f5f5; */
/* background-color: #f00; */
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: #fff;
  /* background-color: #333; */
`;


export const UserText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;
export const UserAboutText = styled.Text`
  font-size: 12px;
  color: #666;
`;
