const LoadingPage = () => {
  return (
    <div className="p-4 m-4 rounded flex justify-center items-center">
      <p className="text-lg hidden">Loading ...!</p>
      <div className="animate-ping border border-gray-500 bg-gray-800 rounded-full w-5 h-5"></div>
    </div>
  );
};

export default LoadingPage;
