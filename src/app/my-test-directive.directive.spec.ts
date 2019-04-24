import { MyTestDirectiveDirective } from './my-test-directive.directive';

describe('MyTestDirectiveDirective', () => {
  it('should create an instance', () => {
    const directive = new MyTestDirectiveDirective();
    expect(directive).toBeTruthy();
  });
});
