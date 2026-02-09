import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Nipporia",
  description: "Nipporiaのサービス利用規約についてご説明します。",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          利用規約
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第1条（適用）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              本規約は、当社が提供するすべてのサービス（以下「本サービス」といいます）の利用条件を定めるものです。ユーザーの皆様には、本規約に従って本サービスをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第2条（サービス内容）
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              当社は以下のサービスを提供します：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Webサイトの企画・デザイン・開発</li>
              <li>SEO対策およびWebマーケティング支援</li>
              <li>Webサイトの保守・運用サポート</li>
              <li>Google広告運用代行</li>
              <li>その他付随するサービス</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第3条（契約の成立）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              サービス契約は、お客様からのお申し込みに対し、当社が承諾の意思表示をした時点で成立するものとします。契約内容は、別途締結する個別契約書または見積書に記載された内容に従います。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第4条（料金および支払い）
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              サービス料金は、個別契約書または見積書に記載された金額とします。支払い条件は以下の通りです：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>初期制作費用：契約時に50%、納品時に50%</li>
              <li>月額サポート費用：毎月末締め、翌月末払い</li>
              <li>支払い方法：銀行振込またはクレジットカード決済</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第5条（禁止事項）
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社のサービス運営を妨害する行為</li>
              <li>虚偽の情報を提供する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第6条（知的財産権）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              本サービスにより制作された成果物の著作権は、料金の全額支払い完了後にお客様に帰属します。ただし、当社が独自に開発したプログラムやライブラリについては、当社に帰属するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第7条（免責事項）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、本サービスに関して、その完全性、正確性、確実性、有用性等について、いかなる保証も行いません。また、お客様が本サービスを利用したことにより生じた損害について、当社の故意または重大な過失による場合を除き、責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第8条（契約の解除）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、お客様が本規約に違反した場合、事前の通知なく契約を解除することができます。この場合、既に支払われた料金の返金は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第9条（規約の変更）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              第10条（準拠法・管轄裁判所）
            </h2>
            <p className="text-gray-600 leading-relaxed">
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <div className="text-right text-gray-500 text-sm pt-8 border-t border-gray-200">
            <p>制定日：2025年1月1日</p>
            <p>最終更新日：2025年2月1日</p>
          </div>
        </div>
      </div>
    </main>
  );
}