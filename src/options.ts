import { generateHexColorFromNamespace } from './color';

export type LoggerLevel = 'error' | 'warn' | 'info' | 'log' | 'debug' | 'trace';

export type LoggerOptions = {
  level?: LoggerLevel;
  generateHexColorFromNamespace?: (namespace: string) => string;
};

export const orderedLevels: LoggerLevel[] = ['error', 'warn', 'info', 'log', 'debug', 'trace'];
export const defaultOptions: Required<LoggerOptions> = {
  level: 'info',
  generateHexColorFromNamespace,
};
