import { defaultOptions, type LoggerLevel, type LoggerOptions, orderedLevels } from './options';
import { noop } from './utils';

export function makeLogger(namespace: string, options: LoggerOptions = defaultOptions): Console {
  const appliedOptions: Required<LoggerOptions> = { ...defaultOptions, ...options };

  function shouldLog(level: LoggerLevel): boolean {
    return orderedLevels.indexOf(level) <= orderedLevels.indexOf(appliedOptions.level);
  }

  function makeLogFn(level: keyof Pick<Console, LoggerLevel>) {
    return console[level].bind(
      console,
      ...[
        `${level.toUpperCase()}: %c${namespace}`,
        `color: ${appliedOptions.generateHexColorFromNamespace(namespace)}`,
      ],
    );
  }

  function setLogFn(fnLogLevel: LoggerLevel) {
    if (!shouldLog(fnLogLevel)) return noop;
    return makeLogFn(fnLogLevel);
  }

  return {
    ...console,
    error: setLogFn('error'),
    warn: setLogFn('warn'),
    info: setLogFn('info'),
    log: setLogFn('log'),
    debug: setLogFn('debug'),
    trace: setLogFn('trace'),
  };
}
