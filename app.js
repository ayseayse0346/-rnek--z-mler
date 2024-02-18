const originalObject = { name: 'John', age: 30 };
const clonedObject = Object.assign({}, originalObject);
console.log(clonedObject); // { name: 'John', age: 30 }

//JSON örneği, bir kişinin adını, yaşını, şehri, öğrenci olup olmadığını, hobilerini ve adresini temsil eder. JSON, anahtar-değer çiftleri içeren bir nesne olarak başlar ({}). Anahtarlar çift tırnak içinde yazılır ve değerler çeşitli veri türlerine sahip olabilir (dize, sayı, boolean, dizi, nesne). Diziler köşeli parantez içinde ([]) ve nesneler ise iç içe geçmiş süslü parantezler içinde ({}) temsil edilir.

// !ÖRNEK : Belirli bir kategorideki ürünlerin ortalama fiyatını hesaplayan bir fonksiyon tanımlayın
function averagePriceByCategory(products, category) {
    // Ürünleri kategoriye göre filtreleyin
    let filteredProducts = products.filter(
      (product) => product.category === category
    );
    // Ürünleri fiyatlarına göre eşleyin
    let prices = filteredProducts.map((product) => product.price);
    // Fiyatları toplamlarına indirgeyin
    let sum = prices.reduce((a, b) => a + b, 0);
    // Ortalamayı hesaplayın, toplamı ürün sayısına bölerek
    let average = sum / filteredProducts.length;
    // Ortalamayı döndürün
    return average;
  }
  // !ÖRNEK: Ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir nesne dizisi döndüren bir fonksiyon tanımlayın
  function categoriesAbove50(products) {
    // Sonuçları depolamak için boş bir dizi oluşturun
    let result = [];
    // Ürünler dizisinden benzersiz kategorileri alın
    let categories = [...new Set(products.map((product) => product.category))];
    // Kategorilerin üzerinden döngü yapın
    console.log(categories);
    for (let category of categories) {
      // Her kategori için ortalama fiyatı hesaplayın
      let average = averagePriceByCategory(products, category);
      // Ortalama 50'den büyükse, kategori ve ortalama içeren bir nesneyi sonuç dizisine ekleyin
      if (average > 50) {
        result.push({ category: category, average: average });
      }
    }
    // Sonuç dizisini döndürün
    return result;
  }
  // Verilen ürünler dizisiyle fonksiyonu test edin
  console.log(categoriesAbove50(products));
  // Beklenen çıktı: [ { category: 'Clothes', average: 55 }, { category: 'Electronics', average: 55 } ]

  //!ÖRNEK: Ürünler dizisi
const products = ['elma', 'armut', 'muz', 'elma', 'üzüm', 'üzüm'];
// Diziye yinelenen olmayan ürünleri atama
const uniqueProducts = [...new Set(products)];
// Sonucu konsola yazdırma
console.log(uniqueProducts);



// ?ÖRNEK :
// let products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 80, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//     { name: "Product 8", price: 40, category: "Electro" },
//     { name: "Product 8", price: 70, category: "Elecxtro" },
//     { name: "Product 8", price: 80, category: "Elecxtro" },
//   ];
//   const hesaplama = (array) => {
  
//   //! aynı  categoryleri çeşitlerini tek yazma.
//     const categories = [];
  
//       array.forEach((product) => {
//       if (!categories.includes(product.category)) {
//         categories.push(product.category);
//       }
//     });
  
  
//     let sonucc = [];
//     for (i = 0; i < categories.length; i++) {
//       const above50 = array
//         .filter((p) => p.category === categories[i])
//         .map((k) => k.price);
  
//       const avarage = above50.reduce((a, b) => a + b) / above50.length;
//       if (avarage >= 50) {
//         sonucc.push(`category:${categories[i]}-avarage:${avarage}`);
//       }
//     }
//     return console.log(sonucc);
//   };
//   hesaplama(products);

//   ? ÖRNEK:
const hesaplama = (array) => {
    //* Array'in içindeki kategori çeşitlerini seçiyoruz.
    const categories = [];
  
    array.forEach((product) => {
      //* objectlerin kategorilerine forEach ile tek tek bakıp, yukarıda oluşturduğumuz "categories" dizisine aktarıyoruz.
      if (!categories.includes(product.category)) {
        //* Burada product 1'e bakıp electronicsi ekleyecek, product 2ye bakıp clothes ekleyecek, sonrasında aynı kategori tekrar gelirse eklemeyecek.
        categories.push(product.category);
      }
    });
  
    let sonuc = [];
    for (i = 0; i < categories.length; i++) {
      //* kategorilere göre fiyatları çekiyoruz.
      const prices = array
        .filter((p) => p.category === categories[i])
        .map((k) => k.price);
      //* kategorilerin fiyat ortalamalarını buluyoruz.
      const average = prices.reduce((a, b) => a + b) / prices.length;
      if (average >= 50) {
        //* ortalaması 50'den yüksek olanları yukarıda oluşturduğumuz sonuc dizisine ekliyoruz.
        sonuc.push({ category: categories[i], average: average });
      }
    }
    return console.log(sonuc);
  };
  hesaplama(products);