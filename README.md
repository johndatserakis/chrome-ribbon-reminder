# Ribbon Reminder

## Links

- [Live in the Chrome Web Store](https://chromewebstore.google.com/detail/ribbon-reminder/ahdegcekcodbkojmccabgmfcfddabnbd)

## About

Stay on top of every task, right from your toolbar. Ribbon Reminder’s badge counter lets you add, edit, and delete tasks instantly. Simply tie or untie tasks to update your count - because everyone could use a little backup. It's like tying a ribbon on your finger.

Ribbon Reminder started as an iOS app I built in Swift, and I think its concept could be perfect for an extension. I’ve open-sourced the project so others can explore and learn from it!

## Develop

Utilizes a HotBuild plugin to build the app on each save.

To see changes close and reopen the popup window.

Load unpacked extension from `./dist`.

You could also visit http://localhost:5173/src/popup/index.html to view the popup outside of the popup world.

```bash
yarn dev
```

Inspect Chrome storage sync

```js
chrome.storage.sync.get(console.log);
```

To clear the Chrome sync storage, run this in the popup.

```ts
chrome.storage.local.clear(function () {
  const error = chrome.runtime.lastError;
  if (error) {
    console.error(error);
  }
});
chrome.storage.sync.clear();
```

## Build

```bash
# Local Dev
yarn build:package
```

The resulting `./ribbon-reminder.zip` is what you upload to the extension store.

## Chrome vs. Firefox build

Update the `background` property in ./public/manifest.json to this for each build:

### Chrome

```json
{
  "background": {
    "service_worker": "src/background/index.js",
    "type": "module"
  }
}
```

### Firefox

```json
{
  "background": {
    "scripts": ["src/background/index.js"],
    "type": "module"
  }
}
```

From what I've read, you can leave the `browser_specific_settings` property in the `manifest.json`, even though it's only used in Firefox.

## Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

## License

[MIT](http://opensource.org/licenses/MIT)
