import Card from './Card';

import styles from './Modal.module.css';
import buttonStyles from './Button.module.css';

const ConfirmDeleteModal = ({onConfirm, cancelBtn, deleteApp, applications}) => {
	return (
		<div className={styles.backdrop}>
			<div onClick={onConfirm}>
				<Card className={styles.modal}>
					<header className={styles.header}>
						<h2>Delete</h2>
					</header>
					<div className={styles.content}>
						<p>Are you sure you want to delete this application?</p>
					</div>
					<footer className={styles.actions}>
						<button
							className={buttonStyles.button}
							style={{marginRight: '10px', backgroundColor: 'red'}}
							onClick={() => {
								return applications.map(app => {
									deleteApp(app._id);
								});
							}}
						>Delete
						</button>
						<button className={buttonStyles.button} onClick={cancelBtn}>Cancel</button>
					</footer>
				</Card>
			</div>
		</div>
	);
};

export default ConfirmDeleteModal;