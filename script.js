(async () => {
    messenger.LegacyCSS.inject("chrome://messenger/content/messenger.xhtml", "style.css");

    messenger.tabs.onCreated.addListener(async tab => {
        let inactiveTabs = await messenger.tabs.query({active: false});
        messenger.tabs.remove(inactiveTabs.map(a => a.id));
    });
    messenger.tabs.onActivated.addListener(async activeInfo => {
        let inactiveTabs = await messenger.tabs.query({active: false});
        messenger.tabs.remove(inactiveTabs.map(a => a.id));
    });
})()