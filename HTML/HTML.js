/* globals ENVIRONMENT */
/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 当前环境
function renderEnvironment() {
  const innerHtml = `window.ENVIRONMENT = '${process.env.NODE_ENV}'`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

// 把store.getState()存进window.INITIAL_STATE
function renderInitialState(initialState) {
  const innerHtml = `window.INITIAL_STATE = ${JSON.stringify(initialState)}`;
  return <script dangerouslySetInnerHTML={{ __html: innerHtml }} />;
}

const HTML = ({ content, initialState }) => {
  return (
    <html lang="en">
      <head>
        <title>Universal React</title>
      </head>
      <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          {/* {renderEnvironment()} */}
          {initialState && renderInitialState(initialState)}
          {/* {head.script.toComponent()} */}
          <script src='/bundle.js' />
      </body>
    </html>
)};

HTML.propTypes = {
  content: PropTypes.string.isRequired,
  initialState: PropTypes.object.isRequired
};

export default HTML;