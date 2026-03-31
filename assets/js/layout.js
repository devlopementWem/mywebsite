document.addEventListener("DOMContentLoaded", () => {

    const path = window.location.pathname;

    const active = (name) => path.includes(name) ? "active" : "";

    const base = path.includes("/projects/") ? "../" : "";

    const navbar = `
    <nav class="navbar navbar-expand-lg glass-nav">
        <div class="container">

            <a class="navbar-brand fw-bold" href="${base}index.html">
                <i class="bi bi-code-slash me-2"></i>موقعي
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end" id="nav">

                <ul class="navbar-nav align-items-center">

                    <li class="nav-item">
                        <a class="nav-link ${active('index')}" href="${base}index.html">الرئيسية</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link ${active('about')}" href="${base}about.html">منهجية العمل</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link ${active('portfolio')}" href="${base}portfolio.html">المشاريع</a>
                    </li>

                    <li class="nav-item ms-3">
                     <a class="nav-link ${active('contact')}" href="${base}contact.html"> ابدأ مشروعك </a>
                      
                    </li>

                    <li class="nav-item">
                     <a class="nav-link ${active('skills')}" href="${base}skills.html">المهارات</a>
   
         </li>

              <li class="nav-item">
               <a class="nav-link ${active('tech')}" href="${base}tech.html">التقنيات</a>
  
            </li>

                </ul>

            </div>

        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbar);

});