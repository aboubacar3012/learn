const CallToChat = () => {
    return (
        <section className="bg-gray-100">
        <div className="container mx-auto flex flex-col justify-around p-2 text-center md:p-10 lg:flex-row">
            <div className="hidden md:flex flex-col justify-center lg:text-left">
                <h1 className="text-3xl font-medium leading-tight title-font">Réjoignez le groupe des etudiants</h1>
            </div>
            <div className="md:hidden flex flex-col justify-center lg:text-left">
                <h1 className="text-3xl font-medium leading-tight title-font">Groupe de tchat</h1>
            </div>
            <div className="md:flex flex-col items-center justify-center flex-shrink-0 mt-3 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
                <a href="https://chat.whatsapp.com/EhPYddGvigwFvHT5kTKk6h" className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900">
                    <img src="/images/whatsapp-color-svgrepo-com.svg" width={50} />
                    <span className="flex flex-col items-start ml-4 leading-none">
                        {/* <span className="mb-1 text-xs">GET IT ON</span> */}
                        <span className="font-semibold title-font">Whatsapp</span>
                    </span>
                </a>
                <a href="https://discord.gg/FFknNkf9" className="inline-flex items-center px-5 py-3 rounded-lg dark:bg-violet-400 dark:text-gray-900">
                    <img src="/images/discord-icon-svgrepo-com.svg" width={50} />
                    <span className="flex flex-col items-start ml-4 leading-none">
                        {/* <span className="mb-1 text-xs">Download on the</span> */}
                        <span className="font-semibold title-font">Discord</span>
                    </span>
                </a>
            </div>
        </div>
    </section>
    );
}

export default CallToChat;