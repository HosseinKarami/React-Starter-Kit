# React Starter Kit
### Install
```
yarn install
```
##### Command Setup
In the project directory, you can run:
```
yarn start or yarn build
```
Runs the app in the development mode.
Open http://localhost:9000 to view it in the browser.

The page will reload if you make edits.
```
yarn build:prod
```
Builds the app for production to the app folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified.
Your app is ready to be deployed!

See the section about [**deployment**](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment) for more information.
### Dynamic copyright/project banners

The package.json includes the dependencies for the project as well as information about the project. Entries here will be dynamically appended to the top of generated `.css` and` .js` files, by default it ships with FastShell's banner:
```
/*!
 * +-----------------------------+
 * ReactStarterKit               *
 * ReactJs - React Starter Kit   *
 * @author Hossein Karami        *
 * https://hosseinkarami.com     *
 * Copyright 2017 MIT licensed.  *
 * +-----------------------------+
 */
```
#### Scaffolding
```
ReactStarterKit
├── README.md
├── node_modules
├── webpack.config.js
├── postcss.config.js
├── package.json
├── .gitignore
├── app
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── js
│   ├── favicon.ico
│   └── index.html
│   
└── src
    └── app
    │    ├── components
    │    └── utils
    └── scss
    │    ├── mixins
    │    ├── modules
    │    ├── partials
    │    ├── vendor
    │    └── style.scss
    └── index.js
    └── favicon.ico
```
## License
**The MIT License (MIT)**

Copyright © 2017 Hossein Karami <hi@hosseinkarami.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.