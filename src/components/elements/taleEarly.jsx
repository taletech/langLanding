import React from 'react';

function TaleEarly() {
  return (
      <>
        <div className="max-w-6xl mx-auto px-6 sm:px-6 mt-16 drop-shadow-2xl">
          <div className="relative bg-gray-900 rounded py-4 px-16 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left lg:max-w-xl">
                <p className="text-gray-300 text-lg mr-16">
                  Gain Early Access! Tale needs beta testers.
                </p>
              </div>
              {/* Integrated Mailchimp form */}
              <form
                  action="https://redgartech.us18.list-manage.com/subscribe/post?u=efc6105939bcc4763ba00e343&amp;id=6096d84808&amp;f_id=00a448e7f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate w-full lg:w-auto flex"
                  target="_blank"
              >
                <input
                    type="email"
                    name="EMAIL"
                    className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                    placeholder="yourname@tale.ai"
                    aria-label="Your email…"
                    required
                />
                <input
                    type="submit"
                    name="subscribe"
                    value="Subscribe"
                    className="btn text-white bg-red-600 hover:bg-red-700 shadow cursor-pointer"
                />
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_efc6105939bcc4763ba00e343_6096d84808" tabIndex="-1" value=""/>
                </div>
              </form>
            </div>
          </div>
        </div>

      </>
  );
}

export default TaleEarly;
