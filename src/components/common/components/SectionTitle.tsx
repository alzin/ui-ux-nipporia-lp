interface ISectionTitleProps {
  title: string;
  description?: string;
}

const SectionTitle = ({ title, description }: ISectionTitleProps) => {
  return (
    <>
      <h2
        className={`animate-slide text-[clamp(2rem,4vw,3rem)] text-center font-bold relative animate-titleGlow after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[100px] after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded after:animate-[lineExpand_2s_ease_infinite] ${
          description ? "mb-[-1rem]" : "mb-16"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="animate-slide text-center text-[1.3rem] text-gray my-12">
          {description}
        </p>
      )}
    </>
  );
};

export default SectionTitle;
