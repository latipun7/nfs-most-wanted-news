# NFS: Most Wanted

> News for Search: Most Wanted news you can search here and now.

## Table of Contents

- [NFS: Most Wanted](#nfs-most-wanted)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [Motivation](#motivation)
  - [Dev Info](#dev-info)
    - [3rd Party API](#3rd-party-api)
    - [Attribution](#attribution)
    - [Technologies Stack](#technologies-stack)
    - [Directory Structure](#directory-structure)
    - [Run Step](#run-step)

## Description

This application is for users to search news from all around the world.
Users can save news in their "reading list" and saved in their browser storage.

### Motivation

This application created because in this age people want to see the news
what matter to them. Especially nowadays the topic of "corona" is all around
in the world and people just can search news only about corona.

[🔝 Back to Top][top]

<!-- ## How to Interact with This Application -->

## Dev Info

### 3rd Party API

- This app use News API from [newsapi.org][newsapi]

[🔝 Back to Top][top]

### Attribution

- Icon made by [Smashicons][smashicon-news] from [www.flaticon.com][flaticon]

### Technologies Stack

This overall app created with the help of the following techs / apps:

- HTML5
- Javascript
  - Plain vanilla without framework or library
  - ES6++
  - [Web Components][web-components]
- CSS3
- [Webpack][webpack]
- [Visual Studio Code][vsc] (My favorite code editor)
  - [Great intellisense][vsc-type-intel] with [type cheking][ts-jsdoc]
  - [My personal VSC settings][vsc-settings]
- [Google Chrome][chrome]
- [Firefox Developer Edition][firefox] (interactive CSS testing)
- [Insomnia][insomnia] (test API request and response)
- [Favicon][favicon] (to generate favicon from png)
- Git and Github

[🔝 Back to Top][top]

### Directory Structure

```md
root # root directory
├── src # source files
│ ├──
│ ├──
│ ├──
│ └──
├── README.md # description info
└── package.json # project info
```

[🔝 Back to Top][top]

### Run Step

- Clone this repo

  ```bash
  git clone https://github.com/latipun7/nfs-most-wanted-news.git
  ```

- Install dependencies

  ```bash
  npm install
  ```

- Build ...

[🔝 Back to Top][top]

<!-- Variables -->

[top]: #nfs-most-wanted "top"
[newsapi]: https://newsapi.org/docs/get-started "News API"
[web-components]: https://developer.mozilla.org/en-US/docs/Web/Web_Components "Web Components | MDN"
[vsc-settings]: https://www.notion.so/Editor-Settings-b991e0e781fc40cfa26feaef1d849fd1 "LS' Personal VSCode Settings"
[flaticon]: https://www.flaticon.com/ "Flaticon"
[smashicon-news]: https://www.flaticon.com/authors/smashicons "Smashicons"
[favicon]: https://favicon.io/ "favicon"
[insomnia]: https://insomnia.rest/ "Insomnia Client"
[firefox]: https://www.mozilla.org/en-US/firefox/developer/ "Firefox Developer Edition"
[chrome]: https://www.google.com/chrome/ "Google Chrome"
[vsc]: https://code.visualstudio.com/ "Visual Studio Code"
[webpack]: https://webpack.js.org/ "Webpack"
[ts-jsdoc]: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html#jsdoc-types-are-used-for-type-information "Typescript JSDoc"
[vsc-type-intel]: https://code.visualstudio.com/docs/nodejs/working-with-javascript#_typings-and-automatic-type-acquisition "VSCode Automatic Type Acquisition"
