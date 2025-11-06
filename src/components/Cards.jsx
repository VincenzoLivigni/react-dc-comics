export default function Cards({ thumb, title }) {

    return (
        <div>
            <div >
                <div className="img-container">
                    <img className="card-img-top" src={thumb} alt="#" />
                </div>
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                </div>

            </div>
        </div>
    )
}