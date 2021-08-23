var vm = new Vue({
    el: '#app',
    data: {
      items: [
        {name: 'プラチナム シャンプー', size: "200ml", img:'assets/images/product_image/001_platinum_shampoo_200.png', price: 2300, taxPrice: 2530, purchaseLink: 'https://ifing-beauty.com/products/detail/69', stock: true, sub: false },
        {name: 'プラチナム シャンプー', size: "500ml", img:'assets/images/product_image/002_platinum_shampoo_500.png', price: 4500, taxPrice: 4950, purchaseLink: 'https://ifing-beauty.com/products/detail/70', stock: true, sub: false },
        {name: 'プラチナム シャンプー', size: "900ml", img:'assets/images/product_image/003_platinum_shampoo_900.png', price: 6600, taxPrice: 7220, purchaseLink: 'https://ifing-beauty.com/products/detail/71', stock: true, sub: false},
        {name: 'プラチナム トリートメント', size: "200ml", img:'assets/images/product_image/004_platinum_treatment_200.png', price: 2500, taxPrice: 2750, purchaseLink: 'https://ifing-beauty.com/products/detail/72', stock: true, sub: false},
        {name: 'プラチナム トリートメント', size: "500ml", img:'assets/images/product_image/005_platinum_treatment_500.png', price: 4800, taxPrice: 5280, purchaseLink: 'https://ifing-beauty.com/products/detail/73', stock: true, sub: false},
        {name: 'プラチナム トリートメント', size: "900ml", img:'assets/images/product_image/006_platinum_treatment_900.png', price: 7000, taxPrice: 7700, purchaseLink: 'https://ifing-beauty.com/products/detail/74', stock: true, sub: false},
        {name: 'オイルトリートメント', size: "900ml", img:'assets/images/product_image/007_platinum_outkarami.png', price: 3200, taxPrice: 3520, purchaseLink: 'https://ifing-beauty.com/products/detail/74', stock: true, sub: false},
        {name: '500サイズセット', size: "《初回特典有》", img:'assets/images/product_image/subscription500.png', price: 10735, taxPrice: 11809, purchaseLink: 'https://ifing-beauty.com/products/detail/77', stock: true, sub: true},
        {name: '900サイズセット', size: "《初回特典有》", img:'assets/images/product_image/subscription900.png', price: 14535, taxPrice: 15989, purchaseLink: 'https://ifing-beauty.com/products/detail/78', stock: true, sub: true },
      ]
    }
  });
  
  
  var vm = new Vue({
    el: '#course',
    data: {
      courses: [
        {name: 'シャンプー＆トリートメント500サイズ', span: '2ヶ月分', subImg:'assets/images/product_image/subscription500.png', text1: 'シャンプー 500ml', text2: 'トリートメント 500ml', text3: 'オイルトリートメント 100ml', text4: 'トラベルセット(40ml, 40g, 25ml)', originalPrice: 14600, newPrice: 8835, subscriptionLink: 'https://ifing-beauty.com/products/detail/60', regularPurchaseLink: 'https://ifing-beauty.com/products/detail/65', stock: true },
        {name: 'シャンプー＆トリートメント900サイズ', span: '2ヶ月分', subImg:'assets/images/product_image/subscription900.png', text1: 'シャンプー 900ml', text2: 'トリートメント 900ml', text3: 'オイルトリートメント 100ml', text4: 'トラベルセット(40ml, 40g, 25ml)', originalPrice: 18900, newPrice: 12920, subscriptionLink: 'https://ifing-beauty.com/products/detail/61', regularPurchaseLink: 'https://ifing-beauty.com/products/detail/67', stock: true },
      ]
    }
  });
  
  var char = new Vue({
    el: "#characteristics",
    data: {
      substances: [
        {name: 'ナールスゲン', subtext: 'シャンプーに配合', about: 'コラーゲン、エラスチンの働きをよくするためのヒートショックプロテインや、ヒアルロン酸の産生も高める作用があります。これらの効果によって、皮膚のバリア機能を正常化し、保湿などの効果につながってきます。', img1: "img/graph002.png", text2: 'ナールスゲン 肌環境改善効果', img2: "img/tokio-pr-bg.png"},
        {name: 'アルガンオイル', subtext: 'トリートメントに配合', about: '肌のバリア機能をサポートし、保水機能を上げます。また、ターンオーバーを促進し、肌の新陳代謝を良くします。その他には、血行を促進して肌荒れやすくを防ぎます。この効果が老化防止に繋がります。', img1: "img/graph001.png", text2: 'アルガンオイル ビタミンE含有量比較', img2: "img/tokio-pr-bg.png"},
      ]
    }
  })
  
  
  var imglist = new Vue ({
    el: "#gridlist",
    data: {
      spaImages: [
        {number: 1, imagelink: 'img/gallery1.jpg'},
        {number: 2, imagelink: 'img/gallery2.jpg'},
        {number: 3, imagelink: 'img/gallery3.jpg'},
        {number: 4, imagelink: 'img/gallery4.jpg'},
        {number: 5, imagelink: 'img/gallery5.jpg'},
        {number: 6, imagelink: 'img/gallery6.jpg'},
        {number: 7, imagelink: 'img/gallery7.jpg'},
        {number: 8, imagelink: 'img/gallery8.jpg'},
        {number: 9, imagelink: 'img/gallery9.jpg'},
      ]
    }
  })
  
  
  var imglist = new Vue ({
    el: "#productChar",
    data: {
      types: [
        {name: 'TOKIO IE ヘッドスパ シャンプー', img: 'img/001-head-spa-shampoo.png', text: '天然由来成分高配合のノンシリコン・低刺激ベタイン系シャンプー。抗炎症作用によって、頭皮の環境改善を行い、優れた保湿効果で頭皮と髪に潤いを与えます。また、メントールを含んだ豊富な泡でスッキリと洗い上げます。'},
        {name: 'TOKIO IE ヘッドスパ トリートメント', img: 'img/002-head-spa-treatment.png', text: 'ノンシリコン・スカルプ＆ヘアトリートメントです。頭皮に直接塗布し、マッサージする事で頭皮をほぐすことができます。豊富な保湿成分が頭皮と髪を柔軟化し、乾燥を防ぎます。また、3種類のケラチン(補修剤)によって、髪にコシと補修効果を与えてサラサラな髪へと導きます。'},
      ]
    }
  })
  
  var whatis = new Vue ({
    el: "#whatIs",
    data: {
      title: "TOKIO IE INKARAMI とは？",
      text: 'TOKIO インカラミのホームケアシリーズTOKIO IE。シャンプーとトリートメントでインカラミする世界初の家庭用システムトリートメント。シャンプーにTOKIO 1、トリートメントにTOKIO 2.3.4が配合されており、いつも通りにシャンプーとトリートメントをするだけで、お風呂で簡単にTOKIO インカラミを体験できます。さらに独自処方アウトカラミを用いた洗い流さないトリートメントで上品な艶と指通りを与えます。イエでインカラミができる、ホームケアの新習慣をご提案します。',
    }
  })
  
  