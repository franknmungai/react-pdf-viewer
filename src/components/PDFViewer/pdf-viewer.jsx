import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const PDFView = (props) => {
	const { src: url, initialZoom } = props;
	const [pdfRef, setPdf] = useState();
	const [zoom, setZoom] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const canvasEl = useRef();

	useEffect(() => {
		async function setup() {
			const pdfjs = await import('pdfjs-dist/build/pdf'); // eslint-disable-next-line
			await import('pdfjs-dist/build/pdf.worker.entry');

			pdfjs
				.getDocument(url)
				.promise.then((pdf) => {
					setPdf(pdf);
				})
				.catch((e) =>
					alert('Something went wrong, check your internet connection')
				);
		}
		setup();
	}, [url]);

	const render = () => {
		if (!pdfRef) return;
		pdfRef
			.getPage(currentPage)
			.then((page) => {
				const canvas = canvasEl.current;

				const ctx = canvas.getContext('2d');

				const viewport = page.getViewport({ scale: zoom });

				canvas.width = viewport.width;
				canvas.height = viewport.height;

				page.render({
					canvasContext: ctx,
					viewport,
				});
			})
			.catch((e) => alert(e));
	};

	useEffect(render, [currentPage, zoom, pdfRef]);

	const nextPage = () => {
		if (!pdfRef) return;
		if (currentPage >= pdfRef._pdfInfo.numPages) {
			return;
		}
		setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (!pdfRef) return;
		if (currentPage === 1) return;

		setCurrentPage(currentPage - 1);
	};
	const skipTo = (e) => {
		const pageRequest = +e.target.textContent; //coerce to int

		if (isNaN(pageRequest) || !pdfRef) return;
		if (pageRequest > pdfRef._pdfInfo.numPages || pageRequest < 1) return;

		setCurrentPage(pageRequest);
	};
	const scale = (val) => setZoom(val);

	return (
		<React.Fragment>
			<AppBar
				nextPage={nextPage}
				prevPage={prevPage}
				skipTo={skipTo}
				scale={scale}
			/>
			<div className="canvas-container">
				<canvas
					ref={canvasEl}
					onContextMenu={(e) => e.preventDefault()}
				></canvas>
			</div>
		</React.Fragment>
	);
};

export const AppBar = () => {
	return <div>AppBar</div>;
};

PDFView.prototype = {
	src: PropTypes.string.isRequired,
};
// export const pageControls = PDFView().PageControls;
// export default PDFView().Document;

export default PDFView;
