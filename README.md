# React Redux Example

## 1. Create a reducer function

create a reducer function that takes 2 parametes. First one is initial state. The second one is an object having type and payload.

```
export const myReducerFn = (state = {}, {type,payload}) => {
    switch(type) {
        case 'SOME_ACTION'"
            return {...state, payload: UPDATED_DATE}
    }
}
```

## 2. Combine your reducers

Combine your multiple reducers to get a single reducer

```
const reducer = combineReducers({
    myReducer: myReducerFn
})

export default reducer;
```

## 3. Create store

Create a store with reducer

```
const store = createStore(reducer, {}, REDUX_DEV_TOOL_EXTENSION)
export default store;
```

## 4. Wrap your component with Provider

Wrap your component, mostly the entire App component with the Provider

```
    <Provider store={store}>
        <App/>
    </Provider>
```

## 5. use useSelector() to read value and useDispatch() to set value

```
    const counter = useSelector(store => store.myReducer.counter)
```

use `counter` where needed. When updating the `counter` value, use dispatch

```
    const dispatch = useDispatch();
    dispatch({type:'ACTION_TYPE', payload: NEW_COUNTER_VALUE})
```
