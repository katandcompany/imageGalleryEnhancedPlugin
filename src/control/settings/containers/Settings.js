import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Datastore from '../scripts/Datastore';
import ToggleButtons from '../components/ToggleButtons';

const Settings = () => {
  const datastore = new Datastore();
  const [pluginSettings, setPluginSettings] = useState({
    alwaysDisplayNavBar: null,
    activateFoldersAsDefaultView: null
  });

  const toggleValue = (target, setter) => {
    let boolean = null;
    if (target.value === 'true') {
      boolean = true;
    }
    if (target.value === 'false') {
      boolean = false;
    }
    return setter(prevState => (
      {
        ...prevState,
        [target.id]: (boolean !== null) ? boolean : target.value
      }
    ));
  };

  const onChange = e => {
    e.persist();
    return toggleValue(e.target, setPluginSettings);
  };

  const onSubmit = e => {
    e.preventDefault();
    datastore.save(pluginSettings, (err, result) => {
      if (err) throw new Error(err);
      if (result) return true;
    });
  };

  useEffect(() => {
    const getPluginSettings = async () => {
      await datastore.get((err, result) => {
        if (err) throw new Error(err);
        setPluginSettings(prevState => ({
          ...prevState,
          ...result.data
        }));
      });
    };
    getPluginSettings();
  }, []);

  return (
    <>
      <h1 className="title margin-bottom-lg">Settings</h1>
      <form onSubmit={onSubmit}>
        <div className="input__group">
          <p>Always Display Navbar</p>
          <ToggleButtons
            settingName="alwaysDisplayNavBar"
            onLabel="On"
            onValue
            offLabel="Off"
            offValue={false}
            currentValue={pluginSettings.alwaysDisplayNavBar}
            eventListener={onChange} />
        </div>
        <div className="input__group">
          <p>Activate Folder View as Default View</p>
          <ToggleButtons
            settingName="activateFoldersAsDefaultView"
            onLabel="On"
            onValue
            offLabel="Off"
            offValue={false}
            currentValue={pluginSettings.activateFoldersAsDefaultView}
            eventListener={onChange} />
        </div>
        <button type="submit" className="btn btn--add">Save Changes</button>
      </form>
    </>
  );
};

export default hot(Settings);
