import {Link} from 'react-router-dom'
import Logo from './Logo'
const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light-white shadow-sm sticky-top">
      <div className="container py-2">
        <Link className='navbar-brand d-flex align-items-center' to=''>
        <Logo />
        <span className='fw-border fs-4 mx-3' style={{letterSpacing: '-0.5px', color: '#0d6efdb2', fontStyle:'bold'}}>
          QuickInvoice
        </span>
        </Link>
        <button className="navar-toggler" type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarNav'
        aria-controls='#navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'>
          </span>
        </button>
        <div className="collapse navbar-collapse" id='navbarNav'>
          <ul className='navbar-nav ms-auto align-items-center'>
            <li className='nav-item'>
              <Link className='nav-link fw-medium' to='/'>
              Home 
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link fw-medium' to='/dashboard'>
              Dashboard 
              </Link>
            </li>
            <li className='nav-item'>
              <button className='nav-link fw-medium'>
                Gerador
              </button>
            </li>
            <li className='nav-item'>
              <button className="btn btn-primary rounded-pill px-4">
                Acessar/Cadastrar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menubar;