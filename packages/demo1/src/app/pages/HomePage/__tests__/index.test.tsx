import { render } from '@testing-library/react';

describe('default render', () => {
  it('should have a greeting as the title', () => {
    const { getByText } = render(<div>Welcome</div>);
    expect(getByText(/Welcome/gi)).toBeTruthy();
  });
});
