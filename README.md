# NFS: Most Wanted (News)

> News for Search: Most Wanted news you can search here and now.

<div align="center">
  <img
    src="resources/news.svg"
    alt="NFS: Most Wanted (News)"
    title="NFS: Most Wanted (News)"
    height="313px"
  />

<small>Icon made by [Smashicons][smashicon-news] from [www.flaticon.com][flaticon]</small>

</div>

## Table of Contents

- [NFS: Most Wanted (News)](#nfs-most-wanted-news)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
    - [Motivation](#motivation)
  - [How to Interact with This App](#how-to-interact-with-this-app)
  - [Dev Info](#dev-info)
    - [3rd Party API](#3rd-party-api)
    - [Technologies Stack](#technologies-stack)
    - [Directory Structure](#directory-structure)
    - [Wireframes](#wireframes)
    - [Run Step](#run-step)

## Description

This application is for users to search news from all around the world.
API provided by [newsapi.org][newsapi] with [top headlines][top-headlines] endpoint.
Users can search top headlines news with the selected country.

### Motivation

This application created because in this age people want to see the news
what matter to them. Especially nowadays the topic of "corona" is all around
in the world and people just can search news only about corona.

The main purpose this app created is because I want to learn basic skills
of web frontend developer. This app is for completing one of [Dicoding][diconding]'s
[Frontend Web Development Academy][bfwd].

[🔝 Back to Top][top]

## How to Interact with This App

In this main page users can see featured news or just search the news from
search box and news will displayed in the list cards. In this page, users can
select the country and input the keywords to search the top headlines news
in that selected country by the keywords user entered.

## Dev Info

### 3rd Party API

- This app use News API from [newsapi.org][newsapi]

### Technologies Stack

This overall app created with the help of the following **key** techs / apps:

- [Wireframe][wireframe] (for wireframing)
- [Visual Studio Code][vsc] (my favorite code editor)
  - [Great intellisense][vsc-type-intel] with [type cheking][ts-jsdoc]
  - [My personal VSCode settings][vsc-settings]
- [HTML5][html]
- [Javascript][js]
  - Plain vanilla **without JS frontend framework or library**
  - ES6++
  - [Web Components][web-components]
- [SASS/SCSS][sass] ➞ [CSS3][css]
  - [Bulma][bulma] (CSS Framework)
- [Webpack][webpack]
- [Babel][babel]
- [Google Chrome][chrome]
- [Insomnia][insomnia] (test API request and response)
- [Favicon][favicon] (to generate favicon from png)
- [Git][git] and [Github][github]

[🔝 Back to Top][top]

### Directory Structure

<!-- prettier-ignore -->
```md
/                    # app directory
├── configs/         # configurations (webpack, etc)
├── dist/            # build/output directory
├── public/          # template and static files
├── resources/       # resources file (wireframe, etc)
├── src/             # source files
│   ├── components/  # web components
│   ├── styles/      # global styles
│   └── index.js     # webpack's entry point
├── package.json     # project info
└── README.md        # description info
```

[🔝 Back to Top][top]

### Wireframes

![Main Page][main-page]

[🔝 Back to Top][top]

### Run Step

- Clone this repo

  ```bash
  git clone https://github.com/latipun7/nfs-most-wanted-news.git
  ```

- Install dependencies from cloned directory

  ```bash
  cd nfs-most-wanted-news
  npm install
  ```

- Start development server

  ```bash
  npm run dev
  ```

- or build into production ready and start static server

  ```bash
  npm run build
  npm start
  ```

[🔝 Back to Top][top]

<!-- References -->

[top]: #nfs-most-wanted-news "top"
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
[diconding]: https://www.dicoding.com/ "Dicoding Academy"
[bfwd]: https://www.dicoding.com/academies/163 "Learning Fundamental Front-End Web Development"
[wireframe]: https://wireframe.cc/ "Wireframe"
[main-page]: resources/wireframes/1-Main-Page.png "Main Page"
[bulma]: https://bulma.io/ "Bulma CSS Framework"
[top-headlines]: https://newsapi.org/docs/endpoints/top-headlines "NewsAPI top headlines"
[babel]: https://babeljs.io/ "BabelJS"
[git]: https://git-scm.com/ "Git"
[github]: https://github.com/latipun7/nfs-most-wanted-news "Github Repo"
[html]: https://developer.mozilla.org/en-US/docs/Web/HTML "HTML References"
[js]: https://developer.mozilla.org/en-US/docs/Web/JavaScript "JS References"
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS "CSS References"
[sass]: https://sass-lang.com/ "Sass"
