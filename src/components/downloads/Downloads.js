import React from 'react';
import Config from '../../Config';
import Utility from '../../Utility';

import Banner from '../navigation/banner/Banner';

class Downloads extends React.Component {

    componentDidMount() {
        Utility.setTitle("Downloads");
    }

    getSetup() {
        return (
            <div>
                <h1>{Config.server_name + " Setup: Mega"}</h1>
                <a href={Config.mega_download_link} target="_blank">
                    <div className="download-link">
                        <img src="/images/setup.png" alt="Setup" />
                        <div className="download-description">
                            <h2>Click here to download our setup.</h2>
                            <h3>Run as administrator.</h3>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    getClient() {
        return (
            <div>
                <h1>{Config.server_name + " Setup: Google Drive"}</h1>
                <a href={Config.gdrive_download_link} target="_blank">
                    <div className="download-link">
                        <img src="/images/client.png" alt="Client" />
                        <div className="download-description">
                            <h2>Click here to download our setup.</h2>
                            <h3>Run as administrator.</h3>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    getLauncher(){
        return (
            <div>
                <h1>{Config.server_name + " Launcher"}</h1>
                <a href={Config.gdrive_launcher_link} target="_blank">
                    <div className="download-link">
                        <img src="/images/clientbw.png" alt="Client" />
                        <div className="download-description">
                            <h2>My-MS Launcher</h2>
                            <h3>Coming Soon!</h3>
                        </div>
                    </div>
                </a>
            </div>
        );
    }

    render() {

      return (
          <div>
              <Banner title="Downloads" subtitle="Get the files you need to get in-game!" />
              <main className="downloads">
                  <h1>Installation Instructions</h1>
                  <ol>
                      <li>Download the Windows setup for {Config.server_name}.</li>
                      <li>Double-click the client after extracting to a folder to start playing!</li>
                      <li>Login with your account credentials. If you haven't registered, please do so!</li>
                  </ol>
                  {this.getSetup()}
                  {this.getClient()}
                  {this.getLauncher()}
              </main>
          </div>
      );
    }
}

export default Downloads;
