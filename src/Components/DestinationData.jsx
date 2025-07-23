const destinations = [
  
    {
    id: 1,
    name: "Goa",
    image: "https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg",
    description: "Goa is India’s most popular beach destination, known for its beautiful coastline, vibrant nightlife, water sports, and Portuguese heritage. From ancient churches and forts to beach parties and seafood cuisine, Goa offers a perfect blend of culture and relaxation. It's a must-visit for anyone seeking fun and history together.",
    rating: 5
  },
  {
    id: 2,
    name: "Manali",
    image: "https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg",
    description: "Manali, nestled in Himachal Pradesh, is a beautiful hill station offering snow-capped peaks, lush green valleys, and adventure sports. Whether it's skiing in Solang Valley or relaxing by the Beas River, Manali offers a mix of nature and thrill, perfect for honeymooners and thrill-seekers alike.",
    rating: 4
  },
  {
    id: 3,
    name: "Ladakh",
    image: "https://images.pexels.com/photos/12238321/pexels-photo-12238321.jpeg",
    description: "Ladakh is a high-altitude desert known for its stark landscapes, Buddhist monasteries, and adventurous routes. With destinations like Pangong Lake and Nubra Valley, it attracts bikers and nature lovers alike. Its pristine beauty and spiritual aura make Ladakh an extraordinary destination in India.",
    rating: 5
  },
  {
    id: 4,
    name: "Jaipur",
    image: "https://images.pexels.com/photos/19149591/pexels-photo-19149591.jpeg",
    description: "Jaipur, Rajasthan’s capital, is known as the Pink City due to its trademark building color. The city is home to historical forts, palaces, and vibrant markets. Amer Fort, Hawa Mahal, and the City Palace showcase royal heritage, while local bazaars burst with handicrafts and traditional attire.",
    rating: 5
  },
  {
    id: 5,
    name: "Udaipur",
    image: "https://images.pexels.com/photos/1586030/pexels-photo-1586030.jpeg",
    description: "Udaipur, also called the City of Lakes, is famed for its romantic charm, majestic palaces, and scenic lakes like Lake Pichola. The City Palace and Jag Mandir reflect royal legacy, while its narrow alleys, rooftop cafes, and boat rides make it a picturesque and cultural getaway.",
    rating: 4
  },
  {
    id: 6,
    name: "Rishikesh",
    image: "https://images.pexels.com/photos/32513198/pexels-photo-32513198.jpeg",
    description: "Rishikesh is a spiritual town on the banks of the Ganges River, popular for yoga, meditation, and adventure sports. Known as the Yoga Capital of the World, it also offers white-water rafting, bungee jumping, and serene ashrams. The Ganga Aarti is a must-experience spiritual ritual.",
    rating: 5
  },
  {
    id: 7,
    name: "Varanasi",
    image: "https://images.pexels.com/photos/8112552/pexels-photo-8112552.jpeg",
    description: "Varanasi is one of the oldest inhabited cities in the world, located on the banks of the Ganges River. It’s a major spiritual hub, with ghats used for rituals and cremations. The city's mystique, temples, and spiritual energy offer a deeply immersive cultural experience.",
    rating: 5
  },
  {
    id: 8,
    name: "Kerala",
    image: "https://images.pexels.com/photos/1643797/pexels-photo-1643797.jpeg",
    description: "Kerala, known as God’s Own Country, is famed for its backwaters, lush landscapes, and Ayurvedic treatments. Houseboat cruises in Alleppey and visits to hill stations like Munnar offer diverse experiences. Kerala's cultural heritage includes Kathakali dance, temple festivals, and a rich culinary tradition.",
    rating: 5
  },
  {
    id: 9,
    name: "Kodaikanal",
    image: "https://images.pexels.com/photos/2310646/pexels-photo-2310646.jpeg",
    description: "Kodaikanal is a serene hill station in Tamil Nadu known for its misty mountains, waterfalls, and the beautiful Kodaikanal Lake. Often called the Princess of Hill Stations, it’s perfect for nature lovers and honeymooners. Attractions include Coaker’s Walk, Pillar Rocks, and vibrant flower gardens.",
    rating: 4
  },
  {
    id: 10,
    name: "Ooty",
    image: "https://images.pexels.com/photos/1028636/pexels-photo-1028636.jpeg",
    description: "Ooty, or Udhagamandalam, is a popular hill station in Tamil Nadu surrounded by the Nilgiri Hills. Famous for tea plantations, botanical gardens, and toy train rides, Ooty offers a refreshing climate and scenic beauty year-round. It’s a favorite spot for families and couples alike.",
    rating: 4
  },

    {
    id: 11,
    name: "Darjeeling",
    image: "https://images.pexels.com/photos/1282460/pexels-photo-1282460.jpeg",
    description: "Darjeeling, nestled in the Himalayan foothills of West Bengal, is known for its tea gardens, scenic views, and colonial charm. The town offers breathtaking vistas of Kanchenjunga, charming toy train rides, and a cool climate. With monasteries, markets, and British-era architecture, Darjeeling is a peaceful retreat for nature and culture lovers.",
    rating: 4,
  },
  {
    id: 12,
    name: "Shillong",
    image: "https://media.istockphoto.com/id/2152437259/photo/elephant-falls-a-waterfall-in-shilong-meghalaya.jpg?b=1&s=612x612&w=0&k=20&c=bfNjCSXobMF6ClzClSdT5XqoQVBYi2eF32Odq0OG3Nw=",
    description: "Shillong, the capital of Meghalaya, is often called the 'Scotland of the East' due to its lush green hills and colonial architecture. Known for waterfalls, music culture, and pleasant weather, Shillong offers attractions like Umiam Lake, Elephant Falls, and vibrant local markets. It's a serene yet culturally rich destination in Northeast India.",
    rating: 4,
  },
  {
    id: 13,
    name: "Coorg",
    image: "https://media.istockphoto.com/id/480589576/photo/rajas-seat-view-of-coorg.jpg?b=1&s=612x612&w=0&k=20&c=_Ccc-uNeINpe4Bu2gHJaBqu_9puMyGIzKg1Zyu4EGSU=",
    description: "Coorg, also known as Kodagu, is a lush hill station in Karnataka renowned for its coffee plantations, misty hills, and rich culture. It offers trekking, wildlife spotting, and river rafting. Attractions like Abbey Falls, Dubare Elephant Camp, and Madikeri Fort make Coorg an ideal getaway for nature and adventure enthusiasts.",
    rating: 5,
  },
  {
    id: 13,
    name: "Puducherry",
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg",
    description: "Puducherry (Pondicherry) is a coastal town in South India with French colonial architecture, tranquil beaches, and spiritual centers like Auroville. The blend of Indian and French cultures is visible in its cuisine, lifestyle, and buildings. It's perfect for peaceful beach walks, café hopping, and exploring Indo-European heritage.",
    rating: 4,
  },
  {
    id: 15,
    name: "Kodaikanal",
    image: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg",
    description: "Kodaikanal, a charming hill station in Tamil Nadu, is known for its serene lakes, pine forests, and cool climate. Popular spots include Kodai Lake, Coaker's Walk, and Pillar Rocks. With mist-covered hills and lush landscapes, it's a popular honeymoon destination and a haven for nature lovers seeking relaxation.",
    rating: 4,
  },
  {
    id: 16,
    name: "Gokarna",
    image: "https://images.pexels.com/photos/4473796/pexels-photo-4473796.jpeg",
    description: "Gokarna, a coastal town in Karnataka, is a blend of spiritual tradition and beach tourism. Known for its clean, serene beaches and sacred temples, it attracts both pilgrims and backpackers. The beaches like Om, Kudle, and Paradise are ideal for relaxation, yoga, and exploring the peaceful side of coastal India.",
    rating: 5,
  },
  {
    id: 17,
    name: "Kasol",
    image: "https://images.pexels.com/photos/1754906/pexels-photo-1754906.jpeg",
    description: "Kasol, a quaint village in Himachal Pradesh’s Parvati Valley, is a paradise for trekkers and backpackers. Surrounded by pine forests and the Parvati River, it offers a blend of natural beauty and Israeli-inspired cafes. Treks to Kheerganga and Malana start from here, making it a hotspot for young travelers.",
    rating: 5,
  },
  {
    id: 18,
    name: "Rishikesh",
    image: "https://images.pexels.com/photos/6508371/pexels-photo-6508371.jpeg",
    description: "Rishikesh, located on the banks of the Ganges in Uttarakhand, is a spiritual hub and adventure capital of India. Known for yoga, temples, and river rafting, it attracts seekers and thrill-seekers alike. The iconic Laxman Jhula, Ganga Aarti, and nearby forests make it a unique mix of peace and adrenaline.",
    rating: 5,
  },
  {
    id: 19,
    name: "Haridwar",
    image: "https://images.pexels.com/photos/7364656/pexels-photo-7364656.jpeg",
    description: "Haridwar, one of the seven sacred cities of India, is located in Uttarakhand and holds deep religious significance. Devotees gather here to take a dip in the holy Ganges, especially at Har Ki Pauri. Known for its evening Ganga Aarti, temples, and spiritual atmosphere, it’s a key pilgrimage destination.",
    rating: 4,
  },
  {
    id: 20,
    name: "Varanasi",
    image: "https://images.pexels.com/photos/1611631/pexels-photo-1611631.jpeg",
    description: "Varanasi, also known as Kashi or Banaras, is one of the world’s oldest continuously inhabited cities. Located on the banks of the Ganga, it is a spiritual center for Hindus. Known for its ghats, temples, rituals, and classical music, Varanasi offers a powerful experience of India's ancient culture and traditions.",
    rating: 5,
  },
  {
    id: 21,
    name: "Sikkim",
    image: "https://images.pexels.com/photos/11705853/pexels-photo-11705853.jpeg",
    description: "Sikkim, a northeastern state, is a haven of natural beauty with its snow-capped peaks, lush valleys, and peaceful monasteries. Home to the majestic Kangchenjunga, the state offers trekking, spiritual exploration, and eco-tourism. Gangtok, the capital, is a perfect base to explore Sikkim’s mix of adventure, culture, and tranquility.",
    rating: 4,
  },
  {
    id: 22,
    name: "Cherrapunji",
    image: "https://images.pexels.com/photos/12082096/pexels-photo-12082096.jpeg",
    description: "Cherrapunji, in Meghalaya, is one of the wettest places on Earth. It’s famous for its living root bridges, waterfalls, and misty hills. The lush green landscapes and limestone caves offer a surreal experience. Nature enthusiasts and explorers are drawn to its unique terrain and rich tribal culture.",
    rating: 4,
  },
  {
    id: 23,
    name: "Jaisalmer",
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    description: "Jaisalmer, the Golden City of Rajasthan, is famed for its yellow sandstone architecture and the majestic Jaisalmer Fort. Set in the heart of the Thar Desert, it offers camel rides, desert camping, and a peek into Rajput culture. Its havelis, temples, and sand dunes create a magical desert vibe.",
    rating: 5,
  },
  {
    id: 24,
    name: "Ranthambore",
    image: "https://images.pexels.com/photos/1547817/pexels-photo-1547817.jpeg",
    description: "Ranthambore in Rajasthan is one of India’s most famous tiger reserves. Home to majestic Bengal tigers, it's a wildlife lover’s paradise. The Ranthambore Fort, ancient ruins, and open jeep safaris make it thrilling. It's a rare combination of history, adventure, and nature in one destination.",
    rating: 5,
  },
  {
    id: 25,
    name: "Khajuraho",
    image: "https://images.pexels.com/photos/1829981/pexels-photo-1829981.jpeg",
    description: "Khajuraho, a UNESCO World Heritage site in Madhya Pradesh, is renowned for its stunning temples with intricate erotic sculptures. Built between 950–1050 AD, these temples showcase brilliant Nagara-style architecture and reflect India's artistic heritage. Khajuraho is a captivating mix of spirituality, history, and architecture.",
    rating: 4,
  },
  {
    id: 26,
    name: "Aurangabad",
    image: "https://images.pexels.com/photos/756315/pexels-photo-756315.jpeg",
    description: "Aurangabad in Maharashtra is known for the Ajanta and Ellora Caves, UNESCO World Heritage sites featuring ancient rock-cut temples and Buddhist art. The city also houses Bibi Ka Maqbara, reminiscent of the Taj Mahal. It’s a historical hub with deep cultural and architectural roots in India’s medieval era.",
    rating: 4,
  },
  {
    id: 27,
    name: "Mount Abu",
    image: "https://images.pexels.com/photos/775200/pexels-photo-775200.jpeg",
    description: "Mount Abu is Rajasthan’s only hill station, nestled in the Aravalli Range. Known for the stunning Dilwara Temples, Nakki Lake, and scenic viewpoints like Honeymoon Point, it offers a cool escape from the desert heat. Mount Abu combines spiritual significance with natural beauty and colonial-era charm.",
    rating: 4,
  },
  {
    id: 28,
    name: "Ziro Valley",
    image: "https://images.pexels.com/photos/2265875/pexels-photo-2265875.jpeg",
    description: "Ziro Valley, located in Arunachal Pradesh, is a tranquil destination known for its lush paddy fields, Apatani tribal culture, and scenic landscapes. Surrounded by pine-covered hills, it’s ideal for nature lovers, trekkers, and those seeking offbeat experiences. The Ziro Music Festival adds a vibrant cultural touch every year.",
    rating: 5,
  },
  {
    id: 29,
    name: "Hampi",
    image: "https://images.pexels.com/photos/1642070/pexels-photo-1642070.jpeg",
    description: "Hampi, a UNESCO World Heritage Site in Karnataka, is known for its captivating ruins, ancient temples, and boulder-strewn landscapes. Once the capital of the Vijayanagara Empire, it’s a magnet for history buffs and photographers. Its surreal terrain and sacred vibe make it a unique and unforgettable destination.",
    rating: 5,
  },
  {
    id: 30,
    name: "Mahabalipuram",
    image: "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg",
    description: "Mahabalipuram, also called Mamallapuram, is a historic town on Tamil Nadu’s coast known for its rock-cut temples and stone carvings. The Shore Temple, Five Rathas, and Arjuna’s Penance are major attractions. With beachside charm and ancient art, Mahabalipuram beautifully blends heritage, architecture, and natural beauty.",
    rating: 4,
  },


];

export default destinations;
