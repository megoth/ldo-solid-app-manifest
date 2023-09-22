# Solid app manifest ontology

The ontology for Solid app manifest, as used by the Solid apps browser extensions and compatible Solid apps.

## Examples

- [Penny](/examples/penny.ttl): A developer tool by Vincent Tunru
- [Solid Todo](/examples/todo.ttl): A todo app by Arne Hassel
- [Umai](/examples/umai.ttl): A recipe app by Noel De Martin

## Expose manifest to extension

In order to letting the Solid app browser extension know that you're app is compatible with it, you must link to 
a manifest resource that describes your app. To do that, add the following link tag:

```html
<link rel="solid-app-manifest" href="manifest.ttl#solid-app">
```

For users with the browser extension installed, this will prompt a popup that allows them to install the app into the
extension (or ignore it altogether).