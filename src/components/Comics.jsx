import Cards from './Cards'

export default function Comics({ comics }) {
    return (
        <section className="content d-flex align-items-center pb-4">
            <div className="container-comic">
                <div className='comic row row-cols-1 row-cols-sm-1 row-cols-md-4 row-cols-lg-6 g-3'>
                    {
                        comics.map(comic => (
                            <Cards key={comic.id} thumb={comic.thumb} title={comic.title} />
                        ))
                    }
                </div>
            </div>

            <button className="button-comics">LOAD MORE</button>
        </section>
    )
}