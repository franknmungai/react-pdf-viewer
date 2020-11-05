import React from 'react';
// import PDFView from './components/PDFViewer/pdf-viewer';
import PDFViewer from '@bit/frank_ng.react-pdf.pdf-viewer';

function App() {
	return (
		<div className="App">
			<PDFViewer src="https://firebasestorage.googleapis.com/v0/b/smartpass-10216.appspot.com/o/Maths-paper-1-model-1.pdf?alt=media" />
		</div>
	);
}

export default App;
