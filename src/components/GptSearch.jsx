import { useSelector } from "react-redux";
import { LANG_PHRASE } from "../utils/constants";
import { useRef } from "react";
import openai from "../utils/openai";

const GptSearch = () => {
  const searchText = useRef(null);
  const lang_show = useSelector((store) => store.language.lang);

  const handleSearchBtn = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "work as a movie suggestion system for the query ahead: " +
      searchText.current.value +
      ". Only suggest 5 movies with comma separation like example Andaaz Apna Apna, 3 idiots, Munna Bhai MBBS";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[10%]">
      <form className="bg-gray-950 grid grid-cols-12 w-[50%] p-2 m-auto rounded">
        <input
          ref={searchText}
          className="p-2 border border-gray-400 bg-white rounded col-span-10 mr-2"
          type="text"
          placeholder={LANG_PHRASE[lang_show].placeholder}
        />
        <input
          className="p-2 border bg-gray-800 text-white rounded col-span-2 cursor-pointer hover:bg-gray-900"
          type="button"
          value={LANG_PHRASE[lang_show].search}
          onClick={handleSearchBtn}
        />
      </form>
    </div>
  );
};

export default GptSearch;
