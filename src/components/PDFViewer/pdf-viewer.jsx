import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './styles/pdf-viewer.css';
import AppBar from './AppBar';

const PDFView = (props) => {
	const { src: url, title, style } = props;
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
				.catch((e) => alert('Something went wrong. Could not fetch file'));
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
	const scale = (val) => setZoom((state) => state * val);

	return (
		<div style={{ ...style }}>
			<AppBar
				nextPage={nextPage}
				prevPage={prevPage}
				skipToPage={skipTo}
				scale={scale}
				title={title}
				pageNumber={currentPage}
				totalPages={pdfRef?._pdfInfo?.numPages}
			/>
			<div className="canvas-container">
				<canvas
					ref={canvasEl}
					onContextMenu={(e) => e.preventDefault()}
				></canvas>
			</div>
		</div>
	);
};

PDFView.prototype = {
	src: PropTypes.string.isRequired,
	styles: PropTypes.object,
};

export default PDFView;
