import React from "react";

function Footer() {
  return (
    <footer>
      <ul id="footer">
        <div id="logo_footer">
          <li>Echo</li>
        </div>

        <div id="text_footer">
          <li>
            <ul id="Contact">
              <li className="heading">Contact </li>
              <li>
                <a href="mailto:kientdn2403@gmail.com">Gmail</a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100013395218389">
                  Facebook
                </a>
              </li>
            </ul>
          </li>

          <li>
            <ul id=" Tools">
              <li className="heading">Tools</li>
              <li> Noise reduction</li>
              <li> Convert</li>
              <li> Cut</li>
              <li> Merge</li>
              <li> Bassboost</li>
              <li>Volume adjust</li>
            </ul>
          </li>
        </div>
      </ul>
    </footer>
  );
}
export default Footer;
