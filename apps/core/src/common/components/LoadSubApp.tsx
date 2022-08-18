import React from 'react';
import { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { xarc, lazyLoadSubApp } from 'subapp-react';

class ClientSubApp extends Component {
  constructor() {
    super();
    this.state = { ready: false };
  }
  componentWillUnmount() {
    if (this.elementId) {
      const el = window.document.getElementById(this.elementId);
      if (el) {
        unmountComponentAtNode(el);
      }
    }
  }
  render() {
    const { name, group } = this.props;
    const onLoad = () => this.setState({ ready: true });
    const subapp = xarc.getSubApp(name);
    if (this.props.dynamic) {
      // dynamic means we will create a DOM element with an id for the subapp to render itself into later
      if (!this.elementId) {
        this.elementId = Math.random().toString();
      }
      lazyLoadSubApp({ id: this.elementId, group, name, onLoad });
      let fallback;
      if (subapp && xarc.getBundle(name)) {
        fallback = '';
      } else {
        // TODO: figure out why preact.render doesn't remove the fallback content
        // and what's the solution
        fallback = '';
        // fallback = this.props.fallback || `wait for render from subapp ${name}`;
      }
      // if not, return loadingComponent
      return <div id={this.elementId}>{fallback}</div>;
    } else {
      // the subapp should return its component to us to be directly rendered into the component tree
      if (subapp && xarc.getBundle(name)) {
        // subapp instantiated and bundle available, directly execute it to get its component
        // for the component tree.
        return subapp.inline({ group, props: this.props });
      }
      lazyLoadSubApp({ group, name, onLoad });
      // if not, return loadingComponent
      return this.props.fallback || <div>loading bundle for subapp {name}</div>;
    }
  }
}

export default ClientSubApp;
