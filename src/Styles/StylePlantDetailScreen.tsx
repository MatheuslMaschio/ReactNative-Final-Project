import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  flex: 1;
  justify-content: space-between;
`;

export const ImageDetails = styled.ImageBackground`
  width: 100%;
  height: 247px;
`;

export const TitleDetails = styled.Text`
  font-size: 28px;
  font-weight: 600;
  padding-left: 25px;
`;

export const PriceButton = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsDetails = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const ButtonTotal = styled.TouchableOpacity`
  width: 114px;
  height: 48px;
  border-radius: 8px;
  background: #418b64;
  justify-content: center;
  align-items: center;
`;

export const TextTotal = styled.Text`
  color: #fff;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

export const Description = styled.Text`
  padding-left: 24px;
  padding-right: 24px;
  line-height: 24px;
  color: #969595;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const ButtonFavorites = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;
