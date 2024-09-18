const root = document.querySelector('.root')
const h1 = React.createElement('h1',{},'Hi')
const rootElementForReact = ReactDOM.createRoot(root)
rootElementForReact.render(h1)