import React from 'react';
function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid text-white">
                    <a className="navbar-brand" href="#">FakeStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Women's </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Mens</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Beauty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Electronics</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Furniture</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="btn-group justify-content-end">
      <button className="btn btn-info "  style={{justifyContent:"space-around",marginRight:"10px",borderRadius:"15px"}} type="submit">Search</button>
      <button className="btn btn-info"  style={{justifyContent:"space-around",marginRight:"10px",borderRadius:"15px"}} type="submit">Cart</button>
    </div>
     </nav>
       
        </>
    );
}

export default App;
