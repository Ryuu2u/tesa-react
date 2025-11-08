import React from 'react'
import TesaCard from './TesaCard'
import './app.css'
const App = () => {
  const tesaList = [
    {
      image: "R.jfif",
      name: "อเมริกาโน่ฟองนม",
      description: "กาแฟเอสเปรสโซ่ผสมน้ำร้อน ท็อปด้วยฟองนมนุ่ม เพิ่มความละมุนในรสกาแฟ",
      price: "35บาท"
    },
    {
      image: "OIP.webp",
      name: "โอวัลตินโกโก้เข้มข้น",
      description: "Deep and decadent chocolatey drink, perfect for chocolatelovers.",
      price: "35บาท",
    },
    {
      image: "ชาไทย.webp",
      name: "ชาไทย",
      description: "Refreshing blend of seasonal fruits, perfect for a healthyboost.",
      price: "35บาท"
    },
    {
      image: "ชาดำ.webp",
      name: "ชาดำ",
      description: "Warm and comforting hot chocolate, made with real Belgianchocolate.",
      price: "35บาท"
    },
    {
      image: "ชาเขียว.webp",
      name: "ชาเขียว",
      description: "Tropical blend of orange and coconut milk, perfect for a summerday.",
      price: "35บาท"
    },
    {
      image: "กาแฟ.webp",
      name: "กาแฟ",
      description: "100% pure orange juice, a healthy and refreshing start to yourday.",
      price: "35บาท"
    },
    {
      image: "1677570842449.jpg",
      name: "ขนมปังปิ้ง",
      description: "Tangy and sweet pink lemonade, a perfect thirst quencher.",
      price: "25บาท"
    },
    {
      image: "1619605589829.jpg",
      name: "โอริโอ้ปั่น",
      description: "Espresso diluted with hot water, a strong and flavorful coffee.",
      price: "35บาท"
    },
    {
      image: "1.jpg",
      name: "โดนัท",
      description: "Espresso diluted with hot water, a strong and flavorful coffee.",
      price: "10บาท"
    },
    {
      image: "เอสเปรสโซ่เย็น.avif",
      name: "เอสเพรสโซ่",
      description: "Espresso diluted with hot water, a strong and flavorful coffee.",
      price: "35บาท"
    },
  ];
  return (
    <>
   <header className="app-header">
        <h1 className='text-center'>Tesa Cafe</h1>
        <hr />
      </header>

      <main className="cards-wrap">
        <div className="cards-grid">
          {
            tesaList.map((T) => (
              <TesaCard key={T.name} {...T} />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default App 