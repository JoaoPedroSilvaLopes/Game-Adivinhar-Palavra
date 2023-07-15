import { get, remove, set } from './local-storage';

describe('Local Storage Tests', () => {
  beforeAll(() => {
    set({ key: 'value', value: 'Test' });
  });

  it('Verificar se o get captura ou não um valor', () => {
    const value = get({ key: 'value' });
    const valueTwo = get({ key: 'valueTwo' });

    expect(value).toBe('Test');
    expect(valueTwo).not.toBe('Test');
  });

  it('Verificar se o remove remove ou não um valor', () => {
    remove({ key: 'value' });
    remove({ key: 'valueTwo' });

    const value = get({ key: 'value' });
    const valueTwo = get({ key: 'valueTwo' });

    expect(value).not.toBe('Test');
    expect(valueTwo).not.toBe('Test');
  });
});
