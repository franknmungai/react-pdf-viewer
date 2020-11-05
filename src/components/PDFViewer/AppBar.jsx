import React from 'react';
import PropTypes from 'prop-types';
import './styles/AppBar.css';

const AppBar = (props) => {
	// prettier-ignore
	const { title, nextPage, prevPage, skipToPage, scale, pageNumber, totalPages } = props;

	// prettier-ignore
	const controls = [
		{ name: 'Previous page Page', src: 'metro/26/000000/long-arrow-left.png', onClick: prevPage },
		{ name: 'Next Page', src: 'metro/26/000000/long-arrow-right.png', onClick: nextPage },
		{ name: 'Zoom in', src: 'ios-filled/26/000000/zoom-in.png', onClick: scale.bind(this, 1.2) },
		{ name: 'Zoom out', src: 'ios/26/000000/zoom-out.png', onClick: scale.bind(this, 0.8) },
	];
	return (
		<div className="app-bar">
			<div className="content flex-container">
				<div className="title">{title ?? 'Document Title'}</div>
				<div className="page-no">
					Page{' '}
					<span contentEditable onKeyPress={skipToPage}>
						{pageNumber}
					</span>{' '}
					of {totalPages || 'loading...'}
				</div>
				<div className="controls">
					{controls.map((item) => (
						<div className="tooltip m-1" onClick={item.onClick} key={item.name}>
							<img src={'https://img.icons8.com/' + item.src} alt={item.name} />
							<div className="tooltiptext">{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

AppBar.prototype = {
	title: PropTypes.string,
	nextPage: PropTypes.func.isRequired,
	prevPage: PropTypes.func.isRequired,
	skipToPage: PropTypes.func.isRequired,
	scale: PropTypes.func.isRequired,
	pageNumber: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
};
export default AppBar;
