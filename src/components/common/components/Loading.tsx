import "@/styles/loader.css"

const Loading = () => {
    return (
        <section className="w-full h-[calc(100vh-60px)] flex items-center justify-center bg-gradient-to-br from-cream via-peach to-lavender">
            <span className="loader"></span>
        </section>
    )
};

export default Loading;