import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Nipporia",
  description: "特定商取引法に基づく表記についてご説明します。",
};

export default function CommerceDisclosurePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-lavender pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50 w-1/3 rounded-l-lg">
                    販売事業者名
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    Nipporia（ニッポリア）
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    代表者
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    アルジンムハンマドガイス
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    所在地
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    埼玉県久喜市久喜中央1丁目
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    電話番号
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    (+81) 070-8905-8857
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    メールアドレス
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    info@nipporia.com
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    サービス提供価格
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <p className="mb-2">【初期制作費用】</p>
                    <p className="mb-4">¥1,000,000〜¥3,000,000（税込）</p>
                    <p className="mb-2">【月額サポート費用】</p>
                    <p>Basic: ¥250,000/月（税込）</p>
                    <p>Growth: ¥350,000/月（税込）</p>
                    <p>Enterprise: ¥500,000/月（税込）</p>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    サービス提供価格以外に必要な費用
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <ul className="list-disc list-inside space-y-1">
                      <li>ドメイン取得・維持費用（実費）</li>
                      <li>サーバー利用料（実費）</li>
                      <li>外部サービス利用料（実費）</li>
                      <li>銀行振込手数料（お客様負担）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    支払方法
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <ul className="list-disc list-inside space-y-1">
                      <li>銀行振込</li>
                      <li>クレジットカード決済（Stripe）</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    支払時期
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <p className="mb-2">【初期制作費用】</p>
                    <p className="mb-4">契約時に50%、納品時に50%</p>
                    <p className="mb-2">【月額サポート費用】</p>
                    <p>毎月末締め、翌月末払い</p>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    サービス提供時期
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    契約成立後、別途定める納期までに提供いたします。<br />
                    通常、初期制作は1〜3ヶ月程度を要します。
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50">
                    返品・キャンセルについて
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <p className="mb-2">【制作開始前】</p>
                    <p className="mb-4">契約締結後7日以内であれば、全額返金いたします。</p>
                    <p className="mb-2">【制作開始後】</p>
                    <p className="mb-4">制作進捗に応じた費用をご請求いたします。</p>
                    <p className="mb-2">【月額サポート】</p>
                    <p>解約希望月の前月末までにお申し出ください。</p>
                  </td>
                </tr>
                <tr>
                  <th className="py-4 px-4 text-left text-gray-800 font-bold bg-purple-50 rounded-bl-lg">
                    動作環境
                  </th>
                  <td className="py-4 px-4 text-gray-600">
                    <p className="mb-2">【推奨ブラウザ】</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Google Chrome（最新版）</li>
                      <li>Safari（最新版）</li>
                      <li>Firefox（最新版）</li>
                      <li>Microsoft Edge（最新版）</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-right text-gray-500 text-sm pt-8 mt-8 border-t border-gray-200">
            <p>制定日：2025年1月1日</p>
            <p>最終更新日：2025年2月1日</p>
          </div>
        </div>
      </div>
    </main>
  );
}