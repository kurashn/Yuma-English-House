import Image from "next/image";
import { CheckCircle, MessageCircle, BookOpen, Users, ArrowRight, Frown, CircleHelp, TrendingDown, ChevronDown, MapPin, Quote } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/components/Header";
import { CTA_LABEL, HP_URL, HP_VOICES_URL, LINE_URL, MAP_URL, SCHOOL_ADDRESS } from "@/lib/site";

// 掲載している事実は、すべて竹内さんのHP（yuma-english.com の「英検対策コース」「私たちについて」「よくあるご質問」「受講生様・保護者様の声」）から取っている。
// 「|」で区切った言葉のまとまりごとに折り返す（日本語が言葉の途中で改行されないように）
function Phrases({ text }: { text: string }) {
  return <>{text.split("|").map((part, i) => <span key={i} className="inline-block">{part}</span>)}</>;
}

const HERO_FACTS = ["対面・オンライン", "週1回レッスン", "小2ごろ〜高校生"];

const VOICES = [
  {
    label: "小学6年生・英検準2級 合格",
    who: "保護者様",
    text: "一次試験の合格発表から二次試験までの短い期間でしたが、できる限り時間を確保して丁寧にご指導くださいました。面接の流れや受け答えのポイントを分かりやすく教えていただき、息子も自信を持って本番に臨むことができました。",
  },
  {
    label: "小学5年生・英検準2級 合格",
    who: "保護者様",
    text: "体験レッスンを通じて先生の人柄や熱意に触れ、ここなら安心してお任せできると感じて入塾を決めました。保護者へのフィードバックもとても丁寧で、進捗状況や課題をわかりやすく共有してくださるため、家庭でもサポートしやすく、安心して学習を続けることができました。",
  },
  {
    label: "英検3級 合格（再挑戦で合格）",
    who: "生徒さんご本人",
    text: "単語帳をやった分だけできるようになるので達成感もあるし、解いていて楽しさや嬉しさも感じられました。",
  },
];

const PRICES = [
  { grade: "5級・4級", price: "8,800円" },
  { grade: "3級", price: "11,000円" },
  { grade: "準2級", price: "13,200円" },
  { grade: "準2級プラス", price: "14,300円" },
  { grade: "2級", price: "15,400円" },
  { grade: "準1級", price: "17,600円" },
];

