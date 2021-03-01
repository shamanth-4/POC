import { getGlobalObj } from './index';

describe('Window global variable helper ', () => {
  it('should get window scope global variable', () => {
    global.someGlobalVar = 'SomeGlobal';
    expect(getGlobalObj('someGlobalVar')).toEqual('SomeGlobal');
  });

  it('should get window scope global variable', () => {
    global.someGlobalVar = false;
    expect(getGlobalObj('someGlobalVar')).toEqual(false);
  });

  it('should return null if window scope global variable is undefined', () => {
    expect(getGlobalObj('someGlobalVarUndefined')).toEqual(null);
  });
});
