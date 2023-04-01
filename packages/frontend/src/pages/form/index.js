import Head from 'next/head'
import styles from '../../styles/Form.module.css'
import {useRouter} from 'next/router'

export default function Form() {
    const router = useRouter();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            housingExpenses: event.target.housingExpenses.value,
            healthExpenses: event.target.healthExpenses.value,
            entertainmentExpenses: event.target.entertainmentExpenses.value,
            savingsExpenses: event.target.savingsExpenses.value,
            miscellaneousExpenses: event.target.miscellaneousExpenses.value
        }
        router.push({pathname: "/form/results", query: {q: JSON.stringify(data)}});
    }

  return (
      <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main id={styles.main}>
        <h1 id={styles.mainHeader}>Enter your information</h1>
        <form onSubmit={handleSubmit} id={styles.form}>
            
          <label className={styles.formlabel}>Monthly housing expenses:</label>
          <input required name="housingExpenses" className="form-control" id={styles.forminput} type="number" placeholder="$ Your monthly housing expenses"/>
          <label className={styles.formlabel}>Monthly health expenses:</label>
          <input required name="healthExpenses" className="form-control" id={styles.forminput} type="number" placeholder="$ Your monthly health expenses"/>
          <label className={styles.formlabel}>Monthly entertainment expenses:</label>
          <input required name="entertainmentExpenses" className="form-control" id={styles.forminput} type="number" placeholder="$ Your monthly entertainment expenses"/>
          <label className={styles.formlabel}>Monthly savings:</label>
          <input required name="savingsExpenses" className="form-control" id={styles.forminput} type="number" placeholder="$ Your monthly savings"/>
          <label className={styles.formlabel}>Monthly miscellaneous expenses:</label>
          <input required name="miscellaneousExpenses" className="form-control" id={styles.forminput} type="number" placeholder="$ Miscellaneous expenses"/>
            <div id={styles.buttonlayout}>
                <button type="submit" id={styles.submitbutton}>Submit</button>
            </div>
          
        </form>
      </main>
      </>
  )
}