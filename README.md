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