const FAQS = [
  { q: "体験は|できますか？", a: "はい、できます。LINEでご希望の時間帯をお知らせください。当日はレベルチェックとカウンセリングで、今の英語力とこれまでの学習状況を確認します。" },
  { q: "何歳から|通えますか？", a: "小学2年生ごろから受講いただけます。アルファベットの大文字が半分くらい分かれば大丈夫です。" },
  { q: "受ける級が|決まっていなくても|大丈夫ですか？", a: "大丈夫です。受験する級や今の英語力、学習方法がまだ決まっていなくてもご相談いただけます。レベルチェックとカウンセリングで、目標の級を一緒に決めていきます。" },
  { q: "オンラインでの|受講は可能ですか？", a: "はい、可能です。お子様の学習効率を考えると教室にお越しいただくのがおすすめですが、体調や天候、ご要望に合わせてオンラインでも受講いただけます。" },
  { q: "うちの子は|人見知りですが、|大丈夫でしょうか？", a: "ご安心ください。グループレッスンのほか、マンツーマン（個別）でも受講いただけます。お子様の性格や理解度、ペースに合わせて指導します。" },
  { q: "レッスンの|振替はできますか？", a: "マンツーマン（個別）レッスンは、前日18時までにご連絡いただければ振替ができます。グループレッスンは、同じレベルのクラスが開講されている場合に、別の日程のクラスへご参加いただけます。" },
  { q: "英検以外の|英語学習も|できますか？", a: "基本的には英検対策に特化していますが、学校の授業のフォローや英会話の基礎なども、ご要望に合わせてカリキュラムに組み込むことが可能です。" },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5 text-center lg:text-left z-10">
            <div className="inline-block bg-yellow-300 text-yellow-900 font-bold px-4 py-1 rounded-full text-sm md:text-base mb-1 motion-safe:animate-bounce">
              富士市｜小中高生の保護者様へ
            </div>
            <h1 className="text-[1.7rem] sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
              <span className="whitespace-nowrap">英語が苦手な子でも</span><br />
              <span className="whitespace-nowrap">「<span className="marker">自信</span>」を育てて</span><br />
              <span className="whitespace-nowrap">「<span className="marker">英検合格</span>」を手に入れる</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              <span className="inline-block">自己肯定感が上がる英検対策コース。</span><br />
              <span className="inline-block">二次試験合格率100%の実績で、</span><span className="inline-block">お子様の「できた！」を引き出します。</span>
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-2 text-sm font-bold text-gray-700" aria-label="教室の特徴">
              {HERO_FACTS.map((fact) => (
                <li key={fact} className="bg-white border border-yellow-300 rounded-full px-3 py-1 shadow-sm">
                  {fact}
                </li>
              ))}
            </ul>
            <div className="pt-1">
              <p className="text-sm font-bold text-orange-700 mb-2">＼ LINE登録で英検の特典3つプレゼント ／</p>
              <a
                href={LINE_URL}
                data-cta="hero"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-bold py-4 px-6 md:px-8 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 w-full md:w-auto whitespace-nowrap"
              >
                <MessageCircle className="w-6 h-6" />
                {CTA_LABEL}
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <p className="text-xs text-gray-600 mt-2">※無理な勧誘は一切ありません</p>
            </div>
          </div>
          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3]">
              {/* Hero Image Slider */}
              <HeroSlider
                images={[
                  { src: "/images/lpfv1.jpg", alt: "Yuma English Houseの教室の看板（静岡県富士市森下）" },
                  { src: "/images/lpfv2.jpg", alt: "教室で開いたイベントの様子" },
                  { src: "/images/lpfv3.jpg", alt: "ホワイトボードで説明するYuma先生" },
                ]}
              />

              {/* Badge */}
              <div className="absolute -bottom-6 -left-2 md:-left-6 bg-white p-4 rounded-2xl shadow-xl border-l-4 border-yellow-400 flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-700">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-bold">英検二次試験</p>
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
              { text: "「勉強しなさい！」と毎日|怒ってばかりで疲れる...", icon: <Frown size={48} className="text-orange-500 mx-auto" /> },
              { text: "英会話教室に通っているのに、|なかなか上達しない", icon: <CircleHelp size={48} className="text-blue-500 mx-auto" /> },
              { text: "子供に自信がなく、|英語に対して苦手意識がある", icon: <TrendingDown size={48} className="text-gray-500 mx-auto" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-gray-200 hover:border-primary transition-colors text-center">
                <div className="mb-4">{item.icon}</div>
                <p className="text-lg font-medium text-gray-700 leading-relaxed">
                  <Phrases text={item.text} />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-white border-2 border-primary text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg text-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full whitespace-nowrap">
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
            <span className="text-yellow-700 font-bold tracking-wider uppercase">Our Method</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              選ばれる<span className="marker">3つの理由</span>
            </h2>
          </div>

          <div className="space-y-20 max-w-5xl mx-auto">
            {/* Reason 1 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/lpfv3.jpg"
                    alt="生徒に説明するYuma先生"
                    fill
                    sizes="(min-width: 768px) 492px, 100vw"
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4" aria-hidden="true">01</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  否定しない「伴走型サポート」
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  「間違えたらどうしよう」という不安を取り除きます。小さな成功を見逃さずに褒めることで、お子様の自己肯定感を高め、自ら学ぶ意欲を引き出します。
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-1">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4" aria-hidden="true">02</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  二次試験合格率100%の実績
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  小中高生には難しい面接対策も、独自の攻略法でバッチリ対策。入室から退室までのマナーも含め、自信を持って話せるようになるまで徹底サポートします。
                </p>
              </div>
              <div className="order-2">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/reason2.jpg"
                    alt="英検2級の合格証明書"
                    fill
                    sizes="(min-width: 768px) 492px, 100vw"
                    className="object-cover rounded-2xl shadow-lg"
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
                    alt="英検対策で使う問題集"
                    fill
                    sizes="(min-width: 768px) 492px, 100vw"
                    className="object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="text-primary font-bold text-6xl opacity-20 -mb-8 ml-4" aria-hidden="true">03</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  <span className="inline-block">完全オーダーメイドの</span><span className="inline-block">カリキュラム</span>
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
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-3">
            <span className="inline-block">保護者様・生徒さんの</span><span className="marker">喜びの声</span>
          </h2>
          <p className="text-center text-sm text-gray-600 mb-12">実際にいただいた声から、一部を抜粋しています</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {VOICES.map((voice) => (
              <figure key={voice.label} className="bg-white p-6 pt-8 rounded-2xl shadow-md relative">
                <div className="absolute -top-4 left-4 bg-yellow-400 text-yellow-900 font-bold py-1 px-3 rounded-lg shadow-sm text-sm">
                  {voice.label}
                </div>
                <Quote className="text-yellow-500 mb-2" size={24} aria-hidden="true" />
                <blockquote className="text-gray-700 leading-relaxed">
                  <p>{voice.text}</p>
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-gray-600">― {voice.who}</figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center mt-8">
            <a
              href={HP_VOICES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-3 text-gray-700 font-bold underline underline-offset-4 decoration-yellow-500"
            >
              合格ストーリーをもっと読む（ホームページ）
            </a>
          </p>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["5級合格", "4級合格", "3級合格", "準2級合格", "2級合格", "準1級対応"].map((badge, i) => (
              <span key={i} className="bg-white border border-primary/50 text-yellow-800 px-4 py-2 rounded-full font-bold shadow-sm">
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
                alt="Yuma先生（竹内裕馬）"
                fill
                sizes="(min-width: 768px) 256px, 192px"
                className="object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white text-orange-700 font-bold px-4 py-1 rounded-full text-sm mb-4 shadow-sm">
                講師紹介
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                Yuma先生
              </h3>
              <p className="text-sm text-gray-600 mb-4">竹内 裕馬（静岡県富士市在住）</p>
              <ul className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 text-sm font-bold text-gray-800" aria-label="講師の経歴">
                {["TOEIC 945点", "アメリカ・オーストラリアに留学", "300名以上をサポート"].map((fact) => (
                  <li key={fact} className="bg-white rounded-full px-3 py-1 shadow-sm">{fact}</li>
                ))}
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                「英語が嫌い」「自信がない」そんなお子様こそ、私にお任せください。
                <br /><br />
                私自身も昔は英語が苦手でしたが、正しい学習法と「できた！」という小さな成功体験の積み重ねで克服しました。
                <br />
                Yuma English Houseでは、単なる英語指導だけでなく、お子様の<span className="font-bold text-orange-700">「自己肯定感」</span>を育てることを大切にしています。一緒に「合格」の喜びを分かち合いましょう！
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                大学時代に2度の留学を経験。外資系企業、ビジネス向けマンツーマン英会話スクールを経て、プロの英語コーチとしても活動しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Info Section */}
      <section id="info" className="py-12 md:py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
            教室の<span className="marker">ご案内</span>
          </h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <dl className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <div>
                <dt className="text-sm font-bold text-yellow-800">教室</dt>
                <dd className="text-gray-900 font-medium">
                  {SCHOOL_ADDRESS}
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center gap-1 py-2 text-sm font-bold text-gray-700 underline underline-offset-4 decoration-yellow-500"
                  >
                    <MapPin size={16} aria-hidden="true" />
                    地図を開く
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-yellow-800">対象</dt>
                <dd className="text-gray-900 font-medium">小学2年生ごろ〜高校生</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-yellow-800">受講の形</dt>
                <dd className="text-gray-900 font-medium">教室での対面レッスン（オンラインにも対応）／グループ・マンツーマン</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-yellow-800">レッスン</dt>
                <dd className="text-gray-900 font-medium">週1回。学習計画・宿題・振り返りまで、家庭学習もサポートします</dd>
              </div>
            </dl>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <p className="text-sm font-bold text-yellow-800 mb-3">月謝（グループレッスン・月額・税込）</p>
              <table className="w-full text-gray-900">
                <tbody>
                  {PRICES.map((row) => (
                    <tr key={row.grade} className="border-b border-gray-100 last:border-0">
                      <th scope="row" className="py-2 text-left font-medium">{row.grade}</th>
                      <td className="py-2 text-right font-bold">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                <li>マンツーマン（個別）は各コース＋4,400円</li>
                <li>入会金 11,000円（税込）</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={LINE_URL}
              data-cta="info"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all w-full md:w-auto whitespace-nowrap"
            >
              <MessageCircle className="w-6 h-6" />
              {CTA_LABEL}
            </a>
            <p className="text-xs text-gray-600 mt-2">※受ける級や通い方が決まっていなくても大丈夫です</p>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-16">
            受講までの<span className="marker">流れ</span>
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10" />

            {[
              { step: "STEP 01", title: "LINE登録", desc: "まずは公式LINEに登録して、無料特典をお受け取りください。", icon: <MessageCircle size={32} /> },
              { step: "STEP 02", title: "無料カウンセリング", desc: "LINEから簡単に予約できます。お子様の現状や目標をお聞かせください。", icon: <Users size={32} /> },
              { step: "STEP 03", title: "体験レッスン", desc: "実際のレッスンを体験。教室の雰囲気や指導法をチェック！", icon: <BookOpen size={32} /> },
              { step: "STEP 04", title: "受講スタート", desc: "気に入っていただけたら入会。目標に向かって一緒に頑張りましょう！", icon: <CheckCircle size={32} /> },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center relative">
                <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  {item.icon}
                </div>
                <div className="text-orange-700 font-bold text-sm mb-2">{item.step}</div>
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
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-4">
            よくある<span className="marker">ご質問</span>
          </h2>
          <p className="text-center text-sm text-gray-600 mb-10">質問をタップすると答えが開きます</p>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((item, index) => (
              <details key={item.q} className="faq group bg-white rounded-xl shadow-sm overflow-hidden" open={index === 0}>
                <summary className="p-5 flex gap-4 items-center cursor-pointer select-none">
                  <span className="bg-primary text-gray-900 font-bold rounded px-2 py-1 shrink-0" aria-hidden="true">Q</span>
                  <h3 className="flex-1 font-bold text-lg text-gray-900"><Phrases text={item.q} /></h3>
                  <ChevronDown className="faq-chevron shrink-0 text-gray-500 transition-transform" size={24} aria-hidden="true" />
                </summary>
                <div className="p-5 pt-4 bg-orange-50/30 border-t border-gray-100 flex gap-4 items-start">
                  <span className="text-orange-700 font-bold px-2 py-1 shrink-0" aria-hidden="true">A</span>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-16 md:py-24 bg-gradient-to-br from-primary to-yellow-600 text-gray-900 relative overflow-hidden">
        {/* Confetti/Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)',
          backgroundSize: '24px 24px'
        }}></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl motion-safe:animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl motion-safe:animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-orange-700 text-white font-bold px-6 py-2 rounded-full mb-6 shadow-lg">
            ＼ LINE登録の方へ無料プレゼント ／
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            まずは無料で<br />
            <span className="text-white bg-orange-700 px-2 rounded-lg inline-block mt-2">「合格の秘訣」</span>を受け取ってください
          </h2>
          <p className="text-lg md:text-xl mb-12 font-medium">
            公式LINEに登録するだけで、<br className="md:hidden" />今すぐ使える<span className="font-bold text-2xl">特典3つ</span>をプレゼント！
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { title: "小中高生向け\n英検スピーキング\n完全攻略ブック", icon: <BookOpen size={48} />, label: "PDF冊子" },
              { title: "魔法の\nフォニックス\nチャート", icon: <Users size={48} />, label: "ポスター" },
              { title: "完全オーダーメイド\n学習ロードマップの作成", icon: <CheckCircle size={48} />, label: "個別相談" },
            ].map((gift, index) => (
              <div key={index} className="relative group">
                {/* Gift Box Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative bg-white text-gray-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-center h-full transform transition-transform duration-300 group-hover:-translate-y-2 border-4 border-yellow-300">
                  <div className="absolute -top-5 bg-orange-700 text-white font-bold px-4 py-1 rounded-full shadow-md text-sm">
                    PRESENT {index + 1}
                  </div>
                  <div className="bg-orange-100 text-orange-600 p-6 rounded-full mb-6 shadow-inner">
                    {gift.icon}
                  </div>
                  <div className="text-xs font-bold text-gray-600 mb-2 border border-gray-300 px-2 py-0.5 rounded">{gift.label}</div>
                  <h3 className="font-bold text-xl whitespace-pre-line leading-snug text-gray-900">
                    {gift.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative inline-block group w-full md:w-auto">
            <div className="absolute -inset-1 bg-white rounded-full blur opacity-30 group-hover:opacity-50 transition duration-200"></div>
            <a
              href={LINE_URL}
              data-cta="offer"
              className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white text-xl md:text-3xl font-bold py-4 px-8 md:py-6 md:px-12 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all transform hover:scale-105 w-full md:w-auto"
            >
              {/* Shimmer Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></div>

              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
              <div className="text-left leading-tight">
                <div className="text-sm md:text-base font-normal">＼ 1分で完了！ ／</div>
                {CTA_LABEL}
              </div>
            </a>
          </div>
          <p className="mt-6 text-sm md:text-base font-medium">
            ※登録後、<span className="underline decoration-white decoration-2 underline-offset-4">すぐに</span>特典が届きます。ブロックもいつでも可能です。
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="text-2xl font-bold text-white mb-2">Yuma English House</div>
            <p>〒416-0949 {SCHOOL_ADDRESS}</p>
            <p className="mt-1">代表：竹内 裕馬</p>
            <p className="mt-2">富士市の小中高生向け英検対策・伴走型サポート</p>
            <p className="mt-4">
              <a href={HP_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-3 text-gray-300 underline underline-offset-4">
                ホームページ（yuma-english.com）
              </a>
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} Yuma English House. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
