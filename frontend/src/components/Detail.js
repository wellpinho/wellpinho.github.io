import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useApi} from '../hooks/userApi'
import styled from 'styled-components';

function Detail({slug}) {
  const history = useHistory()
  const {data} = useApi(`/portfolio/${slug}`)

  const exiteDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
      history.push('/portfolio')
    }
  }

  return (
    <CardShadow className="shadow" onClick={exiteDetailHandler}>
      <div className="container">
        <div className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{data?.data.title}</h2>
              </div>
              <div className="modal-body">
                <p>{data?.data.description}</p>
                <h3>Technologies</h3>
                <div>
                  {data?.data.technologies.map(tech => {
                    return (
                      <div key={tech._id}>
                        <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size="4x" />
                        {tech.label}
                      </div>
                      )
                  })}
                </div>
                <p>Long description</p>
              </div>
              <img src={data?.data.image} alt="" />
              <div className="modal-footer">
                footer
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardShadow>
  );
}

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0, .5);
  position: fixed;
  border-radius: .3rem;
  top: 0;
  left: 0;
  z-index: 9998;
  &::-webkit-scrollbar {
    width: .5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`

export default Detail;