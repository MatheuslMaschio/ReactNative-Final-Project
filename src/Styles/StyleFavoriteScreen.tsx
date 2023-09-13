import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background: #fff;
    padding: 16px;
    justify-content: space-between;
    display: flex;
`;

export const TitleContainer = styled.View`
    margin-top: 50px;
    margin-left: 18px;
    `
;

export const TitleText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px; 
`
;

export const BackGround = styled.View`
    align-items: center;
    margin-top: 30px;`
;

export const CardContainer = styled.View`
    border-radius: 8px;
    background: #ecf8f3;
    width: 100%;
    height: 73px;
    overflow: hidden;
    flex-direction: row;
    margin-bottom: 16px;
    `
;

export const ImageBG = styled.ImageBackground`
    width: 91px;
    height: 73px;`
;

export const ButtonFavorite = styled.TouchableOpacity`
    width: 40px; 
    height: 40px; 
    border-radius: 20px; 
    background-color: #fff; 
    position: absolute; 
    right: 16px; 
    top: 16px; 
    bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    `
;