// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUUlBk_1Qynuf57TjpCa1iVwF551VCHTc",
    authDomain: "orderdemo-948c3.firebaseapp.com",
    projectId: "orderdemo-948c3",
    storageBucket: "orderdemo-948c3.appspot.com",
    messagingSenderId: "799614623104",
    appId: "1:799614623104:web:92afecd0123b25b5c33565",
    measurementId: "G-ZFVTVVKK3S"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ordersRef = database.ref('orders');
const lockRef = database.ref('lockState');



const drinkShops = [
    "可不可",
    "茶學苑",
    "新井茶",
    "50嵐",
    "清心福全",
    "五桐號",
    "迷客夏",
    "得正",
    "鶴茶樓",
    "龜記",
    "麻古",
    "Tea's原味",
    "LOHASS",
    "一沐日",
    "上宇林",
    "烏弄",
    "初韻",
    "花火禾茶",
    "馬祖奶茶",
    "茗茗究市",
    "黛黛茶",
    "吾奶王",
    "先喝道"
];

const menuImages = {
    "可不可": "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/463333113_2990076151174647_3709884838758181781_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=sCmPCmy4PXgQ7kNvgG-N4W7&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=A4DBcUBZGBP-B4SuJWkKMux&oh=00_AYAvKfTn4vaF1FCqGDykAoCUUhqQlQR8CpxeUxqqJwZQmg&oe=67139282",
    "茶學苑": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/463062770_2990076327841296_3757478358151022934_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rQcPD4mDyNAQ7kNvgG9xCQj&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=AJHRmpBadENSluR-qljq1Ja&oh=00_AYA77rPaIt2wv-rPkyuHKObiDdKao12LY94wj6or6rWUuw&oe=6713A0EE",  // 請替換為實際的圖片URL
    "新井茶": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/463410658_2990077267841202_7779726754212916881_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=3tOtNOeWNl8Q7kNvgGZn151&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=Af_Q1cJonb0A0_-lbDYiDFQ&oh=00_AYBYrqvNqzatL2PN7jSugPq9i2B1XTSlOz9Adtfg1tJH-g&oe=67138111",  // 請替換為實際的圖片URL
    "50嵐": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463200604_2990075501174712_4158242336052013381_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=6KspE9p91REQ7kNvgGtN3HM&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AHeceC30AiNFqA37HP0QKbt&oh=00_AYAfoTe3Zq_BDgnKTAK35b2JFvSN1FjgyStLbmBTwh6FFw&oe=67138ED7",  // 請替換為實際的圖片URL
    "清心福全": "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/463340874_2990077044507891_7484948481723085116_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_ohc=JQ7d9hTRD4cQ7kNvgG2Nqza&_nc_zt=23&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=AU4qc8wLmWACHE_yaAh4Z0h&oh=00_AYBzuNrc4Lrb9RwPadnRU3kzvRCXryIfyRNpxwxFlmDIvw&oe=67139BEC",  // 請替換為實際的圖片URL
    "五桐號": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463197455_2990085611173701_5128935838500832920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=O44PBMccl7gQ7kNvgEqEk7q&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=A12r8XixCZmmhyhjDf_YEoo&oh=00_AYB0iOQDdza-cR2B_We5pgP0zsve3tnWlNDs8FRawxyT1Q&oe=6713B691",  // 請替換為實際的圖片URL
    "迷客夏": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463341529_2990076591174603_4626894757057732761_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iyXCk6430EsQ7kNvgEODTrd&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AIRbdMklgHPCfsz6mnSX3Th&oh=00_AYA-4s03shI6rE1kgbGSwngWTrCCQxqaLIIkr9ZSH1vvsA&oe=67138769",  // 請替換為實際的圖片URL
    "得正": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463384887_2990076834507912_1285351997670815225_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=9IVuwm7iaRcQ7kNvgEei5IT&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AMjYBOD42b_v6J7EIIPMp-N&oh=00_AYCa39xmevaWkGmUM648leQ9geXlhjTzftNkUOZMK4kC0w&oe=6713A6B5",  // 請替換為實際的圖片URL
    "鶴茶樓": "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/463412128_2990077764507819_9106366582690583375_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=1asqP-dsxjsQ7kNvgH1RdfJ&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=AkfWUubNMyhZ30FA5B2rEzW&oh=00_AYCXYUHuFQPscN0GSCF4Pp2Me2IBrAnRNb4H-HHC3e0_6w&oe=67138162",  // 請替換為實際的圖片URL
    "龜記": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463230124_2990077464507849_5328361325400463031_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=Ehre4rx9xYoQ7kNvgGGxcyU&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=A53iXtvf6BBWTBj_q_1T05h&oh=00_AYAnLFHipMqCfGyNbq2OBo9Uvw5RC9U25ex2aLK07OwwSg&oe=67139E4F",  // 請替換為實際的圖片URL
    "麻古": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/463062770_2990095311172731_1369583144115725396_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=iyoQVaP288MQ7kNvgFnReKe&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=A5GNwbd3zSR0WzC_2R4Yb_m&oh=00_AYAg0wi1jU33NGG6CvzCmDUGB0m3yq7OTe4tDvJIozcm-g&oe=6713900A",  // 請替換為實際的圖片URL
    "Tea's原味": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463261294_2990075894508006_4613930266947648159_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=zU-0_gGuqzsQ7kNvgF0BwD-&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AHP28z6h_FlwJRvgWYqjcfN&oh=00_AYCPZi9Fvj8u_aJ_72uZpkNdCrctM5eXVRQzs2HlQfHxag&oe=67138403",  // 請替換為實際的圖片URL
    "LOHASS": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/463274661_2990094151172847_5868705582006297098_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FuK252IZAAgQ7kNvgHGib-O&_nc_zt=23&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=Abn1Qoeu_zqX5Ro0B1HGADS&oh=00_AYAKjFz_TyjtjW_cP4U2g9qT-gJywUfZOIfSI61VSzMtLA&oe=67139BE5",  // 請替換為實際的圖片URL
    "一沐日": "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/463283937_2990094384506157_4843617053620415740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ZqP1PLK0yDQQ7kNvgF0KieG&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=ARiHeCpTakb9TwlzSDNFLu7&oh=00_AYDxUzmc7wPnQwQZH8xQgL4gb0WPwGHgXLztaHTfCtQsuQ&oe=6713B223",  // 請替換為實際的圖片URL
    "上宇林": "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/463263000_2990094847839444_1598459204472912094_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=FZITN1LMqEsQ7kNvgGoqYSK&_nc_zt=23&_nc_ht=scontent.ftpe7-2.fna&_nc_gid=A8HCfoMHNMs8fabRCvESfxL&oh=00_AYAT8ak3Qxi-Waf6oNVXBmO13W6wibNQs1M4k-aXKM5Lwg&oe=6713AB9E",  // 請替換為實際的圖片URL
    "烏弄": "https://scontent.ftpe7-3.fna.fbcdn.net/v/t39.30808-6/463147486_2990095127839416_163468495503265442_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=ZfbYs9sA5DsQ7kNvgGJ5OHO&_nc_zt=23&_nc_ht=scontent.ftpe7-3.fna&_nc_gid=AKp-x9GB-LkwO0WEVLM_bN3&oh=00_AYBEF8tIvkk-w5Ynfj5UoYcerpy0hGyVBBiAV7aoaS5NdQ&oe=6713BACB",  // 請替換為實際的圖片URL
    "初韻": "https://truewin2018.com.tw/wp-content/uploads/2024/07/240726_%E5%88%9D%E9%9F%BB-A3%E8%8F%9C%E5%96%AE-%E4%B8%AD%E8%8B%B1%E3%80%81%E7%86%B1%E9%87%8F_%E9%81%A9%E7%94%A8%E7%8F%BE%E5%A0%B4.jpg",  // 請替換為實際的圖片URL
    "花火禾茶": "https://picdn.gomaji.com/uploads/stores/226/205226/333394/0811%E8%8A%B1%E7%81%AB%E7%A6%BE%E8%8C%B6a5%E8%8F%9C%E5%96%AE_210x148mm_8192%E5%83%8F%E7%B4%A0-(1).jpg",  // 請替換為實際的圖片URL
    "馬祖奶茶": "https://sansalife.com/wp-content/uploads/pixnet/1654404921-3347409087-g_l.jpg",  // 請替換為實際的圖片URL
    "茗茗究市": "https://scontent.ftpe7-4.fna.fbcdn.net/v/t1.6435-9/182699260_276546434178188_1464785731501327489_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=532cfa&_nc_ohc=6hC7KMRNS8MQ7kNvgE_l1gP&_nc_ht=scontent.ftpe7-4.fna&_nc_gid=A9eolNgFy84DmhUnWr-0UIm&oh=00_AYCkJeeNkUY7lG77jjcKR8C4vCaN6GB_4snhRv6xMD6pSw&oe=6734733C",  // 請替換為實際的圖片URL
    "黛黛茶": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/305570562_534770135207756_3963970546519101449_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=532cfa&_nc_ohc=fT5Di-rgPLAQ7kNvgEqtPBR&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AByoV0MLVq9CpR8HmWdgmbW&oh=00_AYAJxI1-eVkbS_e9zwgsEc2aYIdIwjyKhS2O86cH1Ze1VA&oe=6712D4C0",  // 請替換為實際的圖片URL
    "吾奶王": "https://scontent.ftpe7-1.fna.fbcdn.net/v/t39.30808-6/460959934_492252907118616_2077491672881086434_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_ohc=h3t8hdSrBRwQ7kNvgE4t8Hi&_nc_ht=scontent.ftpe7-1.fna&_nc_gid=AFox_QXfuAYt76btcyuH2QE&oh=00_AYB6KjkAyRkTlIqf3tnrmUWmByZ9FLPgS_0MLvsvXSy9ig&oe=6712E74B",  // 請替換為實際的圖片URL
    "先喝道": "https://shoplineimg.com/6625caf3b4df420073885d89/66fbae217baa47000e236603/2600x.webp?source_format=jpg"  // 請替換為實際的圖片URL
};

