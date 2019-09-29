# Lodash-to-native

Плагин находит использование функции `_.map`, например `_.map(collection, fn)`, и, предлагает заменить его на использование нативного `Array#map`.

Пример **некорректного** кода для правила:

```js

_.map(arr, function (item) {return item});

```

Пример **корректного** кода для правила:

```js

arr.map(function (item) {return item});

```

### Установка
```js
npm install -S github.com/Gen95/eslint-plugin-lodash-to-native.git
```

и подключение в  .eslintrc.js так:
```js
"plugins": [
"lodash-to-native"
],
"rules": {
"lodash-to-native/map": "warn"
},
```

### Опции

- При выполнении "run gulp" находит функции `_.map` и уведомляет о том, что их можно заменить
- При выполнении "run gulp --fix" автоматически производит замену

## Использованные инструменты:

- **Yeoman** и **renerator-eslint** для автоматической настройки скелета плагина
- **https://astexplorer.net** для отображения целевой функции в виде AST и предварительного написания правила
