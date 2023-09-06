import styled from 'styled-components/native'

export const Container = styled.View `
    flex: 2;
`;

export const Image = styled.ImageBackground `
    flex: 1;
    justify-Content: 'center';
    resize: 'contain';
`;

export const TextContainer = styled.View `
    flex: 1;
    margin-left: 24px;
    margin-top: 24px;
`;

export const Title = styled.Text `
    font-size: 50px;
    font-weight: bold;
`;
export const SubTitle = styled.Text `
    font-size: 16px;
    padding-top: 16px;
    color: black;
`;
export const SubmitButton = styled.TouchableOpacity ` 
    padding-Top: 12px;
    padding-Bottom: 12px;
    border-radius: 8px;
    background-color: #418b64;
    margin-right: 25px;
    margin-top: 16px;
    align-items: center;
`;
export const TextButton = styled.Text `
    font-size: 24px;
    color: white;
`;


