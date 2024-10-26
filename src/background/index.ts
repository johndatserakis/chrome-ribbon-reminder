// // Fired when the active tab in a window changes.
// chrome.tabs.onActivated.addListener(async ({ tabId }) => {
//   const { url = '' } = await chrome.tabs.get(tabId);

//   const isUrlToIgnore = URLS_TO_IGNORE.some((urlToIgnore) =>
//     url.includes(urlToIgnore),
//   );

//   if (isUrlToIgnore) return;

//   await determineAndApplyStatus();
// });

// // This event fires when a tab is updated (e.g., when the URL
// // changes or the page title is modified).
// chrome.tabs.onUpdated.addListener(
//   async (_, { status }, { active, id, url }) => {
//     if (!id || !url) return;

//     const isUrlToIgnore = URLS_TO_IGNORE.some((urlToIgnore) =>
//       url.includes(urlToIgnore),
//     );
//     const shouldActivate = status === 'complete' && active && !isUrlToIgnore;

//     if (!shouldActivate) return;

//     await determineAndApplyStatus();
//   },
// );

// // This event is fired when the extension's storage area changes.
// chrome.storage.onChanged.addListener(async () => {
//   // During normal app use, the storage gets updated.
//   // You could trigger this after each of those updates, but it's
//   // cleaner to just listen for changes here and update as needed.
//   await determineAndApplyStatus();
// });

// // This is the main listener from the Popup.
// chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
//   // if (request.action === 'determineAndApplyStatus') {
//   //   // Must use a thenable promise here, and then make sure to sendResponse.
//   //   // https://stackoverflow.com/a/73867171/8014660
//   //   determineAndApplyStatus().then(() => sendResponse({ status: 'complete' }));
//   // }

//   if (request.action === 'setBadgeText') {
//     // Must use a thenable promise here, and then make sure to sendResponse.
//     // https://stackoverflow.com/a/73867171/8014660
//     // determineAndApplyStatus().then(() => sendResponse({ status: 'complete' }));

//     chrome.action.setBadgeText({ text: "1" });
//     chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
//   }

//   // Must do the main work of this function above, without using await locally.
//   // Also must return true here to ensure the connection stays open.
//   // https://stackoverflow.com/a/69511998/8014660
//   return true;
// });

// // Can't use external variables here...
// function addVisitedClass() {
//   document.body.classList.add('ribbon-reminder-extension-visited'); // CSS_CLASS_VISITED
// }
// function addDefaultClass() {
//   document.body.classList.add('ribbon-reminder-extension-default'); // CSS_CLASS_DEFAULT
// }
// function addTextContrastClass() {
//   document.body.classList.add('ribbon-reminder-extension-text-contrast'); // CSS_CLASS_TEXT_CONTRAST
// }

// function removeVisitedClass() {
//   document.body.classList.remove('ribbon-reminder-extension-visited'); // CSS_CLASS_VISITED
// }
// function removeDefaultClass() {
//   document.body.classList.remove('ribbon-reminder-extension-default'); // CSS_CLASS_DEFAULT
// }
// function removeTextContrastClass() {
//   document.body.classList.remove('ribbon-reminder-extension-text-contrast'); // CSS_CLASS_TEXT_CONTRAST
// }

// Icon
// const setIconActive = async () => {
//   chrome.action.setIcon({ path: IMAGE_ACTIVE_ICON });
// };
// const setIconDeactivated = async () => {
//   chrome.action.setIcon({ path: IMAGE_INACTIVE_ICON });
// };

// // Activation
// const activateVisitedCss = async (tabId: number, color: string) => {
//   chrome.scripting.executeScript({ target: { tabId }, func: addVisitedClass });

//   chrome.scripting.insertCSS({
//     target: { tabId },
//     css: `
//       body.${CSS_CLASS_VISITED} a:visited,
//       body.${CSS_CLASS_VISITED} a:visited * {
//         color: ${color} !important;
//       }

//       /* Next time make sure to note what each hack is for. */
//       body.${CSS_CLASS_VISITED} .ecCcnr .SQnoC3ObvgnGjWt90zD9Z:visited .imors3-0 {
//         color: ${color} !important;
//       }
//     `,
//   });
// };
// const activateDefaultCss = async (tabId: number, color: string) => {
//   chrome.scripting.executeScript({ target: { tabId }, func: addDefaultClass });

