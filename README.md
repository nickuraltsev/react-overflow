# react-overflow

[![npm version](https://badge.fury.io/js/react-overflow.svg)](https://badge.fury.io/js/react-overflow)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nickuraltsev/react-overflow/master/LICENSE)

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
