import TopBar from '@/components/TopBar'

export default function AssignmentPage() {
    return (
        <div>
            <TopBar />
            <main className='pt-24 pb-24'>
                <h1 className='mb-10 text-center text-5xl'>Zadanie</h1>
                <div className='w-3/4 mx-auto flex flex-col gap-3 sm:text-lg'>
                    <p>
                        Vytvorte webovú aplikáciu, chatbot, ktorý bude vyhľadávať polovodičové súčiastky na základe dotazov
                        formulovaných voľným textom.
                    </p>
                    <p>Projekt bude agregovať viacero chatbotov, ktorí používajú rôzne zdroje dát.</p>
                    <p>Aplikácia:</p>
                    <p className='pl-10'>Prečíta používateľský vstup, voľný text.</p>
                    <p className='pl-10'>Vyberie, ktorý špecializovaný chatbot má byť použitý, podľa používateľského vstupu.</p>
                    <p className='pl-10'>Prepošle vstup konkrétnemu špecializovanému chatbotovi.</p>
                    <p className='pl-10'>Zobrazí používateľovi výsledky.</p>
                    <p>Projekt bude pozostávať z:</p>
                    <p className='pl-10'>Algoritmu na výber špecializovaného chatbota (môže byť GPT).</p>
                    <p className='pl-10'>
                        Špecializovaného chatbota na vyhľadávanie produktov podľa parametrov - riešenie hotové z predchádzajúceho
                        roku.
                    </p>
                    <p className='pl-10'>
                        Špecializovaného chatbota, ktorý extrahuje ID produktu z textu (GPT) a pošle ho predpripravenému API.
                    </p>
                    <p>Riešenie otestujte a zmerajte jeho presnosť a ďalšie relevantné vlastnosti.</p>
                    <p>Predpokladá sa použitie moderných webových technológií ako React, node.js a podobne.</p>
                    <p>Predpokladá sa zverejnenie výsledného riešenia pod permisívnou open-source licenciou typu MIT.</p>
                </div>
            </main>
        </div>
    )
}
