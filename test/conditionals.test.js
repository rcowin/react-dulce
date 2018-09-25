
import { createConditionals } from '../src';

describe('createConditionals', () => {
  const children = 'child';

  it('should support name and not.name', () => {
    const Is = createConditionals({
      positive: true
    })
    expect(Is.positive({ children })).toEqual(children);
    expect(Is.not.positive({ children })).toEqual('');
  })

  it('should support multiple conditionals', () => {
    const Is = createConditionals({
      positive: true,
      negative: false
    })
    expect(Is.positive({ children })).toEqual(children);
    expect(Is.negative({ children })).toEqual('');
  })
});
