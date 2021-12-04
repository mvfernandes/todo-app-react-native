import styled, {css} from 'styled-components/native';

export const Header = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #eaeaea;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #333;
  font-weight: 700;
  font-size: 18px;
  flex: 1;
  margin-left: 10px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  background-color: #6a0ce4;
  padding: 2px;
  border-radius: 4px;
`;

export const Container = styled.View`
  padding: 10px;
  flex: 1;
`;

export const TodoRow = styled.View`
  margin-top: 3px;
  padding: 10px;
  width: 100%;
  background: #eaeaea;
  border-radius: 3px;
  flex-direction: row;
`;

export const TodoTitle = styled.Text<{done: boolean}>`
  color: #333;
  font-size: 15px;
  flex: 1;
  padding: 0 10px;
  ${({done}) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Footer = styled.View`
  margin-top: 2px;
  padding: 10px;
  width: 100%;
  background: #eaeaea;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonSend = styled.TouchableOpacity`
  background-color: #6a0ce4;
  padding: 8px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  width: 100%;
  color: #fff;
  text-align: center;

  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: #eaeaea;
  padding: 6px;
  font-size: 16px;
  flex: 1;
`;

export const TextError = styled.Text`
  width: 100%;
  color: #fff;
  text-align: center;

  font-size: 15px;
  padding-bottom: 10px;
`;