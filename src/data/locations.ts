export interface Location {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  image?: string;
  tags?: string[];
}

export const locations: Location[] = [
  {
    id: 1, // 1
    name: "Ranganathaswamy Temple, Srirangam",
    description: "Ranganathaswamy Perumal and Ranganayaki Thayar. The Srirangam temple is often listed as the largest functioning Hindu temple in the world. The temple occupies an area of 156 acres (631,000 m2) with a perimeter of 4,116m (10,710 feet) making it the largest temple in India and one of the largest religious complexes in the world. The annual 21 day festival of Vaikuntha Ekadashi, conducted during the Tamil month of Margaḻi (December–January) attracts 1 million visitors.",
    lat: 10.8625,
    lng: 78.689722,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Srirangam14.jpg/250px-Srirangam14.jpg"
  },
  {
    id: 2, // 2
    name: "Thirukoḻi",
    description: "Kamalavalli Nachiyar andAḻagiya Manavala Perumal. The temple is locally called Nachiyar Koil (to be distinguished from Thirunaraiyur) and is one of the few Divya Desams where the goddess is offered prominence over Vishnu. The temple is the birthplace of Thiruppaan Alvar, one of the twelve Alvars. In Srirangam, the yearly birth festival of Thiruppaan Alvar is celebrated with the Vishvarupa Darshanam of Ranganatha at the sanctum on the occasion of his birthday. The utsavar of Tiruppan Alvar is taken from the temple to Srirangam.",
    lat: 10.82,
    lng: 78.67,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Nachiyar4.jpg/250px-Nachiyar4.jpg"
  },
  {
    id: 3, // 3
    name: "Thirukkarambanoor",
    description: "Purushottama Nayaki and Purushottama Perumal. This rare temple is dedicated to the Hindu Trimurti (trinity) namely Vishnu, Shiva, and Brahma. According to Hindu legend, the temple is believed to have been constructed by Janaka, the king of Mithila and the father of Sita from the epic Ramayana. Tirumangai Alvar is believed to have resided in the temple to build the surrounding walls of the Srirangam Ranganathaswamy temple.",
    lat: 10.49,
    lng: 78.81,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uthamarkoil1.jpg/250px-Uthamarkoil1.jpg"
  },
  {
    id: 4, // 4
    name: "Pundarikakshan Perumal Koil",
    description: "Pankaja Nayaki and Pundarikaksha Perumal. The Pundarikakshan Perumal temple is believed to have been built by the Pallava king Dantivarman (796–847 CE). A swastika-shaped temple tank built during 800 CE is present in the south-western corner of the street around the temple. It has four stepped gateways, each having 51 steps. The tank is believed to have been built by Kamban Araiyan during the reign of Dantivarman. In modern times, it is maintained by the Department of Archaeology of the Government of Tamil Nadu. The temple complex covers an area of 2.62 ha (6.5 acres), while the tank covers an area of 0.1256 ha (0.310 acres). The chariot festival is unique in the state as a community feast is offered by several individuals and committees, a custom many centuries old.",
    lat: 10.96,
    lng: 78.67,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Tiruvellarai1.jpg/250px-Tiruvellarai1.jpg"
  },
  {
    id: 5, // 5
    name: "Vadivaḻagiya Nambi Perumal Koil",
    description: "Saundaryavalli and Sundararaja Perumal. King Sundara Chola, who ruled the area, was a devotee of the temple, and during each of his innumerable victories in wars, he showered a lot of wealth on this temple. His prime minister Anirudha Brahmarayar is believed to be from Anbil, the village where the temple is located. The copper plates having the records from the Chola period from Anbil indicate generous contribution from the Medieval Cholas indicate various gifts to the temple.",
    lat: 10.867735,
    lng: 78.882171,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tiruanbil4.jpg/250px-Tiruanbil4.jpg"
  },
  {
    id: 6, // 6
    name: "Appakkudathaan Perumal Koil",
    description: "Indravalli and Appakudatthan Perumal. The temple has inscriptions from the 18th year of the reign of Aditya Chola. The temple is one of the five Pancharanga Kshetrams, a group of five Hindu temples on the banks of the Kaveri River dedicated to Ranganatha, a form of Vishnu.",
    lat: 10.839307,
    lng: 78.889073,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Koviladi1.jpg/250px-Koviladi1.jpg"
  },
  {
    id: 7, // 7
    name: "Hara Saabha Vimocchana Perumal Temple",
    description: "Kamalavalli andHara Saabha Vimochana Perumal. Since Vishnu relieved (vimochana) the curse (sābha) of Shiva (also called Hara), the temple is called Hara Sābha Vimochana Temple.",
    lat: 10.860255,
    lng: 79.108891,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Hara_Saabha_Vimochana_Perumal_.jpg/250px-Hara_Saabha_Vimochana_Perumal_.jpg"
  },
  {
    id: 8, // 8
    name: "Thirukoodalur",
    description: "Padmasani and Jagathrakshaga Perumal. Kaveri wanted to cleanse herself, and approached the Hindu god Brahma. She is believed to have worshipped Vishnu at this place, and received relief. A parrot that was devoted to Vishnu was shot down in the nearby forest. Vishnu rescued the parrot and apprised him of his previous birth. Thus, it is believed that Vishnu descends here for all forms of life. Vishnu is also believed to have appeared for sage Nandaka.",
    lat: 10.925152,
    lng: 79.203532,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Aduthurai_perumal1.jpg/250px-Aduthurai_perumal1.jpg"
  },
  {
    id: 9, // 9
    name: "Thirukavithalam",
    description: "Ramamanivalli and Gajendra Varadha Perumal. Based on Gajendra Moksha, Vishnu is believed to have appeared to Gajendra the elephant also called Indradyumna, the crocodile called Huhu, Sage Parasara and Anjaneya. The temple is one of the Panchakanna (Krishnaranya) Kshetrams, the five holy temples associated with Krishna, an avatar of Vishnu.",
    lat: 10.94689,
    lng: 79.256512,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/009_-_Thiru_Kavithalam.jpg/250px-009_-_Thiru_Kavithalam.jpg"
  },
  {
    id: 10, // 10
    name: "Thiruppullamboothangudi",
    description: "Hemambujavalli and Rama Perumal. Rama is believed to have appeared for Sita, and the temple is believed to be the place where Rama performed the last rites of the eagle king Jatayu.",
    lat: 10.971596,
    lng: 79.303415,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Pullabhoothangudi_%2811%29.jpg/250px-Pullabhoothangudi_%2811%29.jpg"
  },
  {
    id: 11, // 11
    name: "Thiruaadhanur",
    description: "Ranganayaki Thayar and Andalukkum Aiyyan Perumal. Andalakkum Aiyyan is believed to have appeared for an affluent devotee trying to save Ranganatha. It is also believed that the presiding deity appeared for Kamadhenu, the divine cow, and also for Tirumangai Alvar, the saint poet of the 8th century.",
    lat: 10.97647,
    lng: 79.313454,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Adhanur_perumal.jpg/250px-Adhanur_perumal.jpg"
  },
  {
    id: 12, // 12
    name: "Thirukudanthai",
    description: "Komalavalli and Aravamuda Perumal. The temple is called Ubaya Pradhana Kshetram as the mulavar (presiding deity) and utsavar (festive deity) enjoy the same importance. It is believed that the presiding deity asked Nathamuni to compile the four thousand verses of Naalayira Divya Prabandham at this place. The twin temple chariots weigh 300 t (660,000 lb) each and are next only in size to the ones in Thygaraja temple in Thiruvarur and Andal Temple in Srivilliputhur. This temple is along Kaveri and is one of the Pancharanga Kshetrams.",
    lat: 10.959649,
    lng: 79.374999,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Gopuras_in_Kumbakonam_-_India.JPG/250px-Gopuras_in_Kumbakonam_-_India.JPG"
  },
  {
    id: 13, // 13
    name: "Thiruvinnagar",
    description: "Bhumidevi and Uppiliappan Perumal. It is believed that Vishnu appeared as Uppiliappan to marry sage Hemarishi's daughter, who was Lakshmi's reincarnation. Since the sage stated that his girl was too young to offer him food with salt, Vishnu agreed to accept an offering without salt.",
    lat: 10.96157,
    lng: 79.43208,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Uppiliappan_koil3.JPG/250px-Uppiliappan_koil3.JPG"
  },
  {
    id: 14, // 14
    name: "Thirunaraiyur",
    description: "Vanchulavalli and Srinivasa Perumal. According to local lore, Vishnu was of the view that during Kali Yuga, men would have to listen to women. Hence, he decided that he would first set an example and listen to the goddess here. During all festive occasions, the first rights are reserved for Nachiyar, who moves ahead, while Srinivasa follows her. Even the food is first served to Nachiyar, and then to Srinivasa. The Kal Garuda image in the temple used during the festive occasions is believed to increase in weight seeking 4, 8, 16, 32, 64, and 128 people in succession when the procession comes out of various gates from the sanctum to the main entrance of the temple.",
    lat: 10.915844,
    lng: 79.445554,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nachiyar_Kovil_%2813%29.jpg/250px-Nachiyar_Kovil_%2813%29.jpg"
  },
  {
    id: 15, // 15
    name: "Thirucherai",
    description: "Saranayaki and Saranatha Perumal. Saranathan is believed to have appeared to river Kaveri, sage Markandeya, and Hindu god Indra. The crown of some of the images from the Chola period show influence of Buddhist tradition in the region. The metal image of Sita is believed to be a classic example of Chola Art during the 9th-10th centuries.",
    lat: 10.879135,
    lng: 79.454402,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Thirucherai_temple_tank_%281%29.jpg/250px-Thirucherai_temple_tank_%281%29.jpg"
  },
  {
    id: 16, // 16
    name: "Thirukannamangai",
    description: "Abishekavalli and Bhaktavatsala Perumal. The temple is one of the Panchakanna (Krishnaranya) Kshetrams, the five holy temples associated with Krishna, an avatar of Vishnu. The temple also has a statue of the Buddha worshipped in the shrine.",
    lat: 10.799552,
    lng: 79.586645,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Thirukannamangai2.JPG/250px-Thirukannamangai2.JPG"
  },
  {
    id: 17, // 17
    name: "Thirukannapuram",
    description: "Kannapura Nayaki and Sowriraja Perumal. The idol of Perumal is depicted with silky hair at this locale. Legend has it that he grew the hair to safeguard his devotee's words. The temple is one of the Panchakanna (Krishnaranya) Kshetrams, the five holy temples associated with Krishna, an avatar of Vishnu.",
    lat: 10.868499,
    lng: 79.704266,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Tirukannapuram9.JPG/250px-Tirukannapuram9.JPG"
  },
  {
    id: 18, // 18
    name: "Thirukannangudi",
    description: "Loganayaki and Lokanatha Perumal. The temple is one of the Panchakanna (Krishnaranya) Kshetrams, the five holy temples associated with Krishna, an avatar of Vishnu.",
    lat: 10.757222,
    lng: 79.76329,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Thirukannangudi_01_09_2021_withRahul.jpg/250px-Thirukannangudi_01_09_2021_withRahul.jpg"
  },
  {
    id: 19, // 19
    name: "Thirunagai",
    description: "Saundaryavalli and Sundararaja Perumal. The tributary of river Cauvery, Odambokki, passes close to the temple and the river is also called Virutha Kaveri. This leads to one of the names of presiding deity, \"Kaveri Thuraivan\". The present day Nagapattinam is believed to have been a forest, historically named Sundararinyam. During the Treta Yuga, a prince, Dhruva, heard about the importance of the forest, and began a penance, wishing to see Vishnu.",
    lat: 10.75983,
    lng: 79.843706,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Thirunagai8.JPG/250px-Thirunagai8.JPG"
  },
  {
    id: 20, // 20
    name: "Thiruthanjai Mamanikoil",
    description: "Raktapankajavalliand Neelamegha Perumal. Unlike other Divya Desams where a single shrine is referred, this set of temples is referred together in all the pasurams (verses). During the Treta Yuga, there were three demons by the names of  Tanchakan, Tantakan, and Kacamukan who were blessed by Shiva, and became very powerful. They grew arrogant and troubled sage Parashara, who was doing penance at this place. Vishnu killed Tanchakan, after whom Thanjavur was named.",
    lat: 10.815669,
    lng: 79.138677,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Neelamegha_Perumal_temple_%285%29.jpg/250px-Neelamegha_Perumal_temple_%285%29.jpg"
  },
  {
    id: 21, // 21
    name: "Thirunandhipura Vinnagaram",
    description: "Shenbagavalli and Jagannatha Perumal. Nandi, the sacred bull of Shiva, is believed to have got his curses relieved by worshipping Vishnu here, and hence the place is called Nandipuram and Nandhipura Vinnagaram. It is also believed that king Sibi worshipped Vishnu at this place.",
    lat: 10.922075,
    lng: 79.372192,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Natankovil1.jpg/250px-Natankovil1.jpg"
  },
  {
    id: 22, // 22
    name: "Thiruvelliyangudi",
    description: "Maragadhavalli and Kolavilli Rama Perumal. The temple is counted as Vaishnava Sukra Kshetra as Vishnu appeared as a beautiful deity to please his devotee Sukra (Venus). The place derived its name Thiruvelliyangudi hence and the presiding deity is also referred to as Velliyan. It is believed that Vishnu appeared in Kalyana Kolam (marriage posture) to Parasarar, Markendeyar, Mayan, Brahma, Sukran, and Bhudevi. To de-stress or relieve Vishnu, his mount or vahana, the eagle Garuda, holds the conch and the Sudarshana Chakram of Vishnu, making this the only temple where Garuda is depicted in such a posture.",
    lat: 11.056687,
    lng: 79.443095,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Velliyangudi_temple.jpg/250px-Velliyangudi_temple.jpg"
  },
  {
    id: 23, // 23
    name: "Thiruvazhundur",
    description: "Senkamalavalli and SriDevadiraja Perumal. In a Hindu legend, Brahma, the creator deity, drove away the cattle belonging to Krishna, an avatar of Vishnu. Krishna created another herd. Realising that the herd belonged to Krishna, Brahma apologised, and wished Krishna to set his abode at this place. Since Krishna appeared for the cattle and settled here, the presiding deity is called Amaruviappan (the one who is flanked by cattle). Following the legend, the presiding deity in the sanctum is portrayed with cattle surrounding him.",
    lat: 11.046532,
    lng: 79.579468,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Therazhunthur_3.jpg/250px-Therazhunthur_3.jpg"
  },
  {
    id: 24, // 24
    name: "Thiruchirupuliyur",
    description: "Dayanayaki and Krupasamudra Perumal. Shiva ordered the sage Vyaghrapada to perform penance at Srirangam, requesting the god Vishnu to give him a place in his abode, Vaikuntha. Vyaghrapada was joined by sage Patanjali in his journey. Because of his poor eyesight, the sages instead went southward, lost their way and reached Krupa Samudram, modern day Tirusirupuliyur. They prayed to Vishnu to come from Srirangam to grant them moksha (divine liberation). Vishnu is also believed to have appeared for sage Vyasa at this place.",
    lat: 10.991202,
    lng: 79.66944,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Tiruchirupuliur4.jpg/250px-Tiruchirupuliur4.jpg"
  },
  {
    id: 25, // 25
    name: "Thiruthalaichanga Nanmadiyam",
    description: "Thalaichanga Nachiyar and Chandrasaabahara Perumal. Chandra once conducted a sacrifice called the rajasuya yajna, which was attended by all the celestial deities. Tara, the wife of Brihaspati was attracted by Chandra. Brihaspati appealed to Vishnu on the event and cursed Chandra to have leprosy. Tara bore Budha from Chandra and since his birth had resulted from an illicit relationship, Budha hated his father. To propitiate himself of the curse, Chandra started worshipping Vishnu in this place.",
    lat: 11.129789,
    lng: 79.785252,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Thalachanga_Nanmathiyam_%286%29.jpg/250px-Thalachanga_Nanmathiyam_%286%29.jpg"
  },
  {
    id: 26, // 26
    name: "Thiruindalur",
    description: "Parimala Ranganayaki and SriParimala Ranganatha Perumal. According to Hindu legend, this site is where the moon god, Chandra is believed to have been relieved of his curse. Indu means moon, and the place Tiruindaloor derives its name from the legend. Chandra, worshipped Vishnu, who appeared to please his devotee.",
    lat: 11.109733,
    lng: 79.646232,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Indaloor1.jpg/250px-Indaloor1.jpg"
  },
  {
    id: 27, // 27
    name: "Thirukkavalambadi",
    description: "Senkamala Nachiyar and Gopala Krishna Perumal. Krishna, the eighth incarnation of Vishnu, and his consort Satyabhama, chose this location for their garden, as it resembled the one in the palace of the king of celestial deities, Indra. Kavalam indicates elephant, and padi indicates place - it is believed that Krishna saved an elephant at this place leading to the name of the temple. The event is described in the verses of Tirumangai Alvar in the Naalayira Divya Prabandham.",
    lat: 11.1769,
    lng: 79.7824,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thirukavalambadi2.jpg/250px-Thirukavalambadi2.jpg"
  },
  {
    id: 28, // 28
    name: "Thirukazhicheerama Vinnagaram",
    description: "Lokanayaki and Trivikrama Perumal. Thirumangai Aḻvar was requested by the Shaiva Kuravar Sambandar to praise God through pasurams. The deity in the temple is praised as \"Man alantha tadalan\", meaning the one who measured the land.  The name Tadalan is in honour of Tiruvikrama (Vamana) form and the mulavar (central deity) fixed in the central shrine is in this form. The presiding deity, Tiruvikrama, appeared for sage Ashtakoma.",
    lat: 11.240964,
    lng: 79.731689,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Thadalankoil_%2810%29.jpg/250px-Thadalankoil_%2810%29.jpg"
  },
  {
    id: 29, // 29
    name: "Thiruarimeya Vinnagaram",
    description: "Amrudhagadavalli and Kudamudakoothan Perumal. The Hindu god Shiva is believed to have started dancing in fury at this place after the death of his consort Sati during the yagna (sacrifice) of Daksha. Each time his lock of hair touched the ground, there were eleven other forms of Shiva who appeared. The celestial deities were worried that if the dance continues, it would result in the decimation of all of creation. They prayed to Vishnu for help, who appeared at this place. On seeing Vishnu, Shiva's anger reduced, and he requested Vishnu to appear in eleven forms like he had. On his request, Vishnu appeared in eleven different forms at Tirunangar. The eleven places where Vishnu appeared are believed to be where the eleven temples in Tirunangar are located.",
    lat: 11.17768,
    lng: 79.78152,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Arimeya_Vinnagaram_-_Kuamadukoothan5.jpg/250px-Arimeya_Vinnagaram_-_Kuamadukoothan5.jpg"
  },
  {
    id: 30, // 30
    name: "Thiruvanpurushothamam",
    description: "Purushotthama Nayaki and Purushottama Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.178783,
    lng: 79.77669,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thrivuanpurushotam2.jpg/250px-Thrivuanpurushotam2.jpg"
  },
  {
    id: 31, // 31
    name: "Thirusemponsaikoil",
    description: "Sweda Pushpavalli and Hemaranganatha Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.178446,
    lng: 79.779651,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Thiruchsemponsey2.jpg/250px-Thiruchsemponsey2.jpg"
  },
  {
    id: 32, // 32
    name: "Thirumanimadakoil",
    description: "Pundareegavalli and Sashvatha Deepaya Narayana Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.173971,
    lng: 79.776872,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Narayana_Perumal5.jpg/250px-Narayana_Perumal5.jpg"
  },
  {
    id: 33, // 33
    name: "Thiruvaikunta Vinnagaram",
    description: "Vaikundavalli and Vaikundanatha Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.179804,
    lng: 79.778267,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Vaikunda_vinnagaram_2.jpg/250px-Vaikunda_vinnagaram_2.jpg"
  },
  {
    id: 34, // 34
    name: "Thiruvali",
    description: "Amrudhagadavalli and Kedarapathivaraya Perumal. Associated with Narasimha's slaying of Hiranyakashipu, and his pacification by Lakshmi sitting on his lap.",
    lat: 11.202979,
    lng: 79.774538,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Thiruvali4.jpg/250px-Thiruvali4.jpg"
  },
  {
    id: 35, // 35
    name: "Thiruthevanarthogai",
    description: "Samudradanaya and Devanayaka Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.196842,
    lng: 79.775504,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Thiruthevanarthogai3.jpg/250px-Thiruthevanarthogai3.jpg"
  },
  {
    id: 36, // 36
    name: "Thiruthetriambalam",
    description: "Rakthapankajavalli and Lakshmiranga Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.17302,
    lng: 79.7951,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pallikonda_Perumal_-_Thiruthetriambalam3.jpg/250px-Pallikonda_Perumal_-_Thiruthetriambalam3.jpg"
  },
  {
    id: 37, // 37
    name: "Thirumanikoodam",
    description: "Boonayagi and Varadharaja Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.177415,
    lng: 79.777838,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Thirumanikoodam4.jpg/250px-Thirumanikoodam4.jpg"
  },
  {
    id: 38, // 38
    name: "Thiruvellakulam",
    description: "Padmavathi and Srinivasa Perumal. Same as Thiruarimeya Vinnagaram.",
    lat: 11.190106,
    lng: 79.764929,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Annan_koil.jpeg/250px-Annan_koil.jpeg"
  },
  {
    id: 39, // 39
    name: "Thiruparthanpalli",
    description: "Tamarai Nayagi and Taamaraiyaal Kelvan Perumal. Same as Thiruarimeya Vinnagaram, and also a site where Arjuna prayed to Krishna.",
    lat: 11.169952,
    lng: 79.797515,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Thiruparthanpalli1.jpg/250px-Thiruparthanpalli1.jpg"
  },
  {
    id: 40, // 40
    name: "Thiruchitrakoodam",
    description: "Pundareekavalli and Govindaraja Perumal. The shrine has close connections with the Govindaraja temple in Tirupati, dating back to the saint Ramanuja of the 11-12th century. Ramanujar fled to Tirupati with the utsava (festival image) of the temple to escape Shaiva persecution.",
    lat: 11.399207,
    lng: 79.693364,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Temple_Tank_%28Sivaganga%29%2C_Nataraja_Temple_-_panoramio.jpg/250px-Temple_Tank_%28Sivaganga%29%2C_Nataraja_Temple_-_panoramio.jpg"
  },
  {
    id: 41, // 41
    name: "Thiruvanthipuram",
    description: "Hemambujavalli and Devanatha Perumal. A number of sages bore witness to Mahavishnu in his resplendent form, with his weapons Sudarshana Chakra (discus), Panchajanya (conch) and the Kaumodaki (mace) gracing his arms.",
    lat: 11.745099,
    lng: 79.709351,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Devanathaswamytemple_%286%29.jpg/250px-Devanathaswamytemple_%286%29.jpg"
  },
  {
    id: 42, // 42
    name: "Thirukkoyilur",
    description: "Pushpavalli and Trivikrama Perumal. The temple is believed to be the place where the first three Alvars, the Vaishnava saints, namely, Poigai Alvar, Bhoothathalvar, and Peyalvar attained salvation. The temple is one of the Panchakanna (Krishnaranya) Kshetrams, the five holy temples associated with Krishna, an avatar of Vishnu.",
    lat: 11.967006,
    lng: 79.202479,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ulagalantha_Perumal9.JPG/250px-Ulagalantha_Perumal9.JPG"
  },
  {
    id: 43, // 43
    name: "Thirukkachi - Atthigiri",
    description: "Perundevi Thayar and Varadharaja Perumal. One of the greatest Hindu scholars of the Vaishnava Vishishtadvaita philosophy, Ramanuja, is believed to have resided in this temple. The temple, along with Ekambareswarar Temple and Kamakshi Amman Temple in Kanchipuram, is popularly known as  Mumurtivasam (abode of the trio), while Srirangam is referred to as ‘The Koil’ (temple) and Tirupati as the ‘Malai’ (hill).",
    lat: 12.819137,
    lng: 79.724646,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Varadaraja_Perumal_Temple_Kanchipuram_%2831%29.jpg/250px-Varadaraja_Perumal_Temple_Kanchipuram_%2831%29.jpg"
  },
  {
    id: 44, // 44
    name: "Ashtabujagaram",
    description: "Padmasani and Ashtabhuja Perumal. Also based on the Gajendra Moksha: The elephant Gajendra used to worship Vishnu with the lotus fetched from the temple tank every day. Once, while picking up a lotus, a crocodile caught the leg of Gajendra, who started calling the name of Vishnu for help. Vishnu sent his discus to punish the crocodile, and relieve the elephant. The presiding deity is addressed by various names like Adikesava Perumal, Gajendra Varadhan, and Chakradhar.",
    lat: 12.822736,
    lng: 79.710806,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ashtabhujakaram_%289%29.jpg/250px-Ashtabhujakaram_%289%29.jpg"
  },
  {
    id: 45, // 45
    name: "Thiruthanka",
    description: "Maragadhavalli and Deepaprakasa Perumal. Vedanta Desika (1268 - 1369 CE) was an ardent devotee of Deepa Prakasa Temple at Thoppul. The devotion of Desika is mentioned in Saranagathi Deepika in 59 verses. He was born in this kshetra. Vedanta Desika also has a shrine inside the temple. A statue of Hayagriva worshipped by him also has a temple nearby to him.",
    lat: 12.824382,
    lng: 79.705543,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Vilakkoli-perumal108dd.jpg/250px-Vilakkoli-perumal108dd.jpg"
  },
  {
    id: 46, // 46
    name: "Thiruvelukkai",
    description: "Amritavalli and Yoga Narasimha Perumal. Aḻagiya Singar is believed to have appeared to slay Hiranya, the demon king. Velukkai is derived from Vel (desire) and irukkai (place of stay), meaning the place where Vishnu desired to stay, which became Velukkai from Velirukkai.",
    lat: 12.822197,
    lng: 79.70645,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Tiruvelukkai_%283%29.jpg/250px-Tiruvelukkai_%283%29.jpg"
  },
  {
    id: 47, // 47
    name: "Thiruneeragam",
    description: "Nilamangai Valli and Jagadeesha Perumal. The temple has no presiding deity, but just a festive image probably brought from another shrine. The images of the festival deity, Jagadishvara, facing the east and having four arms, is housed in a hall in the second precinct. The water body associated with the temple is Akrura Tirtham and the vimana is Jagadiswara Vimanam. According to Pillai Perumal Aiyangar in his Nurrettrutiruppatiyantati, Vishnu revealed himself to a sage in the form of a child in a banyan leaf.",
    lat: 12.839122,
    lng: 79.705185,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ulagalantha_perumal_Kanchipuram3.jpg/250px-Ulagalantha_perumal_Kanchipuram3.jpg"
  },
  {
    id: 48, // 48
    name: "Thiruppadagam",
    description: "Rukmini and Pandavadootha Perumal. The temple is considered one of three oldest temples in Kanchipuram, and is believed to have been built by the Pallavas of the late 8th century CE, with later contributions from Medieval Cholas and Vijayanagara kings. The temple is associated with a chapter in Mahabharata when Krishna went to the Kauravas as a missive (called Thoota locally) to the Pandavas.",
    lat: 12.842726,
    lng: 79.696941,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Pandavathoothar_%287%29.jpg/250px-Pandavathoothar_%287%29.jpg"
  },
  {
    id: 49, // 49
    name: "Nilathingal Thundam",
    description: "Chandrasoodavalli and Chandrasooda Perumal. Shiva once attempted to test the devotion of his consort Parvati by setting her aflame while she meditated under the temple's mango tree. When she prayed for Vishnu's intervention, he seized Shiva's crescent, and used its power to douse the divine flame.",
    lat: 12.847463,
    lng: 79.699313,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Ekambareswarar3.jpg/250px-Ekambareswarar3.jpg"
  },
  {
    id: 50, // 50
    name: "Thiruooragam",
    description: "Amudavalli and Trivikrama Perumal. The central shrine of temple is most commonly referred as Peragam, while the smaller shrine where the image of the demigod Adishesha is houses is called Tiruoorgam. According to tradition, Mahabali, at the foot of Vamana, could not view the vishvarupam and requested him to produce a smaller form. Vishnu obliged and appeared as a snake in a smaller shrine. The shrine is frequented by childless couple praying for offspring.",
    lat: 12.839122,
    lng: 79.705185,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ulagalantha_perumal_Kanchipuram3.jpg/250px-Ulagalantha_perumal_Kanchipuram3.jpg"
  },
  {
    id: 51, // 51
    name: "Thiruvekka",
    description: "Komalavalli and Yathottakari Perumal. The goddess Saraswati, angry with Brahma, attempted to disrupt his yajna. Vishnu stopped her in these efforts. Defeated, Saraswati took the form of the Vegavati river. As Vishnu interfered the path of the river, it was termed Vegavani, then as Vegannai, which gradually corrupted to Vekka.",
    lat: 12.82407,
    lng: 79.712462,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Yathothkari_%282%29.jpg/250px-Yathothkari_%282%29.jpg"
  },
  {
    id: 52, // 52
    name: "Thirukkaragam",
    description: "Padmamani and Karunagara Perumal. The shrine is located on the third precinct of the temple. According to Hindu legend, sage Garga performed his penance at this temple and obtained knowledge. The place thus derived its name Garagaham, which later became Kaaragam. The presiding deity of the shrine is Karunakara Perumal facing north and seated on Adisesha and his consort Padmamani Nachiar. The temple tank associated with it is called Agraya Tirtha and the vimana is called Vamana Vimanam or Ramaya Vimanam.",
    lat: 12.839122,
    lng: 79.705185,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ulagalantha_perumal_Kanchipuram3.jpg/250px-Ulagalantha_perumal_Kanchipuram3.jpg"
  },
  {
    id: 53, // 53
    name: "Thirukkarvaanam",
    description: "Kamalavalli and Neelamega Perumal. The shrine is located in the second precinct. The presiding deity is called Kalvar and faces north, while his consort is Kamalvalli Thayar. Gauri Tatakam and Taratara Tatakam are the temple tanks associated with the temple and the vimana is called Puskala Vimana. There is a separate for Aranavalli Thayar.",
    lat: 12.839122,
    lng: 79.705185,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Ulagalantha_perumal_Kanchipuram3.jpg/250px-Ulagalantha_perumal_Kanchipuram3.jpg"
  },
  {
    id: 54, // 54
    name: "Thirukkalvanur",
    description: "Anjilai Valli and Adi Varaha Perumal. The shrine is present inside the Kamakshi Amman temple, and glorifies Vishnu in his form of Varaha.",
    lat: 12.840653,
    lng: 79.70325,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Kanchipuram.in_Kamakshi-Amman_Temple_-_panoramio.jpg/250px-Kanchipuram.in_Kamakshi-Amman_Temple_-_panoramio.jpg"
  },
  {
    id: 55, // 55
    name: "Thiruppavalavannam",
    description: "Pavalavalli and Pavalavarna Perumal. Associated with the legend that Vishnu purportedly assumes his form in different hues depending on the conduct of humans during a given age.",
    lat: 12.843658,
    lng: 79.707604,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Manavalamamunigal_05.jpg/250px-Manavalamamunigal_05.jpg"
  },
  {
    id: 56, // 56
    name: "Thiru Parameswara Vinnagaram",
    description: "Vaikundavalli and Vaikundanatha Perumal. Regarded to be the site where Vishnu appeared before Pallava princes who had performed a yajna for him.",
    lat: 12.837151,
    lng: 79.709482,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Parameswara_Vinnagaram.JPG/250px-Parameswara_Vinnagaram.JPG"
  },
  {
    id: 57, // 57
    name: "Thiruputkuzhi",
    description: "Maragadhavalli and Vijayaraghava Perumal. The last rites of Jatayu are believed to have been performed here by Rama.",
    lat: 12.872642,
    lng: 79.618683,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tirupukuzhi1.jpg/250px-Tirupukuzhi1.jpg"
  },
  {
    id: 58, // 58
    name: "Thirunindravur",
    description: "Sudhavalli and Bhaktavatsala Perumal. Regarded to be the site where Varuna worshipped Vishnu.",
    lat: 13.112501,
    lng: 80.026096,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bakthavtsala_perumal_gopuram.jpg/250px-Bakthavtsala_perumal_gopuram.jpg"
  },
  {
    id: 59, // 59
    name: "Thiruvallur",
    description: "Kanakavalli and Vaidya Veeraraghava Perumal. Regarded to be the site where Vishnu tested the devotion of a sage by asking him large portions of his food and residence before blessing him.",
    lat: 13.143204,
    lng: 79.907439,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tiruvallur9.jpg/250px-Tiruvallur9.jpg"
  },
  {
    id: 60, // 60
    name: "Thiruvallikeni",
    description: "Rukmini and Venkatakrishna Perumal. The name Parthasarathy, in Tamil, means the 'charioteer of Arjuna', referring to Krishna's role as a charioteer to Arjuna in the epic Mahabharata. It was originally built by the Pallavas in the 8th century and considered the oldest structural in Chennai.",
    lat: 13.05392,
    lng: 80.276942,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Tiruvallikeni1.jpg/250px-Tiruvallikeni1.jpg"
  },
  {
    id: 61, // 61
    name: "Thiruneermalai, Tambaram",
    description: "Animamalar Mangai and Neervanna Perumal. Brahmanda Purana refers this place Toyatri, meaning a mountain surrounded by water. Thiruneermalai, the modern Tamil name also means a sacred mountain surrounded by water. Among the eight sacred Vishnu temples where he manifested himself called \"Ashtaswayamvaka Kshetra\".",
    lat: 12.963808,
    lng: 80.114953,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Thiruneermalai_temple.jpg/250px-Thiruneermalai_temple.jpg"
  },
  {
    id: 62, // 62
    name: "Thiruvidanthai",
    description: "Komalavalli and Nityakalyana Perumal. The sage Kalava had 360 daughters who wished to wed Varaha, and the site derives its name from the belief that Varaha marries a maiden here everyday.",
    lat: 12.763217,
    lng: 80.242538,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thiruvidanthai8.JPG/250px-Thiruvidanthai8.JPG"
  },
  {
    id: 63, // 63
    name: "Thirukkadanmallai",
    description: "Boosthalamangadevi and Sthalasayana Perumal. The temple is believed to be the birthplace of the Vaishnava Alvar saint Bhoothathalvar. Sthalasayana Perumal is believed to have appeared to sage Pundarika. The temple is one of the 32 Group of Monuments at Mahabalipuram that are declared as UN world heritage sites, but unlike others that are maintained by the Archaeological Survey of India, the temple is maintained and administered by the Hindu Religious and Endowment Board of the Government of Tamil Nadu.",
    lat: 12.617464,
    lng: 80.193303,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Thirukadalmallai_Temple.jpg/250px-Thirukadalmallai_Temple.jpg"
  },
  {
    id: 64, // 64
    name: "Thirukkadigai",
    description: "Amritavalli and Yoga Narasimha Perumal. The temple has twin hills, with the one of Yoga Narasimha called the Periya malai (big hill) 750 ft (230 m) tall and occupying an area of 1.25 acres (5,100 m2). The top of the hill is approached through a flight of 1,305 steps. The temple is seen as one of the famous temples of Narasimha and a powerful image of Hanuman. Manavala Mamunigal is believed to have performed enunciation of Thirupavai at this place on the request of his disciple Erumbiappa. The town originally was under the control of Shaivites which is substantiated by the temple ruins near Parappan Kulam, in the valley between two hills. This is where original Sholinghur was situated. Unfinished Nandhis and Sthupas are found in numerous places in Sholinghur.",
    lat: 13.093698,
    lng: 79.424626,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sholingar_%2815%29.JPG/250px-Sholingar_%2815%29.JPG"
  },
  {
    id: 65, // 65
    name: "Thirunavai",
    description: "Malarmangai and Navamukunda Perumal. Regarded to be the site Lakshmi and Gajendra offered worship to Vishnu.",
    lat: 10.360704,
    lng: 76.83654,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thirunavaya_Navamukunda_Temple.JPG/250px-Thirunavaya_Navamukunda_Temple.JPG"
  },
  {
    id: 66, // 66
    name: "Thiruvithuvakodu",
    description: "Vithuvakoduvalli and Abhayapradhaya Perumal. The temple is regarded to have been built by Parashurama for the veneration of Shiva.",
    lat: 10.3607,
    lng: 76.83654,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Thiruvithuvakoodu_%283%29.jpg/250px-Thiruvithuvakoodu_%283%29.jpg"
  },
  {
    id: 67, // 67
    name: "Thrikkakara Vamanamoorthy Kshethram (Thirukatkarai)",
    description: "Vathsalyavalli and Katkaraswami Perumal. Associated with the Vamana avatar and the humbling of Mahabali.",
    lat: 10.3607,
    lng: 76.83654,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Thirukatkarai3.jpg/250px-Thirukatkarai3.jpg"
  },
  {
    id: 68, // 68
    name: "Thirumoozhikkalam",
    description: "Madhuraveni and Sookthinatha Perumal. Rama's brothers Lakshmana and Bharata are believed to have prayed to Vishnu in this temple.",
    lat: 10.3607,
    lng: 76.8365,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Thirumoozhikalam2.jpg/250px-Thirumoozhikalam2.jpg"
  },
  {
    id: 69, // 69
    name: "Sree Vallabha Temple (Thiruvallavazh)",
    description: "Vathsalyavalli and Vallabhaswami Perumal. Lakshmi, the daughter of the sea, is regarded to have prayed to Vishnu for the boon of marrying him in this site.",
    lat: 9.42723,
    lng: 76.81732,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Sree_Vallaba_Temple_5.JPG/250px-Sree_Vallaba_Temple_5.JPG"
  },
  {
    id: 70, // 70
    name: "Thrikodithanam Mahavishnu Temple (Thirukkodithanam)",
    description: "Karpagavalli and Amruthanarayana Perumal. Believed to be the temple constructed by the Pandava Sahadeva during a pilgrimage, after the coronation of Parikshit.",
    lat: 9.42723,
    lng: 76.81732,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Thrickodithanam_8.JPG/250px-Thrickodithanam_8.JPG"
  },
  {
    id: 71, // 71
    name: "Thrichittatt Mahavishnu Temple (Thiruchengundrur)",
    description: "Rakthapankajavalli and Devathideva Perumal. It is one of the five ancient shrines in the Chengannur area of Kerala, connected with the legend of Mahabharata, where the five Pandavas are believed to have built one temple each; the temple is believed to have been built by Yudhishthira. The Imayavar (devas) came to this place prior to Yudhishthira, and hence the deity here is referred as Imayavarappar. There is another version that the Pandavas worshipped the idols during their reign, and started installing them in different places during the end of their reign.",
    lat: 9.42723,
    lng: 76.81732,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thrichittatt_Maha_Vishnu_Temple1.JPG/250px-Thrichittatt_Maha_Vishnu_Temple1.JPG"
  },
  {
    id: 72, // 72
    name: "Thiruppuliyur",
    description: "Porkodi Nachiyar and Maayapiran Perumal. Believed to be the temple constructed by the Pandava prince Bhima during a pilgrimage, after the coronation of his grand-nephew Parikshit.",
    lat: 9.42723,
    lng: 76.81732,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Puliyoor.JPG/250px-Puliyoor.JPG"
  },
  {
    id: 73, // 73
    name: "Aranmula Parthasarathy Temple (Thiruvaranvilai)",
    description: "Padmasani Nachiyar and Kuralappan Perumal. Believed to be the temple constructed by the Pandava prince Arjuna during a pilgrimage, after the coronation of his grandson Parikshit.",
    lat: 9.35542,
    lng: 76.76033,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Aranmula_Temple.JPG/250px-Aranmula_Temple.JPG"
  },
  {
    id: 74, // 74
    name: "Thiruvanvandoor",
    description: "Kamalavalli Nachiyar and Paambanaiyappan Perumal. It is one of the five ancient shrines in the Chengannur area of Kerala, connected with the legend of Mahabharata, where the five Pandavas are believed to have built one temple each; this temple is believed to have been built by Nakula. Earliest references to this temple appear in the verses and hymns composed by the greatest of Alvar saints – Nammalvar, in circa 800 CE. Stone inscriptions in the temple date it back to the Second Chera Empire (800–1102 CE).",
    lat: 9.35542,
    lng: 76.76031,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Thiruvanvandoor_Pambanaiappan_Temple_1.JPG/250px-Thiruvanvandoor_Pambanaiappan_Temple_1.JPG"
  },
  {
    id: 75, // 75
    name: "Thiruvananthapuram",
    description: "Harilakshmi and Ananthapadmanabhaswami Perumal. It is widely regarded to be the richest shrine in India and is the dynastic deity of Travancore.",
    lat: 8.53402,
    lng: 76.92787,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Padmanabhaswamy_Temple_Thiruvananthapuram.jpg/250px-Padmanabhaswamy_Temple_Thiruvananthapuram.jpg"
  },
  {
    id: 76, // 76
    name: "Thiruvattaru",
    description: "Maragadhavalli and Adhikesava Perumal. The site is associated with the legend of Krishna slaying the asura Keshi.",
    lat: 8.36897,
    lng: 77.24167,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Thiruvattar_Adhi_Kesava_Temple.JPG/250px-Thiruvattar_Adhi_Kesava_Temple.JPG"
  },
  {
    id: 77, // 77
    name: "Thiruvanparisaram",
    description: "Kamalavalli and Thiruvaḻmarbhan Perumal. Kulashekara Alvar is believed to have constructed the temple after bathing in a nearby water tank.",
    lat: 8.254153,
    lng: 77.47032,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Thriuppathisaram.jpg/250px-Thriuppathisaram.jpg"
  },
  {
    id: 78, // 78
    name: "Thirukkurungudi",
    description: "Vamanakshetravalli and Vamanakshetrapoornaya Perumal. Vishnu is regarded to have assumed his Varaha avatar and stayed here with his consort, Bhumi, both assuming a small stature.",
    lat: 8.436906,
    lng: 77.5259,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Thirukarungudi_temple.jpg/250px-Thirukarungudi_temple.jpg"
  },
  {
    id: 79, // 79
    name: "Thirucheeravaramangai",
    description: "Chireevaramangaivalli and Thothadhrinatha Perumal. Lakshmi is believed to have been born here in one of her earthly incarnations.",
    lat: 8.436905,
    lng: 77.5259,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Naguneri18.jpg/250px-Naguneri18.jpg"
  },
  {
    id: 80, // 80
    name: "Thiruvaigundam",
    description: "Boonayagi, Vaigundavalli and Vaikuntanatha Perumal. Vishnu assumed his Matsya avatar to retrieve the Vedas from an asura and return them to Brahma, after which he resided here for a while.",
    lat: 8.609726,
    lng: 77.976,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Srivaikuntam6.jpg/250px-Srivaikuntam6.jpg"
  },
  {
    id: 81, // 81
    name: "Thiruvaragunamangai",
    description: "Varagunavalli and Vijayasana Perumal. A sage named Vedavitha performed penance after the death of his parents. Vishnu appeared in the form of a Brahmin, and advised him to perform a penance at Varagunamangai. After several years of penance and pleased by the devotion of Vedavitha, Vishnu appeared before him. Vedavitha requested Vishnu to appear as Vijayasnar at this place.",
    lat: 8.60972,
    lng: 77.976037,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Varagunamangai1.jpg/250px-Varagunamangai1.jpg"
  },
  {
    id: 82, // 82
    name: "Thiruppuliangudi",
    description: "Malarmagal Nachiyar and Poomagal Nachiyar and Kaaichina Vendhan Perumal. Regarded to be the site where Vishnu appeased the jealous Bhudevi, the second aspect of Lakshmi, appearing with Sridevi.",
    lat: 8.60972,
    lng: 77.976037,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Thirupuliyangudi3.jpg/250px-Thirupuliyangudi3.jpg"
  },
  {
    id: 83, // 83
    name: "Thirutholaivillimangalam (Navathirupathi)",
    description: "Karunthadanganni Nachiyar and Aravindalochana Perumal. Regarded to be the site Vishnu blessed the sage Suprabha.",
    lat: 8.60972,
    lng: 77.97603,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Aravinda_Lochanar_temple2.jpg/250px-Aravinda_Lochanar_temple2.jpg"
  },
  {
    id: 84, // 84
    name: "Thirukkulandai (Navathirupathi)",
    description: "Alamelumangai Thayar and Kulandhai Valli and Srinivasa Perumal. An asura once abducted Kumudhavalli, the wife of a Vaishnava. The asura was vanquished by Vishnu, who danced on his head, and restored Kumudhavalli to her husband.",
    lat: 8.606968,
    lng: 77.950545,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Thirukulandhai1.jpg/250px-Thirukulandhai1.jpg"
  },
  {
    id: 85, // 85
    name: "Thirukkolur (Navathirupathi)",
    description: "Amudhavalli and Koloorvalli and Vaithamanithi Perumal. Regarded to be the site Vishnu relieved Kubera of his misfortune.",
    lat: 8.6065018,
    lng: 77.97389,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Thirukkolur3.jpg/250px-Thirukkolur3.jpg"
  },
  {
    id: 86, // 86
    name: "Thirupperai",
    description: "Kuḻaikkadhu Valli, and Thirupperai Nachiyar and Magara Nedungkuḻai Kathar Perumal. Believed to be the site Bhudevi's beauty was restored after being cursed by Durvasa.",
    lat: 8.6065,
    lng: 77.97389,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Then_Thirupperai3.jpg/250px-Then_Thirupperai3.jpg"
  },
  {
    id: 87, // 87
    name: "Thirukkurugur",
    description: "Aadhinadha Valli and Gurukoor valli and Aadhinatha Perumal. Associated with Nammalvar and Madhurakavi Alvar.",
    lat: 8.60696,
    lng: 77.95054,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Azhwar_Thirunagari9.jpg/250px-Azhwar_Thirunagari9.jpg"
  },
  {
    id: 88, // 88
    name: "Srivillipputhur",
    description: "Kodhadevi and Vatapatrasayee Perumal. Regarded to be the site where the deity Ranganatha of Srirangam married his ardent devotee and Alvar, Andal.",
    lat: 8.60696,
    lng: 77.95054,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Andal_Temple.jpg/250px-Andal_Temple.jpg"
  },
  {
    id: 89, // 89
    name: "Thiruthangal",
    description: "Sengamala Thayar and Narayana Perumal. The temple in its present form was believed to have been built by Devendra Vallabha, a Pandya king. The temple has three inscriptions in its two rock-cut caves, two dating from the period of the 8th century. Ninra Narayana is believed to have appeared to Sridevi and Bhudevi. Ranganatha from the Srirangam Ranganathaswamy temple is believed to have been enamoured by the devotion of Andal. He started a journey to Srivilliputhur Divya Desam to seek her hand for marriage. While reaching the place, it became dark, and he decided to spend the night in the place. Since he stayed at this place, it came to be known as Thiruthangal and the hillock came to be known as Thalagiri.",
    lat: 9.010702,
    lng: 77.8853,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Thiruthankal_temple_%281%29.jpg/250px-Thiruthankal_temple_%281%29.jpg"
  },
  {
    id: 90, // 90
    name: "Thirukkoodal",
    description: "Madhuravalli Thayar and Koodal Aḻagar Perumal. Historians are of the opinion that Koodal Aḻagar temple finds mention in Sangam literature (3 century BCE – 3 century CE) in works like Madurai Kanchi by Mangudi Marudan, Paripāṭal, Kaliththokai and Silappatikaram. Periyalvar obtained the name as he is believed to be an ardent worshipper of Vishnu. While coming out of Madurai, he was taken out in procession to Srivilliputhur and he got the divine vision of Vishnu at the instance. He started reciting his composition, Periya Tirumoḻi, which was compiled in the Naalayira Divya Prabhandam by Manavala Mamunigal. Manavala decreed that the verses of Periyalvar starting with Tirupallandu should be the first and last verse while reciting Pradandam in any sacred occasion in Vishnu temples. Ramanuja, a proponent during the 10th century, believes that Tirupallandu originated at Madurai. Thus Koodal Aḻagar temple finds an indomitable position in Vaishnavite belief. During Mahapralaya, the great disaster, the devotees sought the abode of Vishnu in Madurai.",
    lat: 9.9886,
    lng: 78.26434,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Koodalazhagar_%2815%29.jpg/250px-Koodalazhagar_%2815%29.jpg"
  },
  {
    id: 91, // 91
    name: "Thirumaliruncholai",
    description: "Sundaravalli and Kallaḻagar Perumal. Kallaḻagar was worshipped by Yama, the Hindu god of death. He requested Vishnu to stay in the place and built a temple with the help of Vishvakarma, the divine architect. Kallaḻagar is believed to have appeared to redeem sage Suthapava off his curse from sage Durvasa. The temple houses some rare Vijayanagara sculptures.",
    lat: 9.988609,
    lng: 78.2643428,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/AzhagarKovil_Madurai.JPG/250px-AzhagarKovil_Madurai.JPG"
  },
  {
    id: 92, // 92
    name: "Thirumogur",
    description: "Mohavalli and Kalamega Perumal. According to Hindu legend, the presiding deity is believed to have appeared as a female Mohini to lure the asuras to support the devas, the celestial deities. The temple is also known as Mohanapuram and Mohanakshetram.",
    lat: 9.9886,
    lng: 78.26434,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tirumohur_%289%29.jpg/250px-Tirumohur_%289%29.jpg"
  },
  {
    id: 93, // 93
    name: "Thirukkoshtiyur",
    description: "Mahalakshmi and Uraga Mellanayaan Perumal. The temple is known as the place where Ramanuja, the expounder of Vaishnavadatta philosophy preached the mantra \"Om Namo Narayana\" to all people irrespective of their birth. Sowmyanarayana Perumal is believed to have appeared as Narasimha avatar to the devas, the celestial deities.",
    lat: 9.9886,
    lng: 78.2643,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sowmyanarayana_Perumal_%288%29.jpg/250px-Sowmyanarayana_Perumal_%288%29.jpg"
  },
  {
    id: 94, // 94
    name: "Thiruppullani",
    description: "Kalyanavalli, Padmasani and Kalyana Jagannatha Perumal. The temple is believed to have been built during the late 8th century CE, with later contributions from Medieval Cholas, later Pandyas, Sethupathi Kings of Ramnad. According to Hindu legend, Rama is believed to have done penance to worship Varuna to seek a path to Lanka upon the grass, giving the name Dharbasayanam to the place.",
    lat: 9.9886,
    lng: 78.26434,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tirupullani1.jpg/250px-Tirupullani1.jpg"
  },
  {
    id: 95, // 95
    name: "Thirumeyyam",
    description: "Uyya Vandha Nachiyar and Sathyagirinatha Perumal. Historians believe that the temple was built during the 9th century by the Pandyas. M.A. Dhaky places the period to be the 7th decade of 9th century. He has also compared the images of the temple to that of Vijayalaya Choleeswaram in Narthamalai, built by Muttaraiyar kings during the same period. Another view is that the temple to have been built by a vassal of Pallavas following the rock-cut architecture of the group of monuments at Mahabalipuram built by Mahendravarman I (590-630 CE) and his son Narasimhavarman I.",
    lat: 9.9886,
    lng: 78.2643,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Thirumayam_temple.jpg/250px-Thirumayam_temple.jpg"
  },
  {
    id: 96, // 96
    name: "Thiruvayodhi (Ayodhya)",
    description: "Seethadevi and Ramachandra Perumal. The birthplace of Rama, The current temple is being built on the site where his palace stood. One of the most famous Vaishnavite pilgrimage sites in India.",
    lat: 26.79216,
    lng: 82.1998,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vijayraghav_Mandir%2C_Ayodhya.jpg/250px-Vijayraghav_Mandir%2C_Ayodhya.jpg"
  },
  {
    id: 97, // 97
    name: "Naimisaranyam",
    description: "Harilakshmi and Devaraja Perumal. Regarded to be the site where Vishnu offered counsel to Indra regarding defeating Vritra.",
    lat: 27.43625,
    lng: 80.57052,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Cakratirtham.jpg/250px-Cakratirtham.jpg"
  },
  {
    id: 98, // 98
    name: "Thirupruthi (Jyothirmath)",
    description: "Parimalavalli and Paramapurusha Perumal. A pilgrimage site of the Alvars, who venerated Vishnu as Narasimha.",
    lat: 29.92981,
    lng: 79.42245,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Narsingh_Temple%2C_Joshimath.jpg/250px-Narsingh_Temple%2C_Joshimath.jpg"
  },
  {
    id: 99, // 99
    name: "Thirukkandamenum Kadinagar",
    description: "Pundareegavalli and Purushottama Perumal. Believed to be the site Rama performed a penance after slaying Ravana, the son of a sage.",
    lat: 30.145556,
    lng: 78.564444,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Devprayag2008.JPG/250px-Devprayag2008.JPG"
  },
  {
    id: 100, // 100
    name: "Thiruvadari (Badrinath)",
    description: "Aravindhavalli and Badrinarayana Perumal. Lakshmi is believed to have protected and massaged Vishnu's feet at this site. One of the most famous Vaishnavite pilgrimage sites in India, this temple is a part of the Char Dham and Chota Char Dham circuits.",
    lat: 30.744695,
    lng: 79.491175,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Badrinath_temple.jpg/250px-Badrinath_temple.jpg"
  },
  {
    id: 101, // 101
    name: "Thiru Saligram (Muktinath)",
    description: "Sridevi and Srimurti Perumal. Praised by Thirumangai Alvar as a sacred site of Vishnu, possibly owing to its proximity to Shaligram stones.",
    lat: 28.816711,
    lng: 83.87128,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Muktinath_Temple_view.JPG/250px-Muktinath_Temple_view.JPG"
  },
  {
    id: 102, // 102
    name: "Thiruvadamadurai (Krishna Janmabhoomi)",
    description: "Satyabama and Govardhanagiridhari Perumal. Believed to be the site where Krishna was born. One of the most famous Vaishnavite pilgrimage sites in India.",
    lat: 27.504756,
    lng: 77.669646,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Mathura_Temple-Mathura-India0002.JPG/250px-Mathura_Temple-Mathura-India0002.JPG"
  },
  {
    id: 103, // 103
    name: "Thiruvaipadi (Gokula)",
    description: "Rukmini, Sathyabama, and Navamohanakrishna Perumal. Regarded to be the site Krishna spent his childhood with his brother Balarama and Radha, Krishna's lover",
    lat: 26.95009,
    lng: 80.43869,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Gokul_temple.JPG/250px-Gokul_temple.JPG"
  },
  {
    id: 104, // 104
    name: "Thirudwarakai (Dwarakadheesh)",
    description: "Rukmini and Dwarakadheesha Perumal. Regarded to be the site Krishna's chief wife, Rukmini, was cursed by the sage Durvasa, and was liberated by her husband.",
    lat: 24.00995,
    lng: 73.33053,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Dwarakadheesh_Temple.jpg/250px-Dwarakadheesh_Temple.jpg"
  },
  {
    id: 105, // 105
    name: "Singavel Kundram (Ahobilam)",
    description: "Lakshmi and Prahlada Varada Narasimha swamy. This is believed to be the site where Narasimha appeared to protect his devotee Prahlada. The giant massive pillar from which he appeared is called Ugra Stambha, and one can still see it. Here, Narasimha appears in nine different forms; these re collectively called Nava Narasimha.",
    lat: 15.34099,
    lng: 79.15329,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Upper_Ahobilam_temple_Gopuram.jpg/250px-Upper_Ahobilam_temple_Gopuram.jpg"
  },
  {
    id: 106, // 106
    name: "Thiruvenkadam",
    description: "Padmavati and Srinivasa Perumal. Vishnu, in his form as Srinivasa, married Padmavati, the mortal princess avatar of Lakshmi, at this temple. One of the most famous Vaishnavite pilgrimage sites in India, this temple is also one of the richest temples in India in terms of wealth.",
    lat: 13.83393,
    lng: 79.40872,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Tirumala_Venkateswara_temple_entrance_09062015.JPG/250px-Tirumala_Venkateswara_temple_entrance_09062015.JPG"
  },
  {
    id: 107, // 107
    name: "Tirupparkatal (Kshira Sagara)",
    description: "Kadal Magal and Parkadal Natha Perumal. This Divya Desam is not located on Earth. But the divine essence of this ocean is believed to be present in these temples - Prasanna Venkatesa Perumal Temple, Perumal Koil Street, District Vellore, Walaja Taluk, Tirupparkatal, Tamil Nadu, India",
    lat: 0.0,
    lng: 0.0,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Vishnu_and_Lakshmi_on_Shesha_Naga%2C_ca_1870.jpg/250px-Vishnu_and_Lakshmi_on_Shesha_Naga%2C_ca_1870.jpg"
  },
  {
    id: 108, // 108
    name: "Tirupparamapadam (Vaikuntha)",
    description: "Paramapada Nayaki and Paramapada Nathan. This Divya Desam is not located on Earth. Vaikuntha is the abode of Vishnu and Lakshmi. While the first 106 Divya Desams are believed to be mortal replicas of Vaikuntha, this is the Vaikuntha situated upon the spiritual sky (Paravyoma).",
    lat: 0.0,
    lng: 0.0,
    tags: ["Divya Desam", "Temple"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Picture_of_Vaikunda_-_Garuda_eagle_is_the_vehicle_of_Vishnu.jpg/250px-Picture_of_Vaikunda_-_Garuda_eagle_is_the_vehicle_of_Vishnu.jpg"
  },
];
