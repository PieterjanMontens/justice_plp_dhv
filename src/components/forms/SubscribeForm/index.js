import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Link } from 'gatsby'

export default class SubscribeForm extends React.Component {
  state = {
      FNAME: null,
      LNAME: null,
      email: null,
  }

  _handleChange = (e) => {
      console.log({
          [`${e.target.name}`]: e.target.value,
      });
      this.setState({
          [`${e.target.name}`]: e.target.value,
      });
  }

  _handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', this.state);
    addToMailchimp(
        this.state.email,
        this.state) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  render () {
    return (
      <div className="columns is-centered ">
        <form onSubmit={this._handleSubmit} className="column is-8">
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label" for="FNAME">Prénom / Voornaam</label>
            </div>
            <div className="field-label">
              <div className="field">
                <p className="control">
                  <input type="text" placeholder="Charles" name="FNAME" id="FNAME" required="true" onChange={this._handleChange}/>
                </p>
              </div>
              </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label">
               <label className="label" for="LNAME">Nom / Achternaam</label>
            </div>
            <div className="field-label">
              <div className="field">
                <p className="control">
                  <input type="text" placeholder="Rogier" name="LNAME" id="LNAME" required="true" onChange={this._handleChange}/>
                </p>
              </div>
            </div>
          </div>

          <div className="field is-horizontal">
            <div className="field-label is-normal">
               <label className="label" for="email">E-mail</label>
            </div>
            <div className="field-label">
              <div className="field">
                <p className="control">
                  <input type="email" placeholder="charles.rogier@pre.gov.be" name="email" id="email" required="true" onChange={this._handleChange}/>
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <Link className="button" to='/'>Page d'accueil / Homepagina</Link>
            </p>
            <p className="control">
              <input type="submit" value="Envoyer / Doorsturen" className="button is-primary" />
            </p>
          </div>
        </form>
      </div>
    )
  }
}

export { SubscribeForm }
/*
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
</style>
<div id="mc_embed_signup">
<form action="https://justice-pourlepeuple-doorhetvolk.us19.list-manage.com/subscribe/post?u=0ed89b1eb272e1e012aed871a&amp;id=cc27552906" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<h2>Subscribe</h2>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address </label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
<div class="mc-field-group">
	<label for="mce-FNAME">First Name </label>
	<input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
</div>
<div class="mc-field-group">
	<label for="mce-LNAME">Last Name </label>
	<input type="text" value="" name="LNAME" class="required" id="mce-LNAME">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0ed89b1eb272e1e012aed871a_cc27552906" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
*/
