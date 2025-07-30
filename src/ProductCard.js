import "bootstrap/dist/css/bootstrap.min.css"

function ProductCard({ title, description, imageurl }) {
    return (
        <div className="card col-sm-12 col-md-4 col-lg-3 m-4 p-4justify-content-center"  >
            <img src={imageurl} style={{ height: "200px", width: "200px" }} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard