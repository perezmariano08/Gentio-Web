import { createGlobalStyle } from "styled-components";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Hairline'), url(fonts/dunbar/DunbarTall-Hairline.ttf) format('truetype');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Extra Light'), url(fonts/dunbar/DunbarTall-ExtraLight.ttf) format('truetype');
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Light'), url(fonts/dunbar/DunbarTall-Light.ttf) format('truetype');
        font-weight: 300;
        font-style: normal;
    } 

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Book'), url(fonts/dunbar/DunbarTall-Book.ttf) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Regular'), url(fonts/dunbar/DunbarTall-Regular.ttf) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
`;
