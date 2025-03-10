const imgPath = "/assets/members";
const members = [
  {
    img: `${imgPath}/rings.jpeg`,
    firstname: "ring",
    lastname: "abu",
    team: "Founder",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/usmanniazi99",
      instagram: "https://intagram.com/_usmanniazi",
      linkedIn: "https://linkedin.com/in/usmanniazi99",
    },
  },
  {
    img: `${imgPath}/Muzzammil.jpg`,
    firstname: "Muhammad",
    lastname: "Muzzammil",
    team: "Computer Science",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/haiderali",
      instagram: "https://www.instagram.com/haideralispeaks/",
      linkedIn: "https://www.linkedin.com/in/haideralispeaks/",
    },
  },
  {
    img: `${imgPath}/UsmanWaris.jpeg`,
    firstname: "Usman",
    lastname: "Waris",
    team: "Computer Science",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/usman.waris.127",
      instagram: "https://intagram.com/u.s.m.a.n__waris",
      linkedIn: "https://www.linkedin.com/in/usman-waris-46a77b1b5/",
    },
  },
  {
    img: `${imgPath}/muaz.jpg`,
    firstname: "Muaz",
    lastname: "Ahmad",
    team: "Cyber Security",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/MUAZ787",
      instagram: "https://intagram.com/muaz_787",
      linkedIn: "https://linkedin.com/in/muaz-ahmad-917184239/",
    },
  },
  {
    img: `${imgPath}/graph.png`,
    firstname: "Noor",
    lastname: "Fatima",
    team: "Cyber Security",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com",
      instagram: "https://intagram.com",
      linkedIn: "https://linkedin.com",
    },
  },

  {
    img: `${imgPath}/amama.jpg`,
    firstname: "Amama",
    lastname: "Fatima",
    team: "Founder",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/usmanniazi99",
      instagram: "https://intagram.com/_usmanniazi",
      linkedIn: "https://linkedin.com/in/usmanniazi99",
    },
  },
  {
    img: `${imgPath}/daoud.jpg`,
    firstname: "Daoud",
    lastname: "Hussain",
    team: "FrontEnd Developer",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/nadan.daoud",
      instagram: "https://www.instagram.com/daoud_huxxain/",
      linkedIn: "https://www.linkedin.com/in/daoud-hussain/",
    },
    img: `${imgPath}/AbdurRehman.jpg`,
    firstname: "Abdur",
    lastname: "Rehman",
    team: "Founder",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com",
      instagram: "https://intagram.com",
      linkedIn: "https://linkedin.com/in/abdur-rehman-ab0394247",
    },
  },
  {
    img: `${imgPath}/abubakarsattar.jpg`,
    firstname: "Abubakar",
    lastname: "Sattar",
    team: "Co-founder",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/",
      instagram: "https://intagram.com/",
      linkedIn: "https://linkedin.com/in/",
    },
  },
  {
    img: `${imgPath}/todoroki.png`,
    firstname: "Shadow",
    lastname: "Monarch",
    team: "Shadow World",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com",
      instagram: "https://intagram.com",
      linkedIn: "https://www.linkedin.com/in/muhammad-i-b89a47136/",
    },
  },
  {
    img: `${imgPath}/mahrukh.jpeg`,
    firstname: "Mahrukh",
    lastname: "Khan",
    team: "Machine Lerning|Game development|Ducks",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/lynxmaho",
      instagram: "https://www.instagram.com/taciturn.thing/?next=%2F",
      linkedIn: "https://www.linkedin.com/in/mahrukh-khan-85a2711b3",
    },
  },
  {
    img: `${imgPath}/Ahtisham.jpeg`,
    firstname: "Muhammad",
    lastname: "Ahtisham",
    team: "Data Engineering",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/profile.php?id=100011985731904",
      instagram: "https://intagram.com/_ahtii/",
      linkedIn: "www.linkedin.com/in/mu-ahtisham",
    },
  },
  {
    img: `${imgPath}/Adil.jpg`,
    firstname: "Adil",
    lastname: "Feroze",
    team: "NASA Hackers",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/prince.adil.56679",
      instagram: "https://www.instagram.com/adil_feroze/",
      linkedIn: "https://www.linkedin.com/in/adil-feroze-242a99253/",
    },
  },
  {
    img: `${imgPath}/Waheed.jpg`,
    firstname: "Abdul",
    lastname: "Waheed",
    team: "Web Developer",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/captainWaheed43",
      instagram: "https://www.instagram.com/captain_waheed_",
      linkedIn: " https://www.linkedin.com/in/abdul-waheed781/",
    },
  },
  {
    img: `${imgPath}/haider.jpg`,
    firstname: "Haider",
    lastname: "Ali",
    team: "MLSA Beta Ambassador, GDSC Content-Lead",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/haiderali",
      instagram: "https://www.instagram.com/haideralispeaks/",
      linkedIn: "https://www.linkedin.com/in/haideralispeaks/",
    },
  },
  {
    img: `${imgPath}/samar.jpeg`,
    firstname: "Samar",
    lastname: "Ali",
    team: "Tech Lead",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/samarali578/",
      linkedIn: "https://www.linkedin.com/in/samarali187/",
    },
  },
  {
    img: `${imgPath}/zubair.jpeg`,
    firstname: "Zubair",
    lastname: "Naeem",
    team: "Flutter",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/profile.php?id=100011336683185",
      instagram: "https://www.instagram.com/zubair____31/",
      linkedIn: "https://www.linkedin.com/in/zubair-naeem-8037b6237",
    },
  },
  {
    img: `${imgPath}/avatar.jpg`,
    firstname: "Swaira",
    lastname: "Rufqan",
    team: "Frontend Developer",
    city: "Lahore",
    socialUrls: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedIn: "https://www.linkedin.com/",
    },
  },
  {
    img: `${imgPath}/Abuzar.jpg`,
    firstname: "Muhammad",
    lastname: "Abuzar",
    team: "Frontend Developer",
    city: "Bahawalpur",
    socialUrls: {
      facebook: "https://www.facebook.com/abuzariiii/",
      instagram: "https://www.instagram.com/abuzariii",
      linkedIn: "https://www.linkedin.com/in/abuzariii/",
    },
  },
{
    img: `${imgPath}/UmarHassanMalik.png`,
    firstname: "Umar Hassan",
    lastname: "Malik",
    team: "Cloud Engineer",
    city: "Islamabad",
    socialUrls: {
      facebook: "https://www.facebook.com/umarhassanmalik10",
      instagram: "https://www.instagram.com/umar_hassan_malik/",
      linkedIn: "https://www.linkedin.com/in/umar-hassan-malik-52b65919a/",
    },
  },
    img: `${imgPath}/profile.jepg`,
    firstname: "Waheed Ahmad",
    lastname: "Khan",
    team: "MERN Stack Developer",
    city: "Peshawar",
    socialUrls: {
      facebook: "https://www.facebook.com/waheed.ahmad.370177",
      instagram: "https://www.instagram.com/waheed_a_khan",
      linkedIn: "https://www.linkedin.com/in/waheed-ahmad-khan-3570491ba/",
    },
  }
];

export default members;
