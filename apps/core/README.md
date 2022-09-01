## Adding a SubApp to the main app

Let's assume that you have a new subApp called `test`

1. You need to add the dependency to [package.json](package.json)

```
"test": "*",
```

2. Import the subApp in the main layout of the core app located at [/src/layout/index.tsx](./src/layout/index.tsx)

```javascript
import { subApp as testSubApp, reducers as testReducers } from 'test';
```

3. In the same file create the dynamic component

```javascript
const test = createDynamicComponent(testSubApp, { ssr: false });
```

4. And add it as a route

```javascript
<Switch>
  ...
  <Route path="/test">
    <test />
  </Route>
</Switch>
```

5. And add subapp reducers to the root reducer, as example:

```javascript
export const reduxReducers = Object.assign({}, libReducers, testReducers);
```

6. And if you want to add this as a menu item, you can add it in the `menu.json` file in [/src/common/](./src/common/menu.json), as example:

```javascript
      ...
			{
				"name": "Sample Apps",
				"icon": "Flash",
				"children": [
					...
					{
						"name": "test",
						"url": "/test"
					}
				]
			}
      ...
```

7. Don't forget to run `yarn install` in the root directory.
