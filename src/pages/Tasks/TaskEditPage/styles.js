import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker' // https://github.com/henninghall/react-native-date-picker
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Feather';

export const AddSubTaskIcon = styled(Icon)`
  font-size: 18px;
  font-weight: bold;
  color: #4433ee;
  /* margin: 4px; */
`;
export const AlignView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  /* background-color: #4433ee; */
`;

export const DateOptionsView = styled.View`
  display: flex;
  width: 90%;
  border-radius: 4px;
  padding: 0 8px;
  /* border: 1px solid #666; */
  background-color: #ddd;
`;
export const DateOptions = styled(DatePicker)`
  width: 100%;
  height: 120px;
  border: 1px solid #ccc;
  margin: 0;
  /* font-size: 20px; */
  /* background-color: #f5f; */
`;

export const FormScrollView = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 12px 0;
  background-color: #f5f5f5;
`;

export const ItemWrapperView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-bottom: 12px;
  /* padding: 12px; */
  align-items: flex-start;
  /* background-color: #ff0; */
`;
export const Input = styled.TextInput`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #999;
  color: #222;
  background-color: #fff;
`;

export const LabelText = styled.Text`
  max-width: 80%;
  /* font-size: ${Platform.OS === 'ios' ? '13px' : '12px'}; */
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin: 12px 4px;
`;

export const ModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 12px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 12px;
  background-color: #f5f5f5;
  /* background-color: #ff0; */
`;
export const ModalText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 12px auto;
  color: #222;
`;

export const Options = styled(Picker)`
  height: 48px;
  width: 80%;
  font-size: 14px;
  border-radius: 4px;
  background-color: #ddd;
`;

export const RadioButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;
  /* background-color: #4ee; */
`;
export const RadioButtonTag = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: auto;
  margin: 12px 8px;
  /* background-color: #999; */
`;
export const RadioButtonTagConfirmPhoto = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: auto;
  margin: 8px;
  /* background-color: #999; */
`;

export const RadioButtonLabel = styled.Text`
  max-width: 100%;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  /* font-size: 14px; */
  font-weight: normal;
  margin: 4px;

`;
export const RadioButtonLabelText = styled.Text`
  max-width: 100%;
  /* font-size: ${Platform.OS === 'ios' ? '13px' : '12px'}; */
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin: 4px;
`;

export const RadioButtonOuter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border-width: 0.5px;
  border-color: #666;
  margin-top: 8px;
  background-color: #fff;

`;
export const RadioButtonInner0 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 0 ? '#666' : '#fff'};
`;
export const RadioButtonInner1 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 1 ? '#666' : '#fff'};
`;
export const RadioButtonInner2 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 2 ? '#666' : '#fff'};
`;
export const RadioButtonInner3 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 3 ? '#666' : '#fff'};
`;
export const RadioButtonInner4 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 4 ? '#666' : '#fff'};
`;

export const SubmitButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 100%;
  border-radius: 4px;
  margin: 16px 0 24px 0;
  background-color: #4433ee;
`;
export const SubmitButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;
export const SubTaskTitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const SubTaskButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
  /* background-color: #666; */
`;
export const SubTaskButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 25%;
  /* background-color: #44ccee; */
`;
export const SubTaskView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  border-radius: 4px;
  /* background-color: #f5f; */
`;
export const SubTaskLabelText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  width: 5%;
  /* margin: 4px; */
`;
export const SubTaskText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #111;
  /* height: 100%; */
  width: 75%;
  /* margin: 4px; */
  /* background-color: #f5f; */
`;
export const SubTaskWeigeText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #111;
  /* height: 100%; */
  width: 40%;
  /* margin: 4px; */
  /* background-color: #f5f; */
`;
export const SubTaskIcon = styled(Icon)`
  height: auto;
  width: auto;
  font-size: 18px;
  font-weight: normal;
  /* text-align: center; */
  margin: auto;
  color: #4433ee;
  /* background-color: #111; */
`;
export const SubTaskInput = styled.TextInput`
  display: flex;
  height: auto;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #999;
  background-color: #fff;
`;
export const SubTaskItemView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;

export const TextWeigeView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
`;
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #222;
`;

export const WeigeView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  margin: 12px;
  /* padding: 12px; */
  /* background-color: #f00; */
`;
export const WeigeTagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  height: auto;
  width: 75%;
  /* background-color: #111; */
`;
export const WeigeText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin-right: 12px;
  /* width: 5%; */
`;
export const WeigeButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: auto;
  margin-left: 60px;
  /* background-color: #f5f; */
`;
