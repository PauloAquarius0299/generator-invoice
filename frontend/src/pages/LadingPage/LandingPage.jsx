import './LandingPage.css'
import { assets } from '../../assets/assets';
import Logo from '../../components/Logo'
import {Facebook, Twitter, Instagram }from 'lucide-react'

const LandingPage = () => {
  return (
    <>
      <header id="hero" className="hero-section text-white text-center bg-primary ">
        <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
          <div className="row">
            <div className="col-lg-9 col-md-10 mx-auto">
              <h1 className="display-3 fw-bold mb-4">
              Faturamento sem esforço. Resultados profissionais.
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                O QuickInvoice ajuda você a criar faturas em segundos.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-lg btn-warning fw-bold rounded-pill">
                  Gerar seu primerio faturamento
                </button>
                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section>
  <div className="container py-5">
    <div className="row g-4">
      
      {/* Card 1 */}
      <div className="col-md-6 col-lg-3 d-flex">
        <div className="card h-100 shadow-sm border-0 text-center flex-fill bg-warning bg-opacity-25 text-white">
          <div className="card-img-top-container d-flex justify-content-center pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Eo_circle_yellow_number-1.svg/2048px-Eo_circle_yellow_number-1.svg.png" 
              alt="PDF Icon"
              className="rounded-circle img-fluid"
              width={80}
              height={80}
            />
          </div>
          <div className="card-body bg-white p-4">
            <h5 className="card-title fw-bold mb-2 fs-5 text-dark-emphasis">Enter Details</h5>
            <p className="card-text text-muted small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="card h-100 shadow-sm border-0 text-center flex-fill bg-danger bg-opacity-25 text-white">
          <div className="card-img-top-container d-flex justify-content-center pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Eo_circle_red_number-2.svg/2048px-Eo_circle_red_number-2.svg.png" 
              alt="Settings Icon"
              className="rounded-circle img-fluid"
              width={80}
              height={80}
            />
          </div>
          <div className="card-body bg-white p-4">
            <h5 className="card-title fw-bold mb-2 fs-5 text-dark-emphasis">Choose Template</h5>
            <p className="card-text text-muted small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, adipisci!.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-md-6 col-lg-3 d-flex">
        <div className="card h-100 shadow-sm border-0 text-center flex-fill bg-success bg-opacity-25 text-white">
          <div className="card-img-top-container d-flex justify-content-center pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Eo_circle_green_number-3.svg/2048px-Eo_circle_green_number-3.svg.png" 
              alt="Support Icon"
              className="rounded-circle img-fluid"
              width={80}
              height={80}
            />
          </div>
          <div className="card-body bg-white p-4">
            <h5 className="card-title fw-bold mb-2 fs-5 text-dark-emphasis">Preview Invoice</h5>
            <p className="card-text text-muted small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, quasi. Deserunt et cum neque eaque eos aliquam.
            </p>
          </div>
        </div>
      </div>

       <div className="col-md-6 col-lg-3 d-flex">
        <div className="card h-100 shadow-sm border-0 text-center flex-fill bg-info bg-opacity-25 text-white">
          <div className="card-img-top-container d-flex justify-content-center pt-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eo_circle_blue_number-4.svg/1024px-Eo_circle_blue_number-4.svg.png" 
              alt="Support Icon"
              className="rounded-circle img-fluid"
              width={80}
              height={80}
            />
          </div>
          <div className="card-body bg-white p-4">
            <h5 className="card-title fw-bold mb-2 fs-5 text-dark-emphasis">Download e Save</h5>
            <p className="card-text text-muted small">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non consequuntur itaque aperiam fuga animi .
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
      </section>

      <section id='#features' className='py-5'>
        <div className='container'>
          <h2 className='text-center mb-5 display-5 fw-bold'>
            Porque escolher QuickInvoice?
          </h2>

          {/* Seção 1 */}
          <div className='row align-items-center gy-4 mt-5 flex-row-reverse'>
            <div className='col-md-6'>
              <img 
              src={assets.lading1}
              className='img-fluid rounded shadow-lg'
              alt='Time'
              //onError={(e) => } 
              />
            </div>
            <div className="col-md-6">
              <h3 className='fw-bold mx-2'>
                Easy to fill invoice details
              </h3>
              <p className='text-muted lead fs-6 mx-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maiores!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique voluptatum velit tempore incidunt nesciunt commodi totam illum, in ratione dolore, provident laudantium nisi alias quis culpa autem itaque nostrum ipsa!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, vel? 
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, nemo adipisci? Itaque libero ducimus consequatur?
              </p>
              <ul className='list-unstyled text-muted'>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li><i className='bi bi-check-circle-fill text-primary me-2'></i></li>
              </ul>
            </div>
          </div>


          {/* Seção 2 */}
          <div className='row align-items-center gy-4 mt-5 flex-row-reverse'>
            <div className="col-md-6">
              <h3 className='fw-bold mx-2'>
                Beautiful Dashboard
              </h3>
              <p className='text-muted lead fs-6 mx-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maiores!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam, blanditiis minus ex id a quas, dolorum porro officiis libero maiores eius delectus in mollitia!
              </p>
              <ul className='list-unstyled text-muted'>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li><i className='bi bi-check-circle-fill text-primary me-2'></i></li>
              </ul>
            </div>

             <div className='col-md-6'>
              <img 
              src={assets.lading2}
              className='img-fluid rounded shadow-lg'
              alt='Time'
              //onError={(e) => } 
              />
            </div>
          </div>

          {/* Seção 3 */}
          <div className='row align-items-center gy-4 mt-5 flex-row-reverse'>
            <div className='col-md-6'>
              <img 
              src={assets.lading3}
              className='img-fluid rounded shadow-lg'
              alt='Time'
              //onError={(e) => } 
              />
            </div>
            <div className="col-md-6">
              <h3 className='fw-bold mx-2'>
                Invoice Preview with Action Buttons
              </h3>
              <p className='text-muted lead fs-6 mx-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maiores!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil sint commodi tempora laboriosam voluptatibus.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quos!
              </p>
              <ul className='list-unstyled text-muted'>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li><i className='bi bi-check-circle-fill text-primary me-2'></i></li>
              </ul>
            </div>
          </div>

          {/* Seção 4 */}
          <div className='row align-items-center gy-4 mt-5 flex-row-reverse'>
            <div className="col-md-6">
              <h3 className='fw-bold mx-2'>
                Send invoices instantly
              </h3>
              <p className='text-muted lead fs-6 mx-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maiores!
                <br />
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae a tenetur consectetur error dicta explicabo cupiditate, vel totam vero et!
              </p>
              <ul className='list-unstyled text-muted'>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li className='mb-2'><i className='bi bi-check-circle-fill text-primary' ></i></li>
                <li><i className='bi bi-check-circle-fill text-primary me-2'></i></li>
              </ul>
            </div>

             <div className='col-md-6'>
              <img 
              src={assets.lading4}
              className='img-fluid rounded shadow-lg'
              alt='Time'
              //onError={(e) => } 
              />
            </div>
          </div>
        </div>
      </section>

      <section id='#generate-invoice' className='py-5 text-center bg-primary text-white'>
        <div className="container">
          <h2 className='display-5 fw-bold mb-3'>Ready to Streamline your Invoicing?</h2>
          <p className='lead mb-4 mx-auto' style={{maxWidth: '600px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt deleniti tempora eius cupiditate assumenda fuga, corporis dolore saepe veniam itaque molestias consequatur autem delectus.
          </p>
          <button className='btn btn-lg btn-warning fw-bold rounded-pill px-5 py-3'
          //OnClick
          >
            Start Generating Invoices Now
          </button>
          <p className="mt-3 small">
            (This will lead to the invoice generation interface)
          </p>
        </div>
      </section>

      <footer className='py-5 bg-dark text-white-50'>
        <div className='container text-center'>
          <Logo />
          <p className='text-white fw-bold mt-2'>QuickInvoice</p>
          <p className='mb-0 small'>
            &copy; {new Date().getFullYear()} Copy right QuickInvoice. All
          </p>
          <p className='mb-0 small'> 
            Created with <p>Paulotech</p>
          </p>
          <p className='mt-2'>
            <a href='#' className='me-2'><Facebook /></a>
            <a href='#' className='me-2' ><Twitter /></a>
            <a href='#' className='me-2'><Instagram /></a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
