import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';

import styles from './Modal.module.css';

const Modal = ({onConfirm, title, message}) => {

	const Backdrop = ({onConfirm}) => {
		return (
			<div className={styles.backdrop} onClick={onConfirm}/>
		);
	};

	const ModalOverly = ({title, message}) => {
		return (
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h2>{title}</h2>
				</header>
				<div className={styles.content}>
					<p>{message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={onConfirm}>Okay</Button>
				</footer>
			</Card>
		);
	};

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={onConfirm}/>,
				document.querySelector('#backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverly title={title} message={message} onClick={onConfirm}/>,
				document.querySelector('#overlay-root')
			)}
		</Fragment>
	);
};

export default Modal;