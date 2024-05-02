import React from 'react';
import Cards from "../components/Cards";
import "../App.css"
import Cart from '../pages/Cart';

const flights = [
    {
        id: "1",
        destination: "Hawaii",
        price: "1300$",
        img: "https://dosuga.net/uploads/posts/2022-07/dosuga.net_foto_krasivye-fotografii-prirody-na-gavajah-24.jpg"
    },
    {
        id: "2",
        destination: "Brooklin",
        price: "1000$",
        img: "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666399479_16-mykaleidoscope-ru-p-mankhettenskii-most-v-nyu-yorke-instagram-19.jpg"
    },
    {
        id: "3",
        destination: "Switzerland",
        price: "1800$",
        img: "https://avatars.mds.yandex.net/i?id=7f196775da5553e3d6dd94ae7668d58e63764531-10701561-images-thumbs&n=13"
    },
    {
        id: "4",
        destination: "Moscow",
        price: "800$",
        img: "https://yandex-images.clstorage.net/kHF9I6386/bc49143r/FK-U5XPPagGOfJlVUgFOOfLiGHxcGD_J-wSVk03igKYKOqyA6fYg5SPEJjt3pkxF_DptZNsnK9_nSGKWVEqpWuH-xMF3C14wG_ntJJbljklio-zNiJg7uD4kJOL4l1TWP4888E9gwpJUp_SoEAR74k3_GPSudspqVqvEN9F4G42ELBZ1Qz15dl3NqWMio0xI0zO_r56IWSm9dKcVqPXlkb562KR-siChB8VUOBPHe4HMnHlWPBbsOgdap_Ojiuicty7kZSKseKb_vnlB4LAvufBS7MzvyakKz5a1dtomF4GsyDv1PDIDwhfWhWuTNonhrEyKZcw0PlnFuoewk2nqX4Ts5CWS3DllTwybApCjH5iAM1yuTmhJ25x0lvY7p0cQ3EubBy5BolHlpISpYzdIYs7PagT_FswLp5sVgzLIG35GbDekEW8YRnyNW8Pw4z-48DP8zA16W9rthzVkW6clA15I2zVMQwHStBTHeXP2-FBejRgErnReetc4xkChqEm_hN2UpQHPycUNvPrA8SOM-3IwP84_6anpPcS1ZirXBMN8K_jlzmFCoLXFZphwVlmR_O5ZN6013YrFeiWCcms57vTeZdYS_9slzAwJI4DxP9ox0Qx878sp66w0NvQb1gbCj_mqhC8SEME0tvTZoDZoAz5-aSb_pm0KpSk0gIFYWHz2b8Y1Ao1b110OKhNTEk3Z8sIc790JmQrslHb2WebV8pxoiHe-ALIA5semeDIki8A-rApF7mQvu7Q4ZUFQ2jm8xG-0dGJNacRvPfrRwjJfWDBRT-7MG2vprNb3dPh1loHP-dsmXKMTsKR0lkhzlVtQvq9ZFEw1f8pXKzbxYKmJj2Sd59ajzspWDs764NODrFnzIr8c3PlJua_mtLWp9gSjXAhIRf-j09PmRmZqsQdpMDxfSCXPBSx7lAt0kLGLq2x3nIVmgs4Zpm39irHy432IgyIN_nxb6Shf1Ia2euc38"
    },
    {
        id: "5",
        destination: "Primorsko",
        price: "1100$",
        img: "https://data.solvex.sk/Hotel/35630.jpeg"
    },
    {
        id: "6",
        destination: "Istanbul",
        price: "1150$",
        img: "https://avatars.mds.yandex.net/i?id=c21b9bd0ae36cbab868460be0a48d5c2b1eef718-10995463-images-thumbs&n=13"
    },
    {
        id: "7",
        destination: "Toronto",
        price: "950$",
        img: "https://sun9-16.userapi.com/c10266/u6282511/-14/z_6d7c9438.jpg"
    },
    {
        id: "8",
        destination: "Rome",
        price: "1250$",
        img: "https://i.pinimg.com/736x/34/96/78/34967857c0b73628938adc2d888bfb08.jpg"
    },
    {
        id: "9",
        destination: "Astana",
        price: "650$",
        img: "https://avatars.mds.yandex.net/i?id=4565dab103915e6370f4d90f74ef8beb11e1477f-9821502-images-thumbs&n=13"
    }

];

const DataBase = () => {
    
    return(

        <div className="cardsView">
            <Cards items={flights} />
            <Cart  items={flights} />
        </div>
    )
}

export default DataBase;