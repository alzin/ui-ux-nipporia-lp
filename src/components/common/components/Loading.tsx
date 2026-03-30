// import "@/styles/loader.css"

const Loading = () => {
  return (
    <section className="w-full h-[calc(100vh-60px)] flex items-center justify-center bg-gradient-to-br from-cream via-peach to-lavender">
      <span className="relative inline-block w-[100px] h-[100px] rounded-full box-border border-solid border-t-[7px] border-r-[7px] border-t-[#555] border-r-transparent animate-spin after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:box-border after:border-solid after:border-l-[7px] after:border-b-[7px] after:border-l-[#8B5CF6] after:border-b-transparent after:animate-[spin_0.5s_linear_infinite_reverse]"></span>
    </section>
  );
};

export default Loading;