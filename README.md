<p align="center"><a href="https://github.com/johndatserakis/chrome-ribbon-reminder" target="_blank"><img width="128" src="./src/icons/app-icon.png"></a></p>

<p align="center">
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

# Chrome-Ribbon-Reminder

This is a Chrome extension in popup form. [Ribbon Reminder](https://github.com/johndatserakis/RibbonReminder) was an old app I made in Swift for iOS a while back, and I think its concept could work well for an extension - so I decided to open-source this project so that others can learn.

## Features
- Browser popup extension
- Browser background page (setup but not used in this program)
- Vue 2.5
- Async/Await
- Bootstrap 4
- SASS
- Font-Awesome
- Font support
- And more...

``` bash
# install dependencies
npm install

# serve for development (Serve files from /dist folder in development)
npm run watch

# build for production
npm run build
```

## General Information

Originally, I had set up this project without using Vue, but as a huge Vue fan, I quickly missed its templating (among other things of course), so I went ahead and went to work on integrating Vue into the development workflow for a Chrome extension.

Honestly, at first it was tough - because I couldn't just use the Vue-Cli due to the project structure required for Chrome extensions. Well, I'm sure you probably could, but first I wanted to learn how the manifest.js tied into the rest of the app. I got the popup to show and some data to save, but I quickly realized that I would need some type of JavaScript templating system to really be efficient - that's where Vue comes in, as it's already my front-end framework of choice.

Take a look at the webpack.config.js to get a sense of what Webpack is doing - it's nothing to crazy, just the basic scss handling, vue loading, font/image moving. I use a similar front-end pattern, although really shortened, as [koa-vue-notes-web](https://github.com/johndatserakis/koa-vue-notes-web), so you'll find a few custom styles loaded first and then the component styling after in the main app.js.

All in all the hardest thing to deal with was the async chrome storage calls - the callbacks were pretty vicious and it didn't seem super appealing to be several callbacks deep at all times. What I ended up coming across was [webextension-polyfill](https://github.com/mozilla/webextension-polyfill), which honestly was a life-saver. What it does is turn all (most) of the Chrome async extension API calls into Promises. I was super psyched to see that. So what I did was combine that with the awesome async/await promise method and I was on my way.

All I had to do was make sure to keep the data on the Vue instance in tune with the Chrome storage. In the Popup.vue component, you'll see a watcher I set up. That's there to keep everything updated in the Chrome storage when there's a change. I found this to be a slick solution to keeping everything in sync. Just note that with this installed you'll use `browser` instead of `chrome` when referencing the extension API. What's really cool about this is that now your extension should well with Firefox with little further effort.

I have also setup a background page that will let you handle background actions nicely - I don't use it in this extension as everything is handled in the popup - but you can use it however you like.

For Firefox add-ons, install [web-ext](https://github.com/mozilla/web-ext) and run `web-ext build` in the final dist folder. This will produce a zip that will accepted through Firefox. Other than the `applications` property in the manifest.json - there are no other differences. Make sure your application `id` is unique or else it won't be accepted.

## Hit Me Up

Go ahead and fork the project! Message me here if you have questions or submit an issue if needed. I'll be making touch-ups as time goes on. Have fun with this!

## License

Copyright 2018 John Datserakis

[MIT](http://opensource.org/licenses/MIT)