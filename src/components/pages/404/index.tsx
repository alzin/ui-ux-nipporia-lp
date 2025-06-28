import Link from "next/link";

const Index: React.FC = () => {
  return (
    <section className="relative w-full py-20 text-center px-5 h-[calc(100vh-60px)] flex items-center justify-center">
      <div>
        <h1 className="text-9xl text-[#D51A16] font-bold">404</h1>
        <p className="text-[16px] lg:text-[25px] font-normal">
          お探しのページが見つかりませんでした。
          <br />
          <Link href="/" className="text-[#D51A16] underline text-nowrap">
            ホームに戻る
          </Link>
          。
        </p>
      </div>
    </section>
  );
};

export default Index;
