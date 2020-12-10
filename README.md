# How to set up project

1. Bootstrap workspace. Run `$ yarn boot`
2. Add a new component. Run `$ yarn create-pkg`
3. To build all components. Run `$ yarn build`
4. To start with storybook. Run `$ yarn storybook`
5. To inscrease version.
   1. Commit new change
   2. Run `$ yarn publish`
      1. Auto trigger `$ yarn prerelease`
      2. Auto trigger `$ lerna publish` -> inscrease version
      3. git Pushing tags...
      4. publish Publishing packages to npm...

## TODO
tyme-004944577623.d.codeartifact.eu-west-1.amazonaws.com

<!-- npm config set registry=https://tyme-004944577623.d.codeartifact.eu-west-1.amazonaws.com/npm/react-ui/:_authToken=eyJ2ZX... -->

aws codeartifact login --profile taile --tool npm \
--domain "tyme" --domain-owner "004944577623" \
--repository "react-ui-kit"

aws codeartifact get-authorization-token \
--domain "tyme" --domain-owner "004944577623" \
--query authorizationToken --output text --profile taile1

### Set registry

`$ npm config set registry https://registry.npmjs.org/`
`$ npm login`
- type username   : phuctaile
- type password   :
- type email      :