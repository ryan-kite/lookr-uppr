# lookr-uppr

> A sweet no fluff reverse phone lookup app.
> See working demo. https://ryan-kite.com/lookr-uppr/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### How to obtain your own developer API Key (required)
1. Go here: https://pro.whitepages.com/developer/
2. Choose the Global Reverse Phone API > Get a Free API Key
3. Create account > login here: https://pro.lookup.whitepages.com/sign_in
4. Boom! you should now have access the free API Key

### How to import your API Key to the app
1. Create a file called *config.js* in the project root (next to main.js)
2. Copy, paste and save this export statement to __config.js__ with your new API Key: 
```javascript
export default {
  key: 'replace-this-with-your-own-api-key'
}
```
3. You're done!