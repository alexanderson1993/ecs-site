import React from 'react'
import Link from 'gatsby-link'
import StripeCheckout from 'react-stripe-checkout'

const Header = props => {
  const onToken = charge => {
    fetch(`https://stripe-checkout-dazzcxayky.now.sh/charge`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({
        stripeToken: charge.id,
        stripeEmail: charge.email,
        description: 'ECS Purchase',
        amount: 3500,
      }),
    }).catch(err => {
      console.error('Error:', err)
      alert(
        'Sorry, There was an error processing your payment. Please try again.'
      )
    })
  }
  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon  fa-sliders" />
      </div>
      <div className="content">
        <div className="inner">
          <h1>ECS</h1>
          <p>
            DMX Lighting, Sound, Effects and more, right at your fingertips.
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a
              href="javascript:;"
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </a>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
          <li>
            <StripeCheckout
              token={onToken}
              name="ECS Purchase"
              description="Fyreworks LLC"
              panelLabel={`Pay`}
              currency="USD"
              amount={3500}
              image={require('../images/icon.jpg')}
              stripeKey="pk_live_B64x8t6rLJNzanCWVXOs1pu5"
            >
              <a href="javascript:;">Buy</a>
            </StripeCheckout>
          </li>
          <li>
            <a href="mailto:alex@fyreworks.us">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Header
