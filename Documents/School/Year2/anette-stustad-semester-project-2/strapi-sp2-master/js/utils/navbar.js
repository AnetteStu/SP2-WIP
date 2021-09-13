const destionation = document.querySelector(".navPut");

export default function determenNav () {
    destionation.innerHTML = 
                                `
                                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                    <img src="../style/Logo.svg" alt="Shoe day Logo" height="55" class="d-inline-block align-text-top"/>
                    </a>
                <div class="container-fluid">
              <button
                class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="row">
                  <div class="container">
                    <div class="collapse navbar-collapse" id="navbarText">          
                      <div class="d-flex bd-highlight">
                        <div class="p-2 flex-grow-1 bd-highlight">
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link" href="index.html" >HOME</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" aria-current="page" href="products.html">PRODUCTS</a>
                            </li>
                          </ul>
                      </div>
                      </div>
                      <div class="d-flex bd-highlight">
                        <div class="p-2 bd-highlight">
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link" href="cart.html" id="cart">CART</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="login.html">LOGIN</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </nav>
                                `

}