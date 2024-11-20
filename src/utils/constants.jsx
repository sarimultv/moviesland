export const USER_AVATAR = "./userPicture.jpg";

export const BODY_BG_IMG = "./backgroundImg.jpg";

export const LOGO = "./logo.jpg";

export const API_LINK =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=";

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
    geminiSearchBtn: "Gemini Search",
    signOutBtn: "Sign Out",
    homeBtn: "Home",
  },
  hindi: {
    search: "खोज",
    placeholder: "आज आप क्या देखना पसंद करते हैं?",
    geminiSearchBtn: "gemini खोज",
    signOutBtn: "साइन आउट",
    homeBtn: "घर",
  },
  telugu: {
    search: "శోధించండి",
    placeholder: "మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?",
    geminiSearchBtn: "gemini శోధించండి",
    signOutBtn: "సైన్ అవుట్",
    homeBtn: "ఇళ్లు",
  },
  tamil: {
    search: "தேடு",
    placeholder: "இன்று நீங்கள் எதைப் பார்க்க விரும்புகிறீர்கள்?",
    geminiSearchBtn: "gemini தேடல்",
    signOutBtn: "ஸாஇந ஆஉட",
    homeBtn: "சொந்த வீடு",
  },
};

export const API_KEY = import.meta.env.VITE_YT_API_KEY;
export const GOOGLE_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const FB_API_KEY = import.meta.env.VITE_FB_API_KEY;
