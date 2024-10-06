import { useSelector } from "react-redux";
import { LANG_PHRASE } from "../utils/constants";

const GptSearch = () => {
  const lang_show = useSelector((store) => store.language.lang);

  return (
    <div className="pt-[10%]">
      <form className="bg-gray-950 grid grid-cols-12 w-[50%] p-2 m-auto rounded">
        <input
          className="p-2 border border-gray-400 bg-white rounded col-span-8 mr-2"
          type="text"
          placeholder={LANG_PHRASE[lang_show].placeholder}
        />
        <input
          className="p-2 border bg-gray-800 text-white rounded col-span-4 cursor-pointer"
          type="button"
          value={LANG_PHRASE[lang_show].search}
        />
      </form>
    </div>
  );
};

export default GptSearch;
