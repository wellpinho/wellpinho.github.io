import moment from 'moment'
import { Link } from 'react-router-dom'
import './card.css'

function Card({item}) {
  const data = item.createdAt = moment().format('DD-MM-YYYY');

  return (
    <div className="col">
      <Link to={`/portfolio/${item.slug}`}>
        <div class="card">
          <img src={ item.image } class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{ item.title }</h5>
            <small>{ data }</small>
            <p class="card-text">{ item.description }</p>
            <a href={ item.link } class="btn btn-warning">Go somewhere</a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;