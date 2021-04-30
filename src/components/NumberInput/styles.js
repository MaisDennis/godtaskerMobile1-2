import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #999;
  background: #fff;
  /* background: #F5F5; */
`;

export const MinusButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;

  align-items: center;
  height: 100%;
  width: 25%;
  /* background: #ccc; */
`;
export const PlusButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 25%;
/* background: #F5F5; */

`;
export const Input = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 12px;
  line-height: 24px;
  width: 50%;
  color: #999;
/* background: #F5F5; */
`;
export const NumberIcon = styled(Icon)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: auto;
  font-size: 16px;
  font-weight: bold;
  margin: auto;
  color: #4433ee;
/* background: #4433ee; */
`;
