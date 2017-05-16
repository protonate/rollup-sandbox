export function Promise() {
  return Window.Promise || { polyfill: 'promise' };
}
