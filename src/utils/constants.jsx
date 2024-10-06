export const USER_AVATAR =
  "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRhunw1-HwxU3HlvmFM9UycO_VOxatA9nWQ4aaCKTCxOVOv5OchUTFO6RJznhN4G2scAmgXUpHzkkVdq9_8f9ui0RksluPFA3w.png?r=229";

export const BODY_BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_LINK =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=";

export const API_KEY = import.meta.env.VITE_YT_API_KEY;

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "हिन्दी" },
  { identifier: "telugu", name: "తెలుగు" },
  { identifier: "tamil", name: "தமிழ்" },
];

export const LANG_PHRASE = {
  en: {
    search: "Search",
    placeholder: "What do you like to watch today?",
    GptSearchBtn: "GPT Search",
    signOutBtn: "Sign Out",
  },
  hindi: {
    search: "खोज",
    placeholder: "आज आप क्या देखना पसंद करते हैं?",
    GptSearchBtn: "GPT खोज",
    signOutBtn: "साइन आउट",
  },
  telugu: {
    search: "శోధించండి",
    placeholder: "మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?",
    GptSearchBtn: "GPT శోధించండి",
    signOutBtn: "సైన్ అవుట్",
  },
  tamil: {
    search: "தேடு",
    placeholder: "இன்று நீங்கள் எதைப் பார்க்க விரும்புகிறீர்கள்?",
    GptSearchBtn: "GPT தேடல்",
    signOutBtn: "வெளியேறு",
  },
};

export const OPENAI_API_KEY = import.meta.env.VITE_API_KEY;
