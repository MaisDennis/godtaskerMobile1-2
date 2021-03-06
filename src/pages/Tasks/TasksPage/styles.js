import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const AddIcon = styled(FeatherIcon)`
font-weight: 700;
margin: 0 16px;
color: #000;
`;

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px; /* maintain in px. */
background-color: #fff;
/* background-color: #f00; */
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
justify-content: space-between;
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
justify-content: flex-end;
width: 30%;
/* background-color: #f5f; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  height: 100%;
`;

export const SearchBarTextInput = styled.TextInput`
  height: 80%;
  width: 50%;
  border-radius: 8px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #ddd;
`;

export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 30%;
  background-color: #fff;
/* background-color: #f5f; */
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  color: #999;
  margin: 12px auto 0;
  /* background-color: #4433ee; */
`;
export const TitleNumber = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  color: #999;
  margin: 0 auto 0;
  /* background-color: #4433ee; */
`;

export const UpperTabView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 25%;
  border-radius: 16px;
  margin: 4px auto;
  background-color: #000;
`;
export const UpperTabText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
`;
