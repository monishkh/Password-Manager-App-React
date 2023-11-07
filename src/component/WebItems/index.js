import './index.css'

const WebItems = props => {
  const {webDetails, isFalse, isShowOrNot} = props
  const {web, user, pass, id} = webDetails

  let firstWord
  if (web === '') {
    firstWord = ''
  } else {
    firstWord = web[0].toUpperCase()
  }

  const passWord = isFalse ? (
    pass
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
      className="star"
    />
  )

  const onDelete = () => {
    isShowOrNot(id)
  }

  return (
    <li>
      <div className="display-list">
        <p className="first-word">{firstWord}</p>
        <div className="names">
          <p>{web}</p>
          <p>{user}</p>
          <p>{passWord}</p>
        </div>
        <button type="button" onClick={onDelete} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="img-delete"
          />
        </button>
      </div>
    </li>
  )
}

export default WebItems
