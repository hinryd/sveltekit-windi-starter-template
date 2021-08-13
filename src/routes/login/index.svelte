<script lang="ts">
    import { onMount } from 'svelte'
    import * as firebaseConfig from '../../../firebase.json'
    import { initializeApp } from 'firebase/app'
    import { getAuth } from 'firebase/auth'
    import { createUserWithEmailAndPassword } from 'firebase/auth'

    let email
    let password
    let auth

    const login = () => {
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
    }

    onMount(() => {
        const firebase = initializeApp(firebaseConfig)
        auth = getAuth(firebase)
    })
</script>

<main class="w-screen h-screen flex justify-center items-center">
    <form
        class="border shadow-xl w-64 h-64 rounded-xl"
        on:submit|preventDefault={login}
    >
        <input type="email" bind:value={email} />
        <input type="password" bind:value={password} />
        <button type="submit">Login</button>
    </form>
    <button on:click={() => console.log(auth.currentUser)}>Check</button>
</main>
