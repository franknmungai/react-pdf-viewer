import React from 'react';
import PDFView from './components/PDFViewer/pdf-viewer';

function App() {
	return (
		<div className="App">
			<PDFView src="https://firebasestorage.googleapis.com/v0/b/smartpass-10216.appspot.com/o/Maths-paper-1-model-1.pdf?alt=media" />
		</div>
	);
}

export default App;
