# react-overflow

A React component that detects when it's overflowed by its content.

## Installation

Install `react-overflow` using [npm](https://www.npmjs.org/):

```
npm install --save react-overflow
```

## Usage

```jsx
import { OverflowDetector } from 'react-overflow';

function handleOverflowChange(isOverflowed) {
  console.log(isOverflowed);
}

<OverflowDetector
  onOverflowChange={handleOverflowChange}
  style={{ width: '100px' }}
>
  <div style={{ width: '200px' }}>Overflowing</div>
</OverflowDetector>
```

## License

[MIT](https://github.com/nickuraltsev/react-overflow/blob/master/LICENSE)
