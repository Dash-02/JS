import styles from "./NotFoundBlock.module.scss"

const index = () => {
 return (
 <div className={styles.root}>
	 <h1 className={styles.root_title}>Ничего не найдено!</h1>
	 <div>
		<p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
	 </div>
 </div>
 )
}

export default index