function selectRandomShop() {
    const randomIndex = Math.floor(Math.random() * drinkShops.length);
    const selectedShop = drinkShops[randomIndex];

    // 將隨機選擇的結果儲存到 Firebase
    lockRef.set({
        isLocked: false, // 這裡設為未鎖定狀態
        shop: selectedShop
    });

    // 本地更新畫面
    document.getElementById('result').textContent = `今天就去 ${selectedShop} 吧！`;
    document.getElementById('menuImage').src = menuImages[selectedShop];
    document.getElementById('menuImage').style.display = 'block';
    
    // 顯示鎖定按鈕
    document.getElementById('lock').style.display = "inline-block";
}

function lockSelection() {
    const selectedShop = document.getElementById('result').textContent.replace('今天就去 ', '').replace(' 吧！', '');

    // 將鎖定狀態推送到 Firebase，並保持飲料店不變
    lockRef.set({
        isLocked: true,
        shop: selectedShop
    });

    // 本地更新按鈕狀態
    lockButtonState();
}

function lockButtonState() {
    document.getElementById('randombutton').disabled = true;
    document.getElementById('lock').disabled = true;
    
    const lockButton = document.getElementById('lock');
    lockButton.style.backgroundColor = "#A45D66";
    lockButton.style.color = "#FFF3E3";
    lockButton.textContent = "已鎖定";
    lockButton.style.cursor = "not-allowed";

    const rdButton = document.getElementById('randombutton');
    rdButton.style.cursor = "not-allowed";
}

