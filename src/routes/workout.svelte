<script lang="ts">
    let template = [
        {
            id: 'sdfjklsdfjlk',
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'history #1',
            desc: '1 x squat'
        },
        {
            name: 'template #1',
            desc: '1 x squat'
        }
    ]

    const showTemplateOverview = e => {
        console.log('showing template')
    }

    const showTemplateOptions = e => {}
</script>

<main class="flex flex-col p-4 mb-12">
    <a
        class="w-full py-3 bg-indigo-600 shadow-xl rounded text-white font-bold text-center my-4"
        w-active="bg-indigo-500 transition-transform transform scale-95"
        href="/">Start a new session</a
    >

    <h2 class="uppercase text-sm mb-4">History</h2>

    {#each template as t}
        <a
            class="flex flex-col border text-left p-3 rounded relative mb-4"
            w-active="transition-transform transform scale-95"
            href="/"
        >
            <div class="absolute top-0 right-0">
                <button
                    class="p-3"
                    on:click|stopPropagation|preventDefault={showTemplateOptions}
                    aria-label="template options"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                    </svg>
                </button>
            </div>

            <h2 class="font-bold text-lg">{t.name}</h2>
            <p class="text-sm">{t.desc}</p>
        </a>
    {/each}
</main>
