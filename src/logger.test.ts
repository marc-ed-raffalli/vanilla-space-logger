import { makeLogger } from './logger';
import { noop } from './utils';

describe('Logger', () => {
  let logger: Console;

  describe('makeLogger', () => {
    beforeEach(() => {
      jest.spyOn(console, 'error').mockImplementation(noop);
      jest.spyOn(console, 'warn').mockImplementation(noop);
      jest.spyOn(console, 'info').mockImplementation(noop);
      jest.spyOn(console, 'log').mockImplementation(noop);
      jest.spyOn(console, 'debug').mockImplementation(noop);
      jest.spyOn(console, 'trace').mockImplementation(noop);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    function assertCalledWithMessage(fn: unknown, message: string) {
      expect(fn).toHaveBeenCalledWith(expect.any(String), expect.any(String), message);
    }

    describe('Logging level', () => {
      function printAllLevels() {
        logger.error('Some error');
        logger.warn('Some warn');
        logger.info('Some info');
        logger.log('Some log');
        logger.debug('Some debug');
        logger.trace('Some trace');
      }

      it('logs from default "info" level', () => {
        // given
        logger = makeLogger('test');

        // when
        printAllLevels();

        // then
        assertCalledWithMessage(console.error, 'Some error');
        assertCalledWithMessage(console.warn, 'Some warn');
        assertCalledWithMessage(console.info, 'Some info');
        expect(console.log).not.toHaveBeenCalled();
        expect(console.debug).not.toHaveBeenCalled();
        expect(console.trace).not.toHaveBeenCalled();
      });

      it('logs from given "error" level', () => {
        // given
        logger = makeLogger('test', { level: 'error' });

        // when
        printAllLevels();

        // then
        assertCalledWithMessage(console.error, 'Some error');
        expect(console.warn).not.toHaveBeenCalled();
        expect(console.info).not.toHaveBeenCalled();
        expect(console.log).not.toHaveBeenCalled();
        expect(console.debug).not.toHaveBeenCalled();
        expect(console.trace).not.toHaveBeenCalled();
      });

      it('logs from given "trace" level', () => {
        // given
        logger = makeLogger('test', { level: 'trace' });

        // when
        printAllLevels();

        // then
        assertCalledWithMessage(console.error, 'Some error');
        assertCalledWithMessage(console.warn, 'Some warn');
        assertCalledWithMessage(console.info, 'Some info');
        assertCalledWithMessage(console.log, 'Some log');
        assertCalledWithMessage(console.debug, 'Some debug');
        assertCalledWithMessage(console.trace, 'Some trace');
      });
    });
  });
});
