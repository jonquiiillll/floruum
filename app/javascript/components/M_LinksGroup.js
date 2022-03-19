import React from "react"
import PropTypes from "prop-types"
class M_LinksGroup extends React.Component {
  render () {
    return (
      <div className="links--group">
      <div className="florum--links">
      <p href="#" className="dark--link"> Флорум </p>
      <p href="#" className="grey--link"> О нас </p>
      <p href="#" className="grey--link"> Главная </p>
      <p href="#" className="grey--link"> Вопросы </p>
      <p href="#" className="grey--link"> Наши статьи </p>
      <p href="#" className="grey--link"> Стать партнером </p>
      <p href="#" className="grey--link"> Стать автором </p>
      <p href="#" className="grey--link"> Актуальное </p>
      <p href="#" className="grey--link"> Рейтинг </p>
      </div>
      <div className="media--links">
      <p href="#" className="dark--link"> Мы в соцсетях </p>
      <p href="#" className="grey--link"> Вконтакте </p>
      <p href="#" className="grey--link"> Facebook </p>
      <p href="#" className="grey--link"> Pinterest </p>
      <p href="#" className="grey--link"> Youtube </p>
      <p href="#" className="grey--link"> Instagram </p>
      <p href="#" className="grey--link"> Telegram </p>
      </div>
      </div>
    );
  }
}

export default M_LinksGroup
