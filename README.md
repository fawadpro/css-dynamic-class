# What is `js-dynamic-class?`

js-dynamic-class is a library for developers that enables them to create custom CSS styles using JavaScript. The createStyles hook automatically generates CSS class names from a styles object, making it easy to create dynamic styles that adapt to component state or specific conditions.

# Installation

To install the project, follow these steps:

1- Clone the repository: git clone https://github.com/fawadpro/js-dynamic-class.git <br />
2- Navigate to the project directory: `cd project-name` <br />
3- Install dependencies: `npm install --save` or `yarn install` <br />
4- Start the development server: npm start or yarn start <br />

```
import { useStyles } from './useStyles';

const styles = {
    myButton: {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px'
    }
}

function MyComponent() {
    const classes = useStyles(styles);
    return <button className={classes.myButton}>Click me</button>
}
```
