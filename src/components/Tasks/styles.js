import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Button from '~/components/Button';

export const AcceptButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 8px;
  background-color: #18A0FB;
`;

export const AcceptButtonView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  height: auto;
  width: 85%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #000;
  padding: 0 0 16px;
  /* background-color: #333e; */
`;

export const AlignCheckBoxView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 100%;
  /* background-color: #ee4; */
`;

export const AlignDetailsView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 80%;
  /* background-color: #666; */
`;

export const BackButton = styled(TouchableOpacity)`
  height: 36px;
  /* width: 120px; */
  width: 100%;
  border-radius: 8px;
  margin: 16px auto 8px;
  padding: 0 16px;
  background-color: #000;
`;
export const BellIcon = styled(Icon)`
font-size: 24px;
margin: auto 0;
color: #000;
/* background-color: #ee2; */
`;

export const BodyView = styled.View`
  height: 100%;
  width: 66%;
  /* background-color: #f44; */
`;

export const BodyWrapper = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  /* background-color: #f44; */
`;

export const ButtonIcon = styled(Icon)`
font-size: 21px;
padding: 4px;
color: #4433ee;
`;
export const BottomHeaderView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px auto 4px;
  /* background-color: #f44; */
`;
export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 20%;
  text-align: center;
  margin: 0 auto;
  /* background: #f4f; */
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: auto;
  color: #fff;
  /* color: #44ccee; */
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: 0;
  /* padding: 4px 0 12px; */
  /* background-color: #fe2; */
`;

export const CameraButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 4px;
  background-color: #4433ee;
`;

export const CenterView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 12px 0;
  background-color: #e44;
`;

export const CheckBoxView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 0 8px;
`;

export const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 2px 0 0;
  padding: 0;
  background-color: ${props => props.taskConditionIndex === 1
    ? '#fff'
    : '#eee'
  };
  /* background-color: #F5F5; */
`;
export const ConfirmButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ConfirmIcon = styled(Icon)`
font-size: 28px;
color: #19AE7C;
  /* background-color: #f00; */
`;

export const DescriptionView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 4px 0 8px;
  padding: 0 8px;
  /* background-color: #ee44; */
`;
export const DescriptionBorderView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  width: 100%;
  padding: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  background-color: #f5f5f5;
  margin: 8px 0;
  /* background-color: #f00; */
`;

export const DescriptionSpan = styled.Text`
  font-weight: normal;
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
  max-width: 85%;
  margin: 4px;
  color: #222;
`;

export const DatesAndButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 8px auto 0;
  /* background-color: #4433ee; */
`;

export const DetailsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 8px 0;
  /* background-color: #4433ee; */
`;

export const DueTimeView = styled.View`
  border-radius: 4px;
  padding: 0 12px;
  background: ${props => props.pastDueDate == true ? '#EBA5A5' : '#D0ECE3'};
`;
export const DueTime = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
`;

export const FormScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const HrLine = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 4px auto;
`;

export const ImageWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 95%;
  margin-top: 4px;
  margin-bottom: 8px;
  /* background-color: #ee44; */
`;

export const ImageView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  width: 100%;
  padding: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  /* background-color: #F5F5; */
`;

export const IconsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  /* background-color: #4433ee; */
`;

export const Image = styled.Image`
  height: 300px;
  width: 300px;
  margin: 8px;
  /* border-radius: 48px; */
  background-color: #f5f5f5;
`;
export const InnerStatusView = styled(LinearGradient)`
  height: 8px;
  border-radius: 16px;
  /* background-color: #f3c775; */
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  margin-right: 8px;
  color: #000;
`;

export const LabelInitiated = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  margin-right: 32px;
  max-width: 60px;
  color: #19AE7C;
`;

export const LabelEnded = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  margin-right: 4px;
  max-width: 60px;
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#19AE7C'};
`;

export const LeftView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  background-color: #D4D3FF;
`;

export const ModalView = styled.View`
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 12px 0;
  background-color: #fff;
  /* background-color: #f00; */
`;
export const ModalText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 16px auto 8px;
  color: #222;
  /* background-color: #f00; */
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  color: #222;
`;

export const OuterStatusView = styled.View`
  display: flex;
  flex-direction:row;
  width: 75%;
  border-radius: 16px;
  margin: 8px 0;
  /* margin-bottom: 8px; */
  background-color: #F5F5F5;
`;

export const RejectTaskInput = styled.TextInput`
  display: flex;
  height: auto;
  width: 85%;
  padding: 12px;
  margin: 8px auto 16px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #000;
  background-color: #ddd;
`;

export const RejectButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 8px;
  background-color: #999;
`;

export const RightView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 12%;
  margin: 16px 0;
  /* background-color: #ddd; */
`;

export const StartTimeView = styled.View`
border-radius: 4px;
padding: 0 12px;
background: ${props => props.initiated === null ? '#ddd' : '#D0ECE3'};
`;

export const StartTime = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #4433ee; */
`;
export const Time = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#19AE7C'};
`;

export const TitleView = styled.View`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px auto 0;
  color: #fff;
  /* background-color: #663333; */
`;
export const TaskIcon = styled(Icon)`
font-size: 18px;
color: #000;
  /* background-color: #f00; */
`;
export const TaskAttributesView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 4px;
  background: ${ props => props.taskAttributes === 0
    ? '#F3E675'
    : props => props.taskAttributes === 1
      ? '#f3c775'
      : props => props.taskAttributes === 2
        ? '#ED7777'
        : '#fff'
  };
`;

export const TitleBorderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-color: #f00; */
`;
export const TitleIcon = styled(Icon)`
  font-size: 16px;
  margin-right: 8px;
  color: #334466;
`;
export const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  color: #334466;
`;

export const TitleTextModal = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '17px' : '16px'};
  width: auto;
  text-align: left;
  color: #334466;
  /* background-color: #4433ee; */
`;

export const ToText = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  margin-right: 8px;
  color: #222;

  /* background-color: #4433ee; */
`;

export const ToWorkerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 8px auto 0;
  /* background-color: #4433ee; */
`;

export const UserImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
`;
export const UserImageBackground = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 64px;
  border-width: 1px;
  border-color: #334466;
  /* background-color: #fff; */
  /* background-color: #666; */
`;

export const UnreadMessageCountText = styled.Text`
  font-size: 12px;
  margin: auto;
  /* background-color: #f00; */
`;

