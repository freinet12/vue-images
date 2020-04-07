# vue-images

## Project setup
```
npm install
```
### Imgur
```
1) create an imgur account 
https://imgur.com/
```
```
2) register a new application 
https://api.imgur.com/oauth2/addclient

for Authorization type, select the first option:
  OAuth 2 authorization with a callback UR
  
for the Authorization Callback URL, use : 
  http://localhost:8080/oauth2/callback
```

```
3) create a .env file and add your imgur Client ID and Client Secret to the following variables:

  VUE_APP_IMGUR_CLIENTID=your-client-id
  VUE_APP_IMGUR_SECRET=your-client-secret
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
