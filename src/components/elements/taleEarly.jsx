import React from 'react';

function TaleEarly() {
  return (
      <>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">
            <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">
              <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                {/* SVG and background elements omitted for brevity */}
              </div>

              <div className="relative flex flex-col lg:flex-row justify-between items-center">
                <div className="text-center lg:text-left lg:max-w-xl">
                  <h3 className="h3 text-white mb-2">Join Tale!</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Gain Early Access! Tale needs beta testers.
                  </p>

                  {/* Integrated Mailchimp form */}
                  <form
                      action="https://redgartech.us18.list-manage.com/subscribe/post?u=efc6105939bcc4763ba00e343&amp;id=6096d84808&amp;f_id=00a448e7f0"
                      method="post"
                      id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate w-full lg:w-auto"
                      target="_blank"
                  >
                    <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                      <input
                          type="email"
                          name="EMAIL"
                          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
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
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input type="text" name="b_efc6105939bcc4763ba00e343_6096d84808" tabindex="-1" value="" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}

export default TaleEarly;
