import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Nipporia",
  description: "Nipporiaのプライバシーポリシーについてご説明します。",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          プライバシーポリシー
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              1. 個人情報の収集について
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当サイトでは、お問い合わせフォームをご利用いただく際に、お名前、メールアドレス、会社名等の個人情報をご入力いただいております。これらの情報は、お問い合わせへの対応およびサービスの提供のために使用いたします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              2. 個人情報の利用目的
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>お問い合わせへの回答</li>
              <li>サービスの提供・改善</li>
              <li>新サービスや更新情報のご案内</li>
              <li>契約・請求に関するご連絡</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              3. 個人情報の第三者提供
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、業務委託先に対して必要な範囲で提供する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              4. 個人情報の管理
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、お客様の個人情報を正確かつ最新の状態に保ち、不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等、必要な措置を講じます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              5. Cookieの使用について
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当サイトでは、ユーザー体験の向上およびアクセス解析のためにCookieを使用しています。ブラウザの設定によりCookieを無効にすることも可能ですが、一部のサービスが正常に機能しない場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              6. お問い合わせ窓口
            </h2>
            <p className="text-gray-600 leading-relaxed">
              個人情報の取扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-purple-500 pl-4">
              7. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-600 leading-relaxed">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
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