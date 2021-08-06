import _jquery from 'jquery';

declare global {
    const jQuery: typeof _jquery;
    const $: typeof _jquery;
}