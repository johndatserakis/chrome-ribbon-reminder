import { getRibbons } from '../popup/utils/storage';

const determineAndApplyStatus = async () => {
  try {
    const ribbons = await getRibbons();
    const tiedCount = ribbons.reduce(
      (acc, { isTied }) => acc + (isTied ? 1 : 0),
      0,
    );
    const text = tiedCount === 0 ? '' : tiedCount.toString();

    chrome.action.setBadgeText({ text });
  } catch {
    // Don't throw.
  }
};

chrome.runtime.onStartup.addListener(function () {
  determineAndApplyStatus();
});

// This event is fired when the extension's storage area changes.
chrome.storage.onChanged.addListener(async () => {
  // During normal app use, the storage gets updated.
  // You could trigger this after each of those updates, but it's
  // cleaner to just listen for changes here and update as needed.

  determineAndApplyStatus();
});
