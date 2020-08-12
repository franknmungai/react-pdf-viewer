# react-pdf-viewer

A React component for rendering PDF files.

This component is available on [Bit](https://bit.dev/frank_ng/react-pdf/pdf-viewer).

Installation

Npm

### `npm i @bit/frank_ng.react-pdf.pdf-viewer`

Yarn

### `yarn add @bit/frank_ng.react-pdf.pdf-viewer`

Bit

### `bit import frank_ng.react-pdf/pdf-viewer`

### Example usage

```
import React from 'react';
import PDFViewer from '@bit/frank_ng.react-pdf.pdf-viewer';

function App() {
    return (
        <div className="App">
            <PDFViewer
                src="https://firebasestorage.googleapis.com/v0/b/smartpass-10216.appspot.com/o/Maths-paper-1-model-1.pdf?alt=media"

                styles={{}}
            />
        </div>
    );
}

export default App;

```

### Props

`src` to specify the source URL of the PDF

`styles` to pass custom styles as a JavaScript object

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
