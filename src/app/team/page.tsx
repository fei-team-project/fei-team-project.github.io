import PageTitle from '@/components/PageTitle'
import TeamMemberCard from '@/components/TeamMemberCard'

export default function TeamPage() {
    const teamMembers = [
        {
            name: 'Michal Čopjan',
            info: 'Michal má znalosti s programovacími jazykmi Python, JavaScript, JAVA a s HTML a CSS. Skúsenosti má s vytvorením webovej aplikácie kde použil Django ako backend, Next.js ako fronted a PostgreSQL ako databázu. Okrem toho robil bakalársku prácu v ktorej implementoval nástroj na anonymizovanie dokumentov kde trénoval NER model, ktorý detegoval osobné údaje v neštruktúrovanom texte.'
        },
        {
            name: 'Patrik Kaprinay',
            info: 'Patrik má skúsenosti s frontend a full-stack vývojom webových aplikácií, pričom používa technológie ako HTML, CSS a JavaScript. Okrem toho ovláda aj programovacie jazyky Java, SQL a Python. Aktuálne pracuje vo firme Cstudios s.r.o., kde sa podieľa na tvorbe moderných webových riešení a dizajne užívateľských rozhraní, pričom dbá na optimalizáciu výkonu a použiteľnosť aplikácií.'
        },
        {
            name: 'Marko Matúška',
            info: 'Marko má skúsenosti s full-stack vývojom webových aplikácií a ovláda programovacie jazyky ako JavaScript, PHP, Java, Python a C#. Taktiež má skúsenosti s modernými frameworkmi, ako napríklad React.js a Laravel. Počas štúdia brigáduje vo firme VGD Slovakia, kde vytváral automatizačné riešenia a aplikácie pomocou low-code/no-code platformy Microsoft Power Platform. Témou jeho bakalárskej práce bola taktiež webová aplikácia.'
        },
        {
            name: 'Klára Murínová',
            info: 'Klára má rozsiahle skúsenosti v oblasti vývoja softvéru, so zameraním na rôzne odvetvia vrátane back-endu a front-endu. Špecializuje sa na vývoj webových aj mobilných aplikácií a ovláda široké spektrum programovacích jazykov, ako sú C, C++, C#, PHP, SQL, HTML, CSS a R. Klára počas svojej bakalárskej práce pracovala v jazyku R, kde úspešne vyvinula webovú aplikáciu, čo potvrdzuje jej technické zručnosti a kreativitu v riešení reálnych problémov.'
        },
        {
            name: 'Ľuboš Sekerák',
            info: 'Ľuboš má skúsenosti s full-stack vývojom webových aplikácií z backendovej stránky pomocou PHP frameworku Laravel a frontendovej pomocou React.js a Next.js. Má znalosť programovacích jazykov PHP, JavaScript, Java, značkovým jazykom HTML a štýlovacím jazykom CSS. Počas štúdia nadobudol vedomosti z oblasti programovania hier použitím C# v Unity. Mnohé znalosti nadobudol počas práce v reklamných a digitálnych agentúrach (RoyalMedia, CODEUPP, Triad, WEBGANG), kde sa podieľal na vývoji komerčných webových aplikácií. Okrem toho má prehľad aj o tvorbe mobilných aplikácií pomocou React Native, ktorý nadobudol počas vypracovávania bakalárskej práce.'
        }
    ]
    return (
        <main className='pt-24'>
            <PageTitle title='Tím' />
            <div className='max-w-5xl mx-auto pl-5 pr-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {teamMembers.map((teamMember) => (
                    <TeamMemberCard key={teamMember.name} name={teamMember.name} info={teamMember.info} />
                ))}
            </div>
        </main>
    )
}
