/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const OBJECT_STYLE = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: -1,
};

export default class ResizeDetector extends Component {
  static propTypes = {
    onResize: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
    };
    this.setDOMElement = this.setDOMElement.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    this.setState({
      isMounted: true,
    });
  }

  componentWillUnmount() {
    if (this.domElement.contentDocument) {
      this.domElement.contentDocument.defaultView.removeEventListener(
        'resize',
        this.props.onResize
      );
    }
  }

  setDOMElement(domElement) {
    this.domElement = domElement;
  }

  handleLoad() {
    this.domElement.contentDocument.defaultView.addEventListener(
      'resize',
      this.props.onResize
    );
  }

  render() {
    return (
      <object
        style={OBJECT_STYLE}
        type="text/html"
        data={this.state.isMounted ? 'about:blank' : null}
        ref={this.setDOMElement}
        onLoad={this.handleLoad}
      />
    );
  }
}
