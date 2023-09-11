import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #fff;
    padding: 16px;
    justify-content: space-between;
`;

export const HeaderContainer = styled.View`
    margin-top: 50px;
    margin-left: 18px;
`;

export const HeaderText = styled.Text`
    font-size: 24px;
    font-weight: 600;
`;

export const CardAlign = styled.View`
    align-items: center;
    margin-top: 30px;
    flex: 1;
`;

export const CardContainer = styled.View`
    border-radius: 8px;
    background: #ecf8f3;
    width: 327px;
    height: 73px;
    overflow: hidden;
    flex-direction: row;
`;

export const Logo = styled.ImageBackground`
    width: 91px;
    height: 73px;
`;

export const ButtonContainer = styled.View`
    padding: 7px;
    flex-direction: row;
`;

export const Buttons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 49px;
`;

export const Button = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    margin: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #418b64;`
;

export const ButtonAdd = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #418b64;
    margin: 10px;
    justify-content: center;
    align-items: center;`
;

export const CartButton = styled.TouchableOpacity`
    height: 48px;
    border-radius: 8px;
    background-color: #418b64;
    justify-content: center;
    align-items: center;
    width: 327px;
    margin-left: 16px;`
;

export const TextButtons = styled.Text`
    font-size: 18px;
    color: #fff;`
;

export const SumCard = styled.View`
    border-radius: 4px;
    background: #ecf8f3;
    width: 324px;
    height: 30px;
    border: 1px solid #418b64;
    flex-direction: row;
    margin-bottom: 16px;
    margin-left: 16px;
    justify-content: space-between;
    align-items: center;
    padding: 6px;`
;