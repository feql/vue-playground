# vue-playground
A vue based sandbox UI interface for creating and experimeting queries for your beeql serverless application

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Roadmap

* Configuration Tab
    
    -> baseurl
    
    -> Token
        
        - gen token btn
        
        - popup to login 

* Queries Tab
    -> Saved queries 
    -> Query Input
    -> Query Output
    -> Errors Tab

### Tasks

* Navigational Aspect Rows
 
  When clicked it should open the next associated panel

### Highlights - the subtle things you cannot miss

* ***Dynamically Rendering Icon***
  
  //nyd: the part where we create a component on the fly

* ***Scrolling A flex-grow div***
  
  //nyd: Making the aspects scrollable using flex

* ***Dynamic corners of panels***

  //nyd: When the next panel appears, the corners of the panels have to change the rounding where necessary

* ***The History navigational breadcrumps***

  //nyd: These keep trcuk of the order of opening panels and clearly some history, like a binary tree algorithm

