<h1 align="center">Welcome to SkyDB 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.2-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/ManuelMaciel/skyDB#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ManuelMaciel/skyDB/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ManuelMaciel/skyDB/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL--3.0" src="https://img.shields.io/github/license/ManuelMaciel/skydb" />
  </a>
  <a href="https://twitter.com/m\_maciel6" target="_blank">
    <img alt="Twitter: m_maciel6" src="https://img.shields.io/twitter/follow/m_maciel6.svg?style=social" />
  </a>
</p>

> a JSON powered database (yes, another one)
so far you can create templates (kind of like documents), create data, search, filter, update and remove

### 🏠 [Homepage](https://github.com/ManuelMaciel/skyDB#readme)
<p align="center">
    <a href="https://ibb.co/mbBpbxK"><img src="https://i.ibb.co/mbBpbxK/DB-1.png" alt="DB-1" border="0"></a>
</p>

## Install

```sh
npm install
```

## Usage


* *create model*
- parameters: `model: model name`
```js
import skyDB from 'skydb/lib'
skyDB.connection('users');
```

*create records*
- parameters: `model: model name, options: {data to be saved, pass as an object}`
```js
import skyDB from 'skydb/lib'
skyDB.create('users', { 'fieldName': 'manuel', 'age': 18 })
```

* *get data by id*
- parameters: `model: model name, id: record id`
```js
import skyDB from 'skydb/lib'
const getDataById = async () => {
   const value = await skyDB.getById('users','v2dw1efZ5a')
   console.log(value)
}

getDataById()
```

* *get all data*
- parameters: `model: model name, options: {order: [DESC or ASC, the name of the model data key], where: {the name of the model data key: value you want to find}}`
```js
import skyDB from 'skydb/lib'
const getAllData = async () => {
 const value = await skyDB.getAll('users', {order: ['DESC', 'fieldName'], where: {'fieldName': 'manuel'}})
 console.log(value)
}
getAllData()

```

* *update records*
- parameters: `model: model name, id: record id, options: {value you want to find want to find}`

```js
import skyDB from 'skydb/lib'
const updateData = async () => {
 const value = await skyDB.update('users', 'v2dw1efZ5a', {'fieldName': 'manuel'})
 console.log(value)
}

updateData()
```

* *remove records*
- parameters: `model: model name, id: id of the record to be deleted`
```js
import skyDB from 'skydb/lib'
const removeData = async () => {
 const value = await skyDB.remove('users', 'v2dw1efZ5a')
 console.log(value)
}

removeData()
```

## Run tests

```sh
npm run test
```

## Author

👤 **ManuelMaciel**

* Website: manuelmaciel.vercel.app
* Twitter: [@m\_maciel6](https://twitter.com/m\_maciel6)
* Github: [@ManuelMaciel](https://github.com/ManuelMaciel)
* LinkedIn: [@manuelmaciel7](https://linkedin.com/in/manuelmaciel7)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ManuelMaciel/skyDB/issues). You can also take a look at the [contributing guide](https://github.com/ManuelMaciel/skyDB/blob/master/CONTRIBUTING.md).
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.thesynthwaver.com/"><img src="https://avatars.githubusercontent.com/u/57499868?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Diego Prestes</b></sub></a><br /><a href="#infra-DiegoPrestesGit" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/ManuelMaciel/skyDB/commits?author=DiegoPrestesGit" title="Tests">⚠️</a> <a href="https://github.com/ManuelMaciel/skyDB/commits?author=DiegoPrestesGit" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [ManuelMaciel](https://github.com/ManuelMaciel).<br />
This project is [GPL--3.0](https://github.com/ManuelMaciel/skyDB/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
