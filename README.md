# Connex Environment

> The landing page leads user to download Connex powered VeChain wallets.

[View](https://env.vechain.org/)

## VeChain App Bootstrapping

VeChain apps are usually web apps. On app load, you always need to detect Connex component. If Connex is not available, you may instruct people to setup Connex environment.

To simplify these steps, simply perform redirection: 

```javascript
if(!window.connex) {
    location.href = 'https://env.vechain.org/r/#' + encodeURIComponent(location.href)
}
```

Additionally, network can be specified:

```javascript
if(!window.connex) {
    // the app prefers running on test net
    location.href = 'https://env.vechain.org/r/#/test/' + encodeURIComponent(location.href)
}
```
