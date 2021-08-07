import _React from 'react';
import _ReactDOM from 'reactDOM';
import _PropTypes from 'prop-types'; // @types/prop-types is a dependency of `@types/react`
import _jquery from 'jquery';

declare global {
    const React: typeof _React; // the React types _also_ exported by the React namespace, but export them again here just in case.
    const ReactDOM: typeof _ReactDOM;
    const PropTypes: typeof _PropTypes;
    const jQuery: typeof _jquery;
    const $: typeof _jquery;
}