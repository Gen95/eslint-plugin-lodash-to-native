# Lodash-to-native

Плагин находит использование функции `_.map`, например `_.map(collection, fn)`, и, предлагает заменить его на использование нативного `Array#map`.

Examples of **incorrect** code for this rule:

```js

_.map(arr, function (item) {return item});

```

Examples of **correct** code for this rule:

```js

arr.map(function (item) {return item});

```

### Options

- При выполнении "run gulp" находит функции `_.map` и уведомляет о том, что их можно заменить
- При выполнении "run gulp --fix" автоматически производит замену

## Использованные инструменты:

- **Yeoman** и **renerator-eslint** для автоматической настройки скелета плагина
- **https://astexplorer.net** для отображения целевой функции в виде AST и предварительного написания правила