// 監聽 Firebase 中 lockState 的變化，所有使用者同步更新
lockRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data) {
        // 顯示飲料店
        document.getElementById('result').textContent = `今天就去 ${data.shop} 吧！`;
        document.getElementById('menuImage').src = menuImages[data.shop];
        document.getElementById('menuImage').style.display = 'block';

        // 如果已經鎖定，則更新鎖定按鈕狀態
        if (data.isLocked) {
            lockButtonState();
        }
    }
});



// Order class
class Order {
    constructor(name, item, addition, size, sugar, ice, price) {
        this.name = name;
        this.item = item;
        this.addition = addition;
        this.size = size;
        this.sugar = sugar;
        this.ice = ice;
        this.price = price;
    }
}

// DOM Elements
const orderForm = document.getElementById('orderForm');
const orderTableBody = document.getElementById('orderTableBody');
const totalPriceElement = document.getElementById('totalPrice');

// Submit order
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const order = new Order(
        document.getElementById('name').value,
        document.getElementById('item').value,
        document.getElementById('addition').value,
        document.getElementById('size').value,
        document.getElementById('sugar').value,
        document.getElementById('ice').value,
        document.getElementById('price').value
    );
    
    // Push order to Firebase
    ordersRef.push(order);

    // Reset form
    orderForm.reset();
    document.getElementById('size').value = 'L';
    document.getElementById('sugar').value = '微糖';
    document.getElementById('ice').value = '微冰';
});

// Listen for changes in Firebase
ordersRef.on('value', (snapshot) => {
    const data = snapshot.val();
    orderTableBody.innerHTML = '';
    let totalPrice = 0;

    if (data) {
        Object.values(data).forEach((order, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${order.name}</td>
                <td>${order.item}</td>
                <td>${order.addition}</td>
                <td>${order.size}</td>
                <td>${order.sugar}</td>
                <td>${order.ice}</td>
                <td>${order.price}</td>
            `;
            orderTableBody.appendChild(row);
            totalPrice += parseFloat(order.price || 0);
        });
    }

    totalPriceElement.textContent = totalPrice;
});

