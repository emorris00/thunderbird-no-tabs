(async () => {
    messenger.LegacyCSS.inject("chrome://messenger/content/messenger.xhtml", "style.css");

    async function removeInactiveTabs() {
        const inactiveTabs = await messenger.tabs.query({active: false});
        messenger.tabs.remove(inactiveTabs.map(a => a.id));
    }

    messenger.tabs.onCreated.addListener(removeInactiveTabs);
    messenger.tabs.onActivated.addListener(removeInactiveTabs);
})()