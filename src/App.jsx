import styles from './styles'

const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
    {/* wrapping navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
          <div className={`${styles.boxWidth}`}>
              Navbar
          </div>
      </div>

    {/* Main part of app */}
    <div className={`bg-primary ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`}>
            Hero
          </div>
    </div>

    {/* Rest of the app */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`} >
          <div className={`${styles.boxWidth}`}>
            Stats
            Business
            Billing
            CardDeal
            Testimonials
            Clients
            CTA
            Footer
          </div>
    </div>

    </div>

  );


export default App