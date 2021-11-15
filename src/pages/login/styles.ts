import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const CardContainer = styled.View`
  width: 100%;
`;
export const Input = styled.TextInput`
  background-color: #fff;
  width: 100%;
  padding: 12px;
  margin-bottom: 5px;
  border-radius: 4px;
  font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
  background-color: #007cf9;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 4px;
`;
export const TextButton = styled.Text`
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const TextError = styled.Text`
  color: #fff;
  padding: 5px;
  font-size: 16px;
  margin-bottom: 10px;
`;
