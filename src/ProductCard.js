import "bootstrap/dist/css/bootstrap.min.css"

function ProductCard({ title, description, imageurl }) {
    return (
        <div className="card m-4 p-4"  >
            <img src={imageurl} style={{ height: "200px", width: "200px" }} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ProductCard