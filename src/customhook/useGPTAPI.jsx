import openai from "../utils/googleGemini";

const useGPTAPI = (searchText) => {
  const gptQuery =
    "work as a movie suggestion system for the query ahead: " +
    searchText.current.value +
    ". Only suggest 5 movies with comma separation like example Andaaz Apna Apna, 3 idiots, Munna Bhai MBBS";

  const handleSearchBtn = async () => {
    console.log(searchText.current.value);

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResults.choices);
  };
};

export default useGPTAPI;
