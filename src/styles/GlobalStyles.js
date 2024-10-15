import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg: #0A0311;
        --white: #F4E5D4;
        --orange-500: #FB773C;
    }

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

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Medium'), url(fonts/dunbar/DunbarTall-Medium.ttf) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dunbar Tall';
        src: local('Dunbar Tall Bold'), url(fonts/dunbar/DunbarTall-Bold.ttf) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Dunbar Tall', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: var(--bg);
        color: var(--white);
        height: 100%;
    }

    body, html {
        height: 100%;
    }

    img {
        user-select: none;
    }

    
    h1 {
        font-size: 128px;
        line-height: 90%;
        font-weight: 400;

        @media (max-width: 768px) {
        }

        @media (max-width: 768px) {
            font-size: 60px;
        }
    }
`


