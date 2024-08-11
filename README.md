# Vanilla Space Logger 🪵

Welcome to **Vanilla Space Logger**!

This is a simple yet handy logging utility for JS/TS developers who love a bit of color and organization in their console logs.
With **Vanilla Space Logger**, you can easily organize your logs by namespaces and quickly read through them thanks to the custom color coding.
Logs deserve some TLC too, why should they be messy and ignored? 😉

Note: this package is designed to help with quick PoC and simple applications rather than large systems in production.

## 🚀 Features

- 🍦 **Vanilla:** Leverages the native `console` API: (`error`, `warn`, `info`, `log`, `debug` and `trace`).
  No additional dependencies

- 🎨🚀 **Space:** Organize your logs by grouping them under specific namespaces.
  Easily extend these namespaces into sub namespaces. No more hunting for relevant logs!

- 🪵 **Logger**: Choose which level of logs to be printed out.

Note: string substitution e.g. `Age: %d` is not supported in this mvp/initial version.
Feel free to file an issue/upvote the feature on GitHub.

## 📦 Installation

### Yarn

```shell
yarn add colorful-logger
```

### PNPM

```shell
pnpm install colorful-logger
```

### NPM

```shell
npm install colorful-logger
```

## 🛠️ Usage

Here’s a quick example to give you an overview:

```javascript
import { makeLogger } from 'vanilla-space-logger';

// Create a logger instance, the printed color is derived from the namespace string
const logger = makeLogger('TodoList');

logger.error('Sample error message', 123, 456);
// prints `TodoList:Sample error message 123 456`
logger.warn('Sample warning message');
logger.info('Sample info message');
logger.log('Sample log message');
logger.debug('Sample debug');
logger.trace('Sample trace');

const childLogger = logger.extend('API');

childLogger.error('HTTP error message');
// prints `TodoList:API:HTTP error message`
```

## 🔧 Options

```javascript
const options: LoggerOptions = {
  // lower log level to print
  level: 'info',
  // hash function returning a color/hex based on the namespace value
  generateHexColorFromNamespace: (namespace: string) => '#123456',
};

makeLogger('TodoList', options);
```
