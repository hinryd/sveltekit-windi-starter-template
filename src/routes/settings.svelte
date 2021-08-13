<script lang="ts">
    const settings = [
        {
            label: 'hello',
            caption: 'slkdfjlskajflkasjdf'
        }
    ]
</script>

<div class="flex flex-col">
    {#each settings as setting}
        <button class="p-4 border-b text-left">
            <h3 class="font-bold">{setting.label}</h3>
            <p class="">{setting.caption}</p>
        </button>
    {/each}
</div>
