import { BruttoPipe } from './brutto.pipe';

describe('BruttoPipe', () => {
  let pipe: BruttoPipe;

  beforeEach(() => {
    pipe = new BruttoPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should calculate default brutto', () => {
    expect(pipe.transform(100)).toEqual(119);
  });

  it('should calculate explicit tax param correctly', () => {
    expect(pipe.transform(100, 10)).toBeCloseTo(110, 4);
  });
});
