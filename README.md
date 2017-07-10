# Webpack2_ReactJs
Webpack 2 split in multiple config files and ReactJs

This is a simple example of ReactJS using Redux Thunk and Redux Saga

# Getting started

## Install the repo with npm

```sh
$ npm install
```
## Using Redux Thunk

If you want to run the project using Redux thunk you can just start the app
as by default is using thunk

```sh
$ npm run start
```

## Using Redux Saga

To use Redux Saga you will need to make changes in 2 files

#### `src/js/HOC/ComponentToRender.js`
and
#### `src/js/components/Home.jsx`

In
#### `src/js/HOC/ComponentToRender.js`
Uncomment the activeStore = SagaStore and comment the line where activeStore=Store

```javascript
...
// const activeStore = Store;
const activeStore = SagaStore;

```

In
#### `src/js/components/Home.jsx`
Comment line this.props.fetchApodData(); and uncomment line this.props.fetchApodDataSaga();

```javascript
...
componentDidMount() {
  // If the data is NOT fetched then go
  if (!this.props.dataFetched) {
    // With REDUX THUNK
    // this.props.fetchApodData();

    // With REDUX SAGA
    this.props.fetchApodDataSaga();
  }
}
  ...
```

Then run the project

```sh
$ npm run start
```
