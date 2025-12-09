import Image from "next/image";
import { CheckCircle, Star, MessageCircle, BookOpen, Users, ArrowRight, Menu, X, Frown, CircleHelp, TrendingDown } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Header */}
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left z-10">
            <div className="inline-block bg-yellow-300 text-yellow-900 font-bold px-4 py-1 rounded-full text-sm md:text-base mb-2 animate-bounce">
              小学生の保護者様へ
            </div>
            <h1 className="text-[1.7rem] sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 tracking-tight">
              <span className="whitespace-nowrap">英語が苦手な子でも</span><br />
              <span className="whitespace-nowrap"><span className="text-primary">「自信」</span>を育てて</span><br />
              <span className="whitespace-nowrap"><span className="text-primary">「英検合格」</span>を手に入れる</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              自己肯定感が上がる英検対策コース。<br />
              二次試験合格率100%の実績で、<br className="md:hidden" />お子様の「できた！」を引き出します。
            </p>
            <div className="pt-4">
              <a
                href="https://lin.ee/LF8WT5R"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base md:text-xl font-bold py-3 px-4 md:py-4 md:px-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full md:w-auto whitespace-nowrap"
              >
                LINE登録で「合格3大特典」を受け取る
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <p className="text-xs text-gray-500 mt-2">※無理な勧誘は一切ありません</p>
            </div>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Hero Image Slider */}
              <HeroSlider images={["/images/lpfv1.jpg", "/images/lpfv2.jpg", "/images/lpfv3.jpg"]} />

              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-yellow-400 flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold">英検二次試験</p>
                  <p className="text-xl font-bold text-gray-900">合格率 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-100/50 -skew-x-12 translate-x-20 -z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/30 rounded-full blur-3xl -z-0" />
      </section>

      {/* Problem Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            こんな<span className="text-orange-600">お悩み</span>ありませんか？
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { text: "「勉強しなさい！」と毎日怒ってばかりで疲れる...", icon: <Frown size={48} className="text-orange-500 mx-auto" /> },
              { text: "英会話教室に通っているのに、なかなか上達しない", icon: <CircleHelp size={48} className="text-blue-500 mx-auto" /> },
              { text: "子供に自信がなく、英語に対して苦手意識がある", icon: <TrendingDown size={48} className="text-gray-500 mx-auto" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-gray-200 hover:border-primary transition-colors text-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-white border-2 border-primary text-primary font-bold px-8 py-4 rounded-xl shadow-lg text-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                Yuma English Houseなら
              </div>
              そのお悩み、すべて解決できます！
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="reason" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase">Our Method</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              選ばれる<span className="text-primary">3つの理由</span>
            </h2>
          </div>

          <div className="space-y-20 max-w-5xl mx-auto">
            {/* Reason 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/lpfv3.jpg"
                    alt="コーチング指導"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    unoptimized
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  否定しない「コーチング指導」
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  「間違えたらどうしよう」という不安を取り除きます。小さな成功を見逃さずに褒めることで、お子様の自己肯定感を高め、自ら学ぶ意欲を引き出します。
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-1">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  二次試験合格率100%の実績
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  小学生には難しい面接対策も、独自の攻略法でバッチリ対策。入室から退室までのマナーも含め、自信を持って話せるようになるまで徹底サポートします。
                </p>
              </div>
              <div className="order-2">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/reason2.jpg"
                    alt="合格実績"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/reason3.jpg"
                    alt="オーダーメイド学習"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    unoptimized
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  完全オーダーメイドのカリキュラム
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  お子様の性格や現在のレベルに合わせて、最適な学習プランを作成。集団塾ではできない、一人ひとりに寄り添ったきめ細やかな指導を行います。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voice" className="py-12 md:py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
            保護者様の<span className="text-primary">喜びの声</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 font-bold py-1 px-3 rounded-lg shadow-sm">
                小4男子の母
              </div>
              <p className="text-gray-700 mb-4 pt-2">
                「英語なんて大嫌い！」と言っていた息子が、先生のおかげで「英語楽しい！」に変わりました。英検4級にも一発合格できて、本当に自信がついたようです。
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md relative">
              <div className="absolute -top-4 -left-4 bg-yellow-400 text-yellow-900 font-bold py-1 px-3 rounded-lg shadow-sm">
                小6女子の母
              </div>
              <p className="text-gray-700 mb-4 pt-2">
                面接練習がとても丁寧で、本番も緊張せずに話せたそうです。先生がいつもポジティブに励ましてくれるので、娘も安心して通っています。
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
                <Star className="fill-current" size={16} />
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["5級合格", "4級合格", "3級合格", "準2級合格", "2級合格", "準1級対応"].map((badge, i) => (
              <span key={i} className="bg-white border border-primary/30 text-primary px-4 py-2 rounded-full font-bold shadow-sm">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="teacher" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row gap-10 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative shrink-0">
              <Image
                src="/images/teacher.jpg"
                alt="Yuma先生"
                fill
                className="object-cover rounded-full border-4 border-white shadow-md"
                unoptimized
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white text-orange-600 font-bold px-4 py-1 rounded-full text-sm mb-4 shadow-sm">
                講師紹介
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Yuma先生
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                「英語が嫌い」「自信がない」そんなお子様こそ、私にお任せください。
                <br /><br />
                私自身も昔は英語が苦手でしたが、正しい学習法と「できた！」という小さな成功体験の積み重ねで克服しました。
                <br />
                Yuma English Houseでは、単なる英語指導だけでなく、お子様の<span className="font-bold text-orange-600">「自己肯定感」</span>を育てることを大切にしています。一緒に「合格」の喜びを分かち合いましょう！
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-16">
            受講までの<span className="text-primary">流れ</span>
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10" />

            {[
              { step: "STEP 01", title: "LINE登録", desc: "まずは公式LINEに登録して、無料特典をお受け取りください。", icon: <MessageCircle size={32} /> },
              { step: "STEP 02", title: "無料相談", desc: "LINEから簡単に予約できます。お子様の現状や目標をお聞かせください。", icon: <Users size={32} /> },
              { step: "STEP 03", title: "体験レッスン", desc: "実際のレッスンを体験。教室の雰囲気や指導法をチェック！", icon: <BookOpen size={32} /> },
              { step: "STEP 04", title: "受講スタート", desc: "気に入っていただけたら入会。目標に向かって一緒に頑張りましょう！", icon: <CheckCircle size={32} /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center relative">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  {item.icon}
                </div>
                <div className="text-orange-500 font-bold text-sm mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
            よくある<span className="text-primary">ご質問</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "オンラインでの受講は可能ですか？", a: "はい、可能です。Zoomを使用したオンラインレッスンにも対応しておりますので、遠方の方や送迎が難しい方でも安心してご受講いただけます。" },
              { q: "うちの子は人見知りですが、大丈夫でしょうか？", a: "ご安心ください。Yuma English Houseはマンツーマンまたは少人数制で、アットホームな雰囲気を大切にしています。お子様のペースに合わせて優しく指導いたします。" },
              { q: "レッスンの振替はできますか？", a: "はい、前日までにご連絡いただければ振替可能です。急な体調不良などの場合も柔軟に対応させていただきますのでご相談ください。" },
              { q: "英検以外の英語学習もできますか？", a: "基本的には英検対策に特化していますが、学校の授業のフォローや英会話の基礎なども、ご要望に合わせてカリキュラムに組み込むことが可能です。" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex gap-4 items-start">
                  <span className="bg-primary text-white font-bold rounded px-2 py-1 shrink-0">Q</span>
                  <h3 className="font-bold text-lg text-gray-900">{item.q}</h3>
                </div>
                <div className="p-6 bg-orange-50/30 flex gap-4 items-start">
                  <span className="text-orange-600 font-bold px-2 py-1 shrink-0">A</span>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 md:py-24 bg-gradient-to-br from-primary to-yellow-600 text-white relative overflow-hidden">
        {/* Confetti/Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)',
          backgroundSize: '24px 24px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-orange-600 text-white font-bold px-6 py-2 rounded-full mb-6 shadow-lg animate-bounce">
            ＼ 今だけ無料！ ／
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight drop-shadow-lg">
            まずは無料で<br />
            <span className="text-white drop-shadow-md bg-orange-500/80 px-2 rounded-lg inline-block mt-2">「合格の秘訣」</span>を受け取ってください
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-95 font-medium">
            公式LINEに登録するだけで、<br className="md:hidden" />今すぐ使える<span className="text-yellow-200 font-bold text-2xl">3大特典</span>をプレゼント！
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { title: "小学生向け\n英検スピーキング\n完全攻略ブック", icon: <BookOpen size={48} />, label: "PDF冊子" },
              { title: "魔法の\nフォニックス\nチャート", icon: <Users size={48} />, label: "ポスター" },
              { title: "完全オーダーメイド\n学習ロードマップ\n作成", icon: <CheckCircle size={48} />, label: "個別相談" },
            ].map((gift, index) => (
              <div key={index} className="relative group">
                {/* Gift Box Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white text-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center h-full transform transition-transform duration-300 group-hover:-translate-y-2 border-4 border-yellow-300">
                  <div className="absolute -top-5 bg-orange-600 text-white font-bold px-4 py-1 rounded-full shadow-md text-sm">
                    PRESENT {index + 1}
                  </div>
                  <div className="bg-orange-100 text-orange-600 p-6 rounded-full mb-6 shadow-inner">
                    {gift.icon}
                  </div>
                  <div className="text-xs font-bold text-gray-400 mb-2 border border-gray-300 px-2 py-0.5 rounded">{gift.label}</div>
                  <h3 className="font-bold text-xl whitespace-pre-line leading-snug text-gray-900">
                    {gift.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-white rounded-full blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
            <a
              href="https://lin.ee/LF8WT5R"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white text-lg md:text-3xl font-bold py-4 px-8 md:py-6 md:px-12 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all transform hover:scale-105 w-full md:w-auto"
            >
              {/* Shimmer Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>

              <MessageCircle className="w-10 h-10 md:w-12 md:h-12" />
              <div className="text-left leading-tight">
                <div className="text-sm md:text-base font-normal opacity-90">＼ 1分で完了！ ／</div>
                LINEで特典を受け取る
              </div>
            </a>
          </div>
          <p className="mt-6 text-sm md:text-base opacity-90 font-medium">
            ※登録後、<span className="text-yellow-300 underline decoration-2 underline-offset-4">すぐに</span>特典が届きます。ブロックもいつでも可能です。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-2">Yuma English House</div>
              <p>〒416-0949 静岡県富士市森下53-16</p>
              <p className="mt-1">代表名：竹内裕馬</p>
              <p className="mt-2">小学生専門 / 英検対策 / コーチング</p>
            </div>

          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Yuma English House. All Rights Reserved. (v1.0.2)
          </div>
        </div>
      </footer>
    </div>
  );
}
