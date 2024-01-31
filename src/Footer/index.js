import './styles.css';

const Footer = ({showFooter, setShowFooter}) => {
  const handleShoeFooter=()=>{
    setShowFooter({footer:"disclaimer-premium setOff",
                    main:"offer__scroll-containerAll"});
  }
  return (
        <footer className={showFooter.footer}>
          <div className="text">
            <p className="disclaimer-premium__title">Testar o Premium de graça</p>
            <p className="disclaimer-premium__subtitle">
              Inscreva-se para curtir música ilimitada e podcasts só com alguns
              anúncios. Não precisa de cartão de crédito.
            </p>
          </div>
          <div className="button">
            <button onClick={handleShoeFooter} type="button">Inscreva-se grátis</button>
          </div>
        </footer>

  )
};

export default Footer;