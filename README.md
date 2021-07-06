# Hermione url decorator

Add a query params to url in your integration tests with hermione

### Usage

Include the plugin in your hermione.conf.js:

```js
module.exports = {
    plugins: {
        'url-decorator': {
            query: {
                'your-param': '1'
            }
        }
    }
}
```
