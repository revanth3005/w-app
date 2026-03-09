// ═══════════════════════════════════════════════════════
// Wedding Configuration — Revanth & Ujwala
// Edit this file to update all wedding details
// ═══════════════════════════════════════════════════════

export const weddingConfig = {
  couple: {
    bride: {
      name: "Vallala Ujwala",
      nameTelugu: "",
      photo: null, // Add path: "/images/bride.jpg"
    },
    groom: {
      name: "Neelam Sai Revanth",
      nameTelugu: "",
      photo: null, // Add path: "/images/groom.jpg"
    },
    // Parents — fill in when ready
    brideFamily: {
      father: "Vallala Venkatesh",
      fatherTelugu: "వెంకటేష్",
      mother: "Vallala Sharadha",
      motherTelugu: "శారద",
      gotram: "Gotram",
      gotramTelugu: "గోత్రం",
    },
    groomFamily: {
      father: "Neelam Prasad Rao",
      fatherTelugu: "నీలం ప్రసాద్ రావు",
      mother: "Neelam Vijaya Laxmi",
      motherTelugu: "నీలం విజయ లక్ష్మి",
      gotram: "Gotram",
      gotramTelugu: "గోత్రం",
    },
  },

  events: {
    engagement: {
      id: "engagement",
      title: "Engagement",
      titleTelugu: "నిశ్చితార్థం",
      emoji: "💍",
      date: "2026-03-06T08:30:00",
      displayDate: "March 6th, 2026",
      displayDateTelugu: "మార్చి 6, 2026",
      time: "8:30 AM",
      muhurtam: "8:30 AM - 9:00 AM",
      venue: {
        name: "YSN Function Hall, Aler",
        nameTelugu: "",
        address:
          "YSN Function Hall, Aler, Yadadri Bhuvanagiri District, Telangana",
        mapUrl: "https://maps.app.goo.gl/UesVpj9KRoYyuiLB8",
        lat: 17.6012,
        lng: 78.5928,
      },
      rituals: [
        { name: "Ring Exchange", nameTelugu: "ఉంగరాల మార్పిడి", icon: "💍" },
        { name: "Var Puja", nameTelugu: "వరపూజ", icon: "🪔" },
        { name: "Pelli Choopulu", nameTelugu: "పెళ్ళి చూపులు", icon: "👀" },
      ],
      dressCode: "Traditional",
      dressCodeTelugu: "సంప్రదాయ దుస్తులు",
    },

    marriage: {
      id: "marriage",
      title: "Marriage",
      titleTelugu: "పెళ్ళి",
      emoji: "🪔",
      date: "2026-04-02T20:00:00",
      displayDate: "April 2nd, 2026",
      displayDateTelugu: "ఏప్రిల్ 2, 2026",
      time: "8:00 PM",
      muhurtam: '8:00 PM - 8:30 PM',
      venue: {
        name: "ANR Gardens & Function Hall, Aler",
        nameTelugu: "",
        address:
          "ANR Gardens & Function Hall, Aler, Yadadri Bhuvanagiri District, Telangana",
        mapUrl: "https://maps.app.goo.gl/rqLLB749z2XA8UKR8",
        lat: 17.6012,
        lng: 78.5928,
      },
      rituals: [
        { name: "Mangala Snanam", nameTelugu: "మంగళ స్నానం", icon: "🛁" },
        { name: "Kashi Yatra", nameTelugu: "కాశీ యాత్ర", icon: "🚶" },
        { name: "Kanyadaanam", nameTelugu: "కన్యాదానం", icon: "🙏" },
        { name: "Jeelakarra Bellam", nameTelugu: "జీలకర్ర బెల్లం", icon: "🌿" },
        { name: "Talambralu", nameTelugu: "తలంబ్రాళు", icon: "🍚" },
        {
          name: "Mangalsutra Dharana",
          nameTelugu: "మంగళసూత్ర ధారణ",
          icon: "📿",
        },
        { name: "Saptapadi", nameTelugu: "సప్తపది", icon: "👣" },
      ],
      dressCode: "Traditional",
      dressCodeTelugu: "",
    },

    reception: {
      id: "reception",
      title: "Reception",
      titleTelugu: "రిసెప్షన్",
      emoji: "🎉",
      date: "2026-04-04T20:00:00",
      displayDate: "April 4th, 2026",
      displayDateTelugu: "ఏప్రిల్ 4, 2026",
      time: "8:00 PM",
      muhurtam: null,
      venue: {
        name: "VKR Convention Hall, Kalluru",
        nameTelugu: "",
        address: "VKR Convention Hall, Kalluru, Telangana",
        mapUrl: "https://maps.app.goo.gl/LbRECjonkrE1KQdx7",
        lat: 17.55,
        lng: 78.6,
      },
      rituals: [],
      dressCode: "Grand / Party Wear",
      dressCodeTelugu: "ఘనంగా",
    },
  },

  theme: {
    primary: "#8B2040",
    gold: "#D4A537",
    cream: "#F0E6D0",
    darkGreen: "#1B6B4A",
    accent: "#E8B530",
    darkBg: "#06040A",
  },
};
