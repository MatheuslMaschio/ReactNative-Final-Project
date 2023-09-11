import styled from "styled-components/native";

export const Container = styled.ScrollView`
    padding: 17px;
    background: #fff;
    flex: 1;
`;

export const Header = styled.View `
    margin-top: 50px;
    background: #fff;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 18px;
    padding-bottom: 40px;
`;

export const HeaderText = styled.Text`
    font-size: 24px;
    font-weight: 600;
    
`
;

export const ProfileImage = styled.ImageBackground`
    width: 30px;
    height: 30px;
` ;

export const TextOne = styled.Text`
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    margin-left: 18px;
    padding-bottom: 24px;
`
;

export const CardOneContainer = styled.TouchableOpacity`
    background: #fff;
    width: 287px;
    height: 140px;
    border-radius: 8px;
    overflow: hidden;
    margin-left: 18px;
`;

export const CardOne = styled.View`
    flex-direction: row;
`;

export const CardOneImage = styled.ImageBackground`
    width: 150px;
    height: 140px;
`;

export const ButtonFavoritesOne = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #fff;
    position: absolute;
    margin-top: 4px;
    margin-left: 4px;
    align-items: center;
    justify-content: center;
`;

export const TextCardOne = styled.View`
    padding: 8px;
    justify-content: space-between;
`;

export const CardContainerTwo = styled.View`
    margin-top: 100px;
    margin-left: 18px;
`;

export const Card = styled.View`
    background: #fff;
    width: 327px;
    height: 279px;
    border-radius: 8px;
    overflow: hidden;
`;

export const ImageB = styled.ImageBackground`
    width: 327px;
    height: 209px;
`;

export const ButtonFavorites = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #fff;
    position: absolute;
    margin-top: 12px;
    margin-left: 12px;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.View`
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonCart = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: #418b64;
    align-items: center;
    justify-content: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: 121px;
    height: 20px;
    background: #418b64;
    border-radius: 8px;
`;

export const TextButtonAdd = styled.Text `
    color: #fff;
    font-size: 12px;
    text-align: center;
`;