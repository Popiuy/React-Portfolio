export default function Resume() {
    return(
        <div>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Coding Skills
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <pre>
                    - HTML/CSS/JavaScript
                    - Web APIs
                    - Node.js 
                    - Express.js 
                    - React.js
                    - MySQL 
                    - NoSQL 
                    - MVC
                    </pre>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}