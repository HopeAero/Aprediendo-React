import PropTypes from 'prop-types'

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} key={index} className={className}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.node.isRequired,
  isSelected: PropTypes.bool.isRequired,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
}