//   chrome.scripting.insertCSS({
//     target: { tabId },
//     css: `
//       body.${CSS_CLASS_DEFAULT} a:not(:visited) {
//         color: ${color} !important;
//       }
//     `,
//   });
// };
// const activateTextContrastCss = async (tabId: number) => {
//   chrome.scripting.executeScript({
//     target: { tabId },
//     func: addTextContrastClass,
//   });

//   chrome.scripting.insertCSS({
//     target: { tabId },
//     css: `
//       body.${CSS_CLASS_TEXT_CONTRAST} a {
//         background-color: white;
//         border-bottom: 1px solid white;
//       }
//       body.${CSS_CLASS_TEXT_CONTRAST} a:visited {
//         background-color: yellow;
//         border-color: black;
//       }
//     `,
//   });
// };

// // Deactivation
// const deactivateVisitedCss = async (tabId: number) => {
//   chrome.scripting.executeScript({
//     target: { tabId },
//     func: removeVisitedClass,
//   });
// };
// const deactivateDefaultCss = async (tabId: number) => {
//   chrome.scripting.executeScript({
//     target: { tabId },
//     func: removeDefaultClass,
//   });
// };
// const deactivateTextContrastCss = async (tabId: number) => {
//   chrome.scripting.executeScript({
//     target: { tabId },
//     func: removeTextContrastClass,
//   });
// };

// export const determineAndApplyStatus = async () => {
//   try {
//     const areVisitedLinksEnabled = await getAreVisitedLinksEnabled();
//     const areDefaultLinksEnabled = await getAreDefaultLinksEnabled();
//     const visitedLinkColor = await getVisitedLinkColor();
//     const defaultLinkColor = await getDefaultLinkColor();
//     const blocklistUrls = await getBlocklistUrls();
//     const allowlistUrls = await getAllowlistUrls();
//     const isBlocklistActive = await getIsBlocklistActive();
//     const isAllowlistActive = await getIsAllowlistActive();
//     const isContrastEnabled = await getIsContrastEnabled();

//     const [currentTab] = await chrome.tabs.query({
//       active: true,
//       currentWindow: true,
//     });

//     if (!currentTab || !currentTab.id) return;

//     const { id, url = '' } = currentTab;

//     const isUrlInBlocklist = blocklistUrls.some((listUrl) =>
//       url.includes(listUrl),
//     );
//     const isUrlInAllowlist = allowlistUrls.some((listUrl) =>
//       url.includes(listUrl),
//     );

//     // If both are off, return early.
//     if (!areVisitedLinksEnabled && !areDefaultLinksEnabled) {
//       await deactivateVisitedCss(id);
//       await deactivateDefaultCss(id);
//       await setIconDeactivated();
//       return;
//     }

//     await setIconActive();

//     if (!areVisitedLinksEnabled) {
//       await deactivateVisitedCss(id);
//     }

//     if (!areDefaultLinksEnabled) {
//       await deactivateDefaultCss(id);
//     }

//     const isPositiveBlocklistMatch = isBlocklistActive && !isUrlInBlocklist;
//     const isPositiveAllowlistMatch = isAllowlistActive && isUrlInAllowlist;
//     const isPositiveListMatch =
//       isPositiveBlocklistMatch || isPositiveAllowlistMatch;

//     if (isPositiveListMatch) {
//       if (areVisitedLinksEnabled) {
//         await activateVisitedCss(id, visitedLinkColor);
//       } else {
//         await deactivateVisitedCss(id);
//       }

//       if (areDefaultLinksEnabled) {
//         await activateDefaultCss(id, defaultLinkColor);
//       } else {
//         await deactivateDefaultCss(id);
//       }

//       if (isContrastEnabled) {
//         await activateTextContrastCss(id);
//       } else {
//         await deactivateTextContrastCss(id);
//       }
//     } else {
//       await deactivateVisitedCss(id);
//       await deactivateDefaultCss(id);
//       await deactivateTextContrastCss(id);
//     }
//   } catch {
//     // Don't throw.
//   }
// };

export {};
