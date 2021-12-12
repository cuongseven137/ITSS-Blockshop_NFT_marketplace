import Head from 'next/head'
import  Link from 'next/link'

export default function RegisterPage() {
    return (
      <div>
        <div class="sign-in-page"><a class="home-nav-link" href="/"><h3>SuperRare</h3></a>
      <div class="sign-in__container"><h2 class="sign-in__title">Welcome! Let's begin with your wallet.</h2>
      <button type="button" class="md-btn md-btn--flat md-btn--text md-pointer--hover md-background--primary md-background--primary-hover md-inline-block sign-in-btn__new">Select a wallet</button> <a class="sign-in__text-link set-wallet" href="https://help.superrare.co/en/articles/3575628-sign-in-faq-troubleshooting" target="_blank" rel="noopener noreferrer">First time setting up a wallet? </a>
      </div>
      </div>
      </div>
    )
}