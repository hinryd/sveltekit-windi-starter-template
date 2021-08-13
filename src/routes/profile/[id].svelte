<script lang="ts">
    import Header from '$lib/Header.svelte'
    import More from '$lib/icon/More.svelte'

    let followers = [
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        },
        {
            icon: '',
            name: 'Tiffany'
        }
    ]
</script>

<Header />
<main class="flex flex-col items-center">
    <img class="mt-4 w-36 rounded-full shadow-md" src="/ogre.png" alt="logo" />
    <h2 class="text-3xl font-bold">Henry Li</h2>
    <div class="flex p-4 w-full">
        <button
            class="py-2 mr-1 flex-grow inline-flex justify-center bg-indigo-600 text-white rounded-md shadow-md"
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
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
            </svg>
            <p class="ml-1">Chat</p>
        </button>

        <button class="py-2 px-4 bg-gray-200 rounded-md shadow-md">
            <More />
        </button>
    </div>

    <div class="px-4 pb-4 pt-0 w-full">
        <div class="grid grid-cols-3 place-items-center">
            <p class="text-2xl">⭐</p>
            <p class="text-2xl">💪</p>
            <p class="text-2xl">🔥</p>
        </div>
        <div class="grid grid-cols-3 place-items-center">
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
        </div>
    </div>

    <hr class="border-gray-300 w-11/12" />

    <div class="p-4 w-full">
        <div class="pb-4">
            <h2 class="font-bold">Followers</h2>
        </div>
        <div class="flex overflow-x-scroll overflow-y-hidden">
            {#each followers as f}
                <a
                    class="block h-14 w-14 flex-shrink-0 mr-2"
                    href="/profile/{f.name}"
                >
                    <img class="rounded-full" src="/ogre.png" alt="friend" />
                </a>
            {/each}
            <a
                class="block border rounded-full h-14 w-14 flex-shrink-0"
                href="/find-friends"
            >
                <More />
            </a>
        </div>
    </div>

    <hr class="border-gray-300 w-11/12" />

    <div class="p-4 w-full">
        <div class="flex justify-between pb-4">
            <h2 class="font-bold">Activities</h2>
            <a href="/find-friends"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                </svg></a
            >
        </div>
    </div>
</main>
