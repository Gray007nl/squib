async function redirectPackUUIDs() {
    let redirects = {
        'Compendium.sdlc-1000.ancestries-sdlc-1000': 'Compendium.sdlc-1000.ancestries',
        'Compendium.sdlc-1000.characters-sdlc-1000': 'Compendium.sdlc-1000.characters',
        'Compendium.sdlc-1000.creatures-sdlc-1000': 'Compendium.sdlc-1000.creatures',
        'Compendium.sdlc-1000.creatureroles-sdlc-1000': 'Compendium.sdlc-1000.creatureroles',
        'Compendium.sdlc-1000.features-sdlc-1000': 'Compendium.sdlc-1000.features',
        'Compendium.sdlc-1000.items-sdlc-1000': 'Compendium.sdlc-1000.items',
        'Compendium.sdlc-1000.journals-sdlc-1000': 'Compendium.sdlc-1000.journals',
        'Compendium.sdlc-1000.paths-sdlc-1000': 'Compendium.sdlc-1000.paths',
        'Compendium.sdlc-1000.professions-sdlc-1000': 'Compendium.sdlc-1000.professions',
        'Compendium.sdlc-1000.relics-sdlc-1000': 'Compendium.sdlc-1000.relics',
        'Compendium.sdlc-1000.spells-sdlc-1000': 'Compendium.sdlc-1000.spells',
        'Compendium.sdlc-1000.tables-sdlc-1000': 'Compendium.sdlc-1000.tables',
        'Compendium.sdlc-1000.talents-sdlc-1000': 'Compendium.sdlc-1000.talents',
    }

    for (const [key, value] of Object.entries(redirects)) {
        CONFIG.compendium.uuidRedirects[key] = value;
    }
}

Hooks.once('init', async function() {    
    // Set up compendium redirects
    await redirectPackUUIDs()
